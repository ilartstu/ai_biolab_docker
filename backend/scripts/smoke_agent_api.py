from __future__ import annotations

import http.cookiejar
import json
import os
import time
import urllib.request
import uuid

REQUIRED_METRICS = {
    "cum_infections",
    "cum_critical",
    "cum_recoveries",
    "cum_deaths",
    "new_infections",
    "new_critical",
    "new_recoveries",
    "new_deaths",
}


def read_json(opener, url: str):
    with opener.open(url, timeout=120) as response:
        return json.loads(response.read().decode("utf-8"))


def execute(opener, base_url: str, client_request_id: str) -> dict:
    payload = {
        "client_request_id": client_request_id,
        "region_id": "novosibirsk_oblast",
        "sim_params": {
            "pop_size": int(os.environ.get("AGENT_SMOKE_POP_SIZE", "10000")),
            "pop_infected": 10,
            "forecast_days": 10,
            "beta": 0.02,
        },
        "interventions": [
            {"date": "2020-03-17", "beta_change": 0.7},
        ],
    }
    request = urllib.request.Request(
        f"{base_url}/api/models/agent/runs",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Idempotency-Key": f"agent-smoke-{uuid.uuid4()}",
        },
        method="POST",
    )
    with opener.open(request, timeout=120) as response:
        run = json.loads(response.read().decode("utf-8"))

    print(f"run_id={run['run_id']} status={run['status']}")
    status_url = f"{base_url}{run['status_url']}"
    results_url = f"{base_url}{run['results_url']}"
    for _ in range(300):
        status = read_json(opener, status_url)
        print(
            f"{status['status']:>18} {status.get('progress', 0):>5}% "
            f"{status.get('message', '')}"
        )
        if status["status"] == "completed":
            return read_json(opener, results_url)
        if status["status"] in {"failed", "cancelled", "expired"}:
            raise SystemExit(json.dumps(status, ensure_ascii=False, indent=2))
        time.sleep(1)
    raise SystemExit("Timed out waiting for agent API smoke test.")


def validate(result: dict) -> None:
    rows = result.get("series") or []
    if not rows:
        raise SystemExit("Agent result has no series rows")
    missing = REQUIRED_METRICS.difference(rows[0])
    if missing:
        raise SystemExit(f"Missing metrics: {sorted(missing)}")
    print(
        json.dumps(
            {
                "run_id": result.get("run_id"),
                "cache_status": result.get("cache_status"),
                "rows": len(rows),
                "first": rows[0],
                "last": rows[-1],
                "summary": result.get("summary"),
            },
            ensure_ascii=False,
            indent=2,
        )
    )


def main() -> None:
    base_url = os.environ.get("API_URL", "http://localhost:8001").rstrip("/")
    jar = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))

    print("=== First request: real Covasim calculation or existing DB hit ===")
    first = execute(opener, base_url, f"agent-smoke-first-{uuid.uuid4()}")
    validate(first)

    print("=== Second request: must be an exact PostgreSQL cache hit ===")
    second = execute(opener, base_url, f"agent-smoke-second-{uuid.uuid4()}")
    validate(second)
    if second.get("cache_status") != "hit":
        raise SystemExit(
            "Second request was not served from PostgreSQL exact-request cache"
        )
    print("Agent inference and exact PostgreSQL cache: OK")


if __name__ == "__main__":
    main()
