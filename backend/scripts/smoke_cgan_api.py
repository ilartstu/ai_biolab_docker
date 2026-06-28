from __future__ import annotations

import http.cookiejar
import json
import os
import time
import urllib.request
import uuid


def read_json(opener, url: str):
    with opener.open(url, timeout=60) as response:
        return json.loads(response.read().decode("utf-8"))


def main() -> None:
    base_url = os.environ.get("API_URL", "http://localhost:8001").rstrip("/")
    jar = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    payload = {
        "client_request_id": f"cgan-smoke-{uuid.uuid4()}",
        "region_id": "spb",
        "context_date": os.environ.get("CGAN_CONTEXT_DATE", "2024-03-06"),
        "model_ids": ["cgan"],
        "indicator_id": "new_diagnoses",
        "mode": "single_model",
        "horizon_days": 5,
        "context_days": 14,
    }
    request = urllib.request.Request(
        f"{base_url}/api/models/ml-forecast/runs",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Idempotency-Key": f"cgan-smoke-{uuid.uuid4()}",
        },
        method="POST",
    )
    with opener.open(request, timeout=60) as response:
        run = json.loads(response.read().decode("utf-8"))

    print(f"run_id={run['run_id']} status={run['status']}")
    status_url = f"{base_url}{run['status_url']}"
    results_url = f"{base_url}{run['results_url']}"

    for _ in range(180):
        status = read_json(opener, status_url)
        print(f"{status['status']:>18} {status.get('progress', 0):>5}% {status.get('message', '')}")
        if status["status"] == "completed":
            result = read_json(opener, results_url)
            forecast = result["models"][0]["forecast"]
            print(json.dumps({
                "run_id": result["run_id"],
                "forecast_rows": len(forecast),
                "first_forecast": forecast[0],
                "artifacts": result.get("artifacts", {}),
            }, ensure_ascii=False, indent=2))
            return
        if status["status"] in {"failed", "cancelled", "expired"}:
            raise SystemExit(json.dumps(status, ensure_ascii=False, indent=2))
        time.sleep(1)

    raise SystemExit("Timed out waiting for CGAN API smoke test.")


if __name__ == "__main__":
    main()
