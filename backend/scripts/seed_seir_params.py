"""Засеять таблицу seir_params из JSON-файлов в /data/seir/.

Запуск:
    docker compose exec api python scripts/seed_seir_params.py

Имена файлов: params_<label>.json (например, params_08_04_2022.json).
По умолчанию все params относятся к novosibirsk (там калибровалось).

Идемпотентно: ON CONFLICT (region_slug, label) DO NOTHING.
"""
from __future__ import annotations
import json
import logging
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from psycopg.types.json import Jsonb

from app.core import db

logger = logging.getLogger(__name__)


def seed_seir_params(
    data_dir: Path = Path("/data/seir"),
    default_region_slug: str = "novosibirsk",
) -> int:
    """Залить params_*.json в seir_params."""
    if not data_dir.exists():
        logger.warning("seed_seir_params: каталог %s не найден — пропускаю", data_dir)
        return 0

    inserted = 0
    with db.connect() as conn:
        for path in sorted(data_dir.glob("params_*.json")):
            label = path.stem.removeprefix("params_")
            with path.open(encoding="utf-8") as f:
                params = json.load(f)

            result = conn.execute(
                """
                INSERT INTO seir_params(region_slug, label, params)
                VALUES (%s, %s, %s)
                ON CONFLICT(region_slug, label) DO NOTHING
                """,
                (default_region_slug, label, Jsonb(params)),
            )
            if result.rowcount and result.rowcount > 0:
                inserted += 1
                logger.info("  %s → label=%s, region=%s (NEW)", path.name, label, default_region_slug)
            else:
                logger.info("  %s → label=%s (already exists)", path.name, label)
        conn.commit()
    return inserted


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    n = seed_seir_params()
    print(f"[seed_seir_params] inserted={n}")
