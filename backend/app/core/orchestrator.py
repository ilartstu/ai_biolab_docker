from __future__ import annotations
import asyncio, hashlib, json, time, uuid
from collections import defaultdict, deque
from dataclasses import dataclass, field
from datetime import date, datetime, timezone
from typing import Any, Awaitable, Callable
from fastapi import Request, Response
from app.core.errors import api_error
from app.core.settings import settings

def now_utc() -> datetime:
    return datetime.now(timezone.utc)

def jsonable(value: Any) -> Any:
    if isinstance(value, dict):
        return {k: jsonable(v) for k, v in value.items()}
    if isinstance(value, list):
        return [jsonable(v) for v in value]
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    return value

def request_hash(section: str, payload: dict[str, Any]) -> str:
    raw = json.dumps({"section": section, "payload": payload, "data_version": "postgres-current"}, ensure_ascii=False, sort_keys=True, default=str, separators=(",", ":"))
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()

@dataclass
class Run:
    run_id: str
    section: str
    payload: dict[str, Any]
    request_hash: str
    anon_session_id: str
    ip: str
    status: str = "queued"
    cache_status: str = "miss"
    progress: float | None = 0
    queue_position: int | None = None
    estimated_seconds: int | None = 3
    message: str = "Задача поставлена в очередь."
    created_at: datetime = field(default_factory=now_utc)
    started_at: datetime | None = None
    finished_at: datetime | None = None
    last_heartbeat_at: datetime | None = None
    cancel_requested_at: datetime | None = None
    error: dict[str, Any] | None = None
    result: dict[str, Any] | None = None

class SlidingLimiter:
    def __init__(self) -> None:
        self.events: dict[str, deque[float]] = defaultdict(deque)

    def allow(self, key: str, limit: int, window_seconds: int) -> bool:
        current = time.time()
        q = self.events[key]
        while q and current - q[0] > window_seconds:
            q.popleft()
        if len(q) >= limit:
            return False
        q.append(current)
        return True

class Orchestrator:
    def __init__(self) -> None:
        self.runs: dict[str, Run] = {}
        self.idempotency: dict[tuple[str, str], str] = {}
        self.completed_by_hash: dict[str, str] = {}
        self.active_by_hash: dict[str, str] = {}
        self.semaphore = asyncio.Semaphore(settings.max_parallel_runs)
        self.limiter = SlidingLimiter()

    def client_ip(self, request: Request) -> str:
        forwarded = request.headers.get("x-forwarded-for")
        return forwarded.split(",")[0].strip() if forwarded else (request.client.host if request.client else "unknown")

    def ensure_session(self, request: Request, response: Response) -> str:
        sid = request.cookies.get("anon_session_id")
        if not sid:
            sid = str(uuid.uuid4())
            response.set_cookie(key="anon_session_id", value=sid, httponly=True, samesite="lax", secure=settings.secure_cookie, max_age=7 * 24 * 60 * 60)
        return sid

    def check_rate(self, key: str, limit: int, window: int, retry_after: int = 30) -> None:
        if not self.limiter.allow(key, limit, window):
            api_error(429, "RATE_LIMIT_EXCEEDED", "Слишком много запросов. Попробуйте позже.", headers={"Retry-After": str(retry_after)})

    def active_for_session(self, session_id: str) -> list[Run]:
        return [r for r in self.runs.values() if r.anon_session_id == session_id and r.status in {"queued", "running", "processing_results", "cancel_requested"}]

    def active_for_ip(self, ip: str) -> list[Run]:
        return [r for r in self.runs.values() if r.ip == ip and r.status in {"queued", "running", "processing_results", "cancel_requested"}]

    def queued_count(self) -> int:
        return sum(1 for r in self.runs.values() if r.status == "queued")

    def create_response(self, run: Run) -> dict[str, Any]:
        base_section = "agent" if run.section == "agent" else "ml-forecast"
        base = f"/api/models/{base_section}/runs/{run.run_id}"
        return jsonable({
            "run_id": run.run_id,
            "status": run.status,
            "cache_status": run.cache_status,
            "queue_position": run.queue_position,
            "estimated_seconds": run.estimated_seconds,
            "status_url": f"{base}/status",
            "results_url": f"{base}/results",
            "message": run.message,
            "created_at": run.created_at,
        })

    async def create_run(self, *, section: str, payload: dict[str, Any], request: Request, response: Response, idempotency_key: str | None, worker_func: Callable[[dict[str, Any], str], Awaitable[dict[str, Any]]]) -> tuple[dict[str, Any], int]:
        ip = self.client_ip(request)
        session_id = self.ensure_session(request, response)
        self.check_rate(f"post-runs:{ip}", 5, 60)

        if not idempotency_key:
            api_error(400, "IDEMPOTENCY_KEY_REQUIRED", "Для POST /runs нужен header Idempotency-Key.")

        idem = (session_id, idempotency_key)
        if idem in self.idempotency:
            return self.create_response(self.runs[self.idempotency[idem]]), 200

        h = request_hash(section, payload)
        if h in self.completed_by_hash:
            run = self.runs[self.completed_by_hash[h]]
            run.cache_status = "hit"
            self.idempotency[idem] = run.run_id
            return self.create_response(run), 200

        if h in self.active_by_hash:
            run = self.runs[self.active_by_hash[h]]
            run.cache_status = "running_same_request"
            self.idempotency[idem] = run.run_id
            return self.create_response(run), 200

        if self.active_for_session(session_id):
            api_error(409, "TOO_MANY_ACTIVE_RUNS", "У этой сессии уже есть активный расчёт.")
        if len(self.active_for_ip(ip)) >= 3:
            api_error(409, "TOO_MANY_ACTIVE_RUNS", "С этого IP уже выполняется слишком много расчётов.")
        if self.queued_count() >= settings.max_queue_size:
            api_error(503, "QUEUE_FULL", "Очередь расчётов заполнена. Попробуйте позже.", headers={"Retry-After": "60"})

        run = Run(run_id=str(uuid.uuid4()), section=section, payload=payload, request_hash=h, anon_session_id=session_id, ip=ip, queue_position=self.queued_count() + 1, estimated_seconds=settings.mock_sleep_seconds, last_heartbeat_at=now_utc())
        self.runs[run.run_id] = run
        self.idempotency[idem] = run.run_id
        self.active_by_hash[h] = run.run_id
        asyncio.create_task(self._run_worker(run.run_id, worker_func))
        return self.create_response(run), 201

    async def _run_worker(self, run_id: str, worker_func: Callable[[dict[str, Any], str], Awaitable[dict[str, Any]]]) -> None:
        run = self.runs[run_id]
        async with self.semaphore:
            if run.status == "cancelled":
                return
            run.status = "running"
            run.started_at = now_utc()
            run.queue_position = None
            run.progress = 10
            run.message = "Выполняется расчёт."
            try:
                result = await worker_func(run.payload, run.run_id)
                if run.status == "cancel_requested":
                    run.status = "cancelled"
                    run.finished_at = now_utc()
                    run.message = "Задача отменена пользователем."
                    self.active_by_hash.pop(run.request_hash, None)
                    return
                run.status = "processing_results"
                run.progress = 90
                run.message = "Обработка результата."
                await asyncio.sleep(0.2)
                run.result = result
                run.status = "completed"
                run.progress = 100
                run.finished_at = now_utc()
                run.message = "Результат готов."
                self.completed_by_hash[run.request_hash] = run.run_id
                self.active_by_hash.pop(run.request_hash, None)
            except Exception as exc:
                run.status = "failed"
                run.error = {"code": "MODEL_EXECUTION_ERROR", "message": str(exc)}
                run.finished_at = now_utc()
                run.message = "Ошибка выполнения модели."
                self.active_by_hash.pop(run.request_hash, None)

    def get_run(self, run_id: str) -> Run:
        run = self.runs.get(run_id)
        if not run:
            api_error(404, "RUN_NOT_FOUND", "Задача не найдена.")
        return run

    def status(self, run_id: str, request: Request) -> dict[str, Any]:
        self.check_rate(f"status:{self.client_ip(request)}", 120, 60, 5)
        run = self.get_run(run_id)
        run.last_heartbeat_at = now_utc()
        return jsonable({"run_id": run.run_id, "status": run.status, "progress": run.progress, "queue_position": run.queue_position, "estimated_seconds": run.estimated_seconds, "message": run.message, "created_at": run.created_at, "started_at": run.started_at, "finished_at": run.finished_at, "last_heartbeat_at": run.last_heartbeat_at, "error": run.error})

    def result(self, run_id: str, request: Request) -> dict[str, Any]:
        self.check_rate(f"result:{self.client_ip(request)}", 60, 60, 10)
        run = self.get_run(run_id)
        run.last_heartbeat_at = now_utc()
        if run.status != "completed":
            api_error(409, "RUN_NOT_COMPLETED", "Результат ещё не готов.")
        return jsonable(run.result)

    def cancel(self, run_id: str, reason: str | None = None) -> dict[str, Any]:
        run = self.get_run(run_id)
        if run.status == "completed":
            api_error(409, "RUN_ALREADY_COMPLETED", "Задача уже завершена.")
        if run.status == "cancelled":
            api_error(409, "RUN_ALREADY_CANCELLED", "Задача уже отменена.")
        if run.status == "queued":
            run.status = "cancelled"
            run.finished_at = now_utc()
            self.active_by_hash.pop(run.request_hash, None)
        else:
            run.status = "cancel_requested"
            run.cancel_requested_at = now_utc()
        run.message = "Запрошена отмена задачи."
        return {"run_id": run.run_id, "status": run.status, "message": run.message, "reason": reason}

    def active(self, request: Request, response: Response) -> dict[str, Any]:
        sid = self.ensure_session(request, response)
        items = []
        for run in self.active_for_session(sid):
            base_section = "agent" if run.section == "agent" else "ml-forecast"
            base = f"/api/models/{base_section}/runs/{run.run_id}"
            items.append(jsonable({"run_id": run.run_id, "section": run.section, "status": run.status, "created_at": run.created_at, "status_url": f"{base}/status", "results_url": f"{base}/results", "params_preview": {"section": run.section}}))
        return {"items": items}

orchestrator = Orchestrator()
