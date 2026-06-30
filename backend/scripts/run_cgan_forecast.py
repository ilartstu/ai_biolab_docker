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
    parser.add_argument("--data-dir", type=Path, default=settings.cgan_data_dir)
    parser.add_argument("--output-dir", type=Path, default=settings.generated_dir / "cgan")
    args = parser.parse_args()

    def progress(value: float, message: str) -> None:
        print(f"[{value:5.1f}%] {message}")

    forecaster = CGANForecaster(
        data_dir=args.data_dir,
        output_dir=args.output_dir,
        n_trajectories=args.n_trajectories,
    )
    result = forecaster.predict(
        context_date=args.context_date,
        region_id=args.region_id,
        indicator_id=args.indicator_id,
        run_id=f"direct-cgan-{args.context_date}",
        n_trajectories=args.n_trajectories,
        progress_callback=progress,
    )

    print(json.dumps({
        "model_id": result["model_id"],
        "context_date": result["diagnostics"]["context_date"],
        "input_shape": result["diagnostics"]["input_shape"],
        "n_trajectories": result["diagnostics"]["n_trajectories"],
        "forecast": result["forecast"],
        "artifact": result["artifact"],
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
