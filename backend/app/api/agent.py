from __future__ import annotations
from fastapi import APIRouter, Header, Request, Response
from fastapi.responses import JSONResponse
from app.core.orchestrator import jsonable, orchestrator
from app.core.schemas import AgentRunRequest, CancelRequest
from app.providers.factory import get_provider

router = APIRouter(prefix="/api/models/agent", tags=["agent"])
provider = get_provider()

@router.get("/config")
async def config():
    return provider.agent_config()

@router.post("/runs")
async def create_run(payload: AgentRunRequest, request: Request, response: Response, idempotency_key: str | None = Header(default=None, alias="Idempotency-Key")):
    data, status = await orchestrator.create_run(
        section="agent",
        payload=payload.model_dump(mode="json"),
        request=request,
        response=response,
        idempotency_key=idempotency_key,
        worker_func=provider.run_agent,
    )
    return JSONResponse(status_code=status, content=jsonable(data))

@router.get("/runs/{run_id}/status")
async def status(run_id: str, request: Request):
    return orchestrator.status(run_id, request)

@router.get("/runs/{run_id}/results")
async def results(run_id: str, request: Request):
    return orchestrator.result(run_id, request)

@router.post("/runs/{run_id}/cancel")
async def cancel(run_id: str, payload: CancelRequest | None = None):
    return orchestrator.cancel(run_id, payload.reason if payload else None)

@router.get("/runs/{run_id}/table")
async def table(run_id: str, request: Request):
    result = orchestrator.result(run_id, request)
    return {
        "run_id": run_id,
        "columns": [{"key": key, "label": key} for key in ["date", "cum_infections", "new_infections", "cum_deaths", "new_deaths"]],
        "rows": result.get("series", []),
        "pagination": None,
    }
