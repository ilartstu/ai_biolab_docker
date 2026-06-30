from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.core.settings import settings
from app.modeling.agent import CovasimAgentRunner


def main() -> None:
    runner = CovasimAgentRunner(
        start_day=settings.agent_start_day,
        rand_seed=settings.agent_rand_seed,
        model_version=settings.agent_model_version,
        max_interventions=settings.agent_max_interventions,
    )
    payload = {
        "client_request_id": "direct-agent-smoke",
        "region_id": "novosibirsk_oblast",
        "sim_params": {
            "pop_size": 10000,
            "pop_infected": 10,
            "forecast_days": 10,
            "beta": 0.02,
        },
        "interventions": [{"date": "2020-03-17", "beta_change": 0.7}],
    }
    result = runner.predict(
        payload=payload,
        run_id="direct-agent-smoke",
        allowed_region_ids={"novosibirsk_oblast"},
        progress_callback=lambda value, message: print(f"[{value:5.1f}%] {message}"),
    )
    print(
        json.dumps(
            {
                "rows": len(result["series"]),
                "summary": result["summary"],
                "first": result["series"][0],
                "last": result["series"][-1],
            },
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
