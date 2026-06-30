from __future__ import annotations
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.core import db
from app.core.settings import settings

def read_json(path: Path):
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)

def main() -> None:
    db.init_db(ROOT / "db" / "schema.sql")
    mock_dir = settings.mock_data_dir
    if not mock_dir.is_absolute():
        mock_dir = ROOT / mock_dir

    with db.connect() as conn:
        db.upsert_config(conn, "agent", read_json(mock_dir / "agent" / "config.json"))
        db.upsert_config(conn, "ml_forecast", read_json(mock_dir / "ml_forecast" / "config.json"))
        db.upsert_config(conn, "mfg", read_json(mock_dir / "mfg" / "config.json"))

        for path in (mock_dir / "ml_forecast" / "results").glob("*.json"):
            db.upsert_ml_model_result(conn, path.stem, read_json(path))

        db.upsert_ml_precomputed(conn, "modeling", "default", "default", "default", read_json(mock_dir / "ml_forecast" / "precomputed" / "modeling.json"))
        db.upsert_ml_precomputed(conn, "validation", "default", "default", "default", read_json(mock_dir / "ml_forecast" / "precomputed" / "validation.json"))

        imported = 0
        skipped = 0
        for path in (mock_dir / "mfg" / "scenarios").glob("*.json"):
            parts = path.stem.split("__")
            if len(parts) != 3:
                print(f"Skip scenario with unexpected name: {path.name}")
                skipped += 1
                continue
            region_id, period_id, strategy_id = parts
            data = read_json(path)
            scenario_id = f"{region_id}:{period_id}:{strategy_id}"
            inserted = db.insert_mfg_scenario_if_missing(
                conn,
                scenario_id=scenario_id,
                region_id=region_id,
                period_id=period_id,
                strategy_id=strategy_id,
                data=data,
                source_file=str(path),
            )
            if inserted:
                imported += 1
                print(f"Imported mock scenario {path.name} -> {scenario_id}")
            else:
                skipped += 1
                print(f"Skip existing mock scenario {path.name} -> {scenario_id}")

        conn.commit()

    print(f"Mock data imported. mfg_imported={imported}, mfg_skipped_existing={skipped}")

if __name__ == "__main__":
    main()
