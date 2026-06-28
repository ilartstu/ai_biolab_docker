"""Засеять таблицу regions из inline-списка REGIONS (75 регионов РФ).

Запуск:
    docker compose exec api python scripts/seed_regions.py
    docker compose run --rm db-init python scripts/seed_regions.py

Идемпотентно: ON CONFLICT(slug) DO NOTHING.
"""
from __future__ import annotations
import logging
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.core import db
from scripts.regions_data import REGIONS

logger = logging.getLogger(__name__)


def seed_regions() -> int:
    """Залить 75 регионов в таблицу regions. Возвращает число вставленных строк."""
    inserted = 0
    with db.connect() as conn:
        for (slug, name, district, center, population, area, density) in REGIONS:
            result = conn.execute(
                """
                INSERT INTO regions(slug, name, district, center, population, area, density)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT(slug) DO NOTHING
                """,
                (slug, name, district, center, population, area, density),
            )
            if result.rowcount and result.rowcount > 0:
                inserted += 1
        conn.commit()
    logger.info("seed_regions: inserted %d / total %d", inserted, len(REGIONS))
    return inserted


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    n = seed_regions()
    print(f"[seed_regions] inserted={n} total={len(REGIONS)}")
