from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.core.settings import settings
from app.modeling.cgan import CGANForecaster


def main() -> None:
    parser = argparse.ArgumentParser(description="Run a direct CGAN forecast smoke test.")
    parser.add_argument("--context-date", default="2024-03-06")
    parser.add_argument("--region-id", default="spb")
    parser.add_argument("--indicator-id", default="new_diagnoses")
    parser.add_argument("--n-trajectories", type=int, default=3)
    args = parser.parse_args()
    forecaster = CGANForecaster(
        data_dir=settings.cgan_data_dir,
        output_dir=settings.generated_dir / "cgan",
        n_trajectories=args.n_trajectories,
    )
    result = forecaster.predict(
        context_date=args.context_date,
        region_id=args.region_id,
        indicator_id=args.indicator_id,
        run_id=f"direct-cgan-{args.context_date}",
        n_trajectories=args.n_trajectories,
        progress_callback=lambda value, message: print(f"[{value:5.1f}%] {message}"),
    )
    print(json.dumps({
        "model_id": result["model_id"],
        "diagnostics": result["diagnostics"],
        "forecast": result["forecast"],
        "artifact": result["artifact"],
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
