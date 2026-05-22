"""Засеять таблицу regions из statиc-списка REGIONS.

Запуск: docker compose exec api python -m app.scripts.seed_regions
Идемпотентно: ON CONFLICT (slug) DO NOTHING.
"""
import logging

from sqlalchemy.dialects.postgresql import insert as pg_insert

from app.core.database import SessionLocal, init_db
from app.models.region import Region
from app.scripts.regions_data import REGIONS

logger = logging.getLogger(__name__)


def seed_regions() -> int:
    init_db()  # на случай если таблицы ещё не созданы
    db = SessionLocal()
    try:
        rows = [
            {
                "slug": slug,
                "name": name,
                "district": district,
                "center": center,
                "population": pop,
                "area": area,
                "density": density,
            }
            for (slug, name, district, center, pop, area, density) in REGIONS
        ]
        stmt = pg_insert(Region).values(rows).on_conflict_do_nothing(index_elements=["slug"])
        result = db.execute(stmt)
        db.commit()
        inserted = result.rowcount or 0
        logger.info("seed_regions: добавлено %d / всего %d", inserted, len(rows))
        return inserted
    finally:
        db.close()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    n = seed_regions()
    print(f"[seed_regions] inserted={n} total={len(REGIONS)}")
