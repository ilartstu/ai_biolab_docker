"""Засеять таблицу seir_params из JSON-файлов в /data/seir/.

Запуск: docker compose exec api python -m app.scripts.seed_seir_params

Имя файла вида params_<label>.json → label сохраняется в БД.
"""
import json
import logging
from pathlib import Path

from app.core.database import SessionLocal, init_db
from app.models.seir_params import SeirParams

logger = logging.getLogger(__name__)


def seed_seir_params(
    data_dir: Path = Path("/data/seir"),
    default_region_slug: str = "novosibirsk",
) -> int:
    init_db()
    if not data_dir.exists():
        logger.warning("seed_seir_params: каталог %s не найден — пропускаю", data_dir)
        return 0

    db = SessionLocal()
    inserted = 0
    try:
        for path in sorted(data_dir.glob("params_*.json")):
            label = path.stem.removeprefix("params_")
            with path.open(encoding="utf-8") as f:
                params = json.load(f)

            existing = (
                db.query(SeirParams)
                .filter_by(region_slug=default_region_slug, label=label)
                .first()
            )
            if existing:
                logger.info("  %s уже есть в БД — пропускаю", path.name)
                continue

            row = SeirParams(
                region_slug=default_region_slug,
                label=label,
                params=params,
            )
            db.add(row)
            db.commit()
            inserted += 1
            logger.info("  %s → label=%s, region=%s", path.name, label, default_region_slug)

        return inserted
    finally:
        db.close()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    n = seed_seir_params()
    print(f"[seed_seir_params] inserted={n}")
