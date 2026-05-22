"""Засеять таблицу timeseries из CSV-файлов в /data/regions/.

Запуск: docker compose exec api python -m app.scripts.seed_timeseries

Ожидаемая структура каталога:
    /data/regions/Novosibirsk.csv → region_slug='novosibirsk'
    /data/regions/Omsk.csv        → region_slug='omsk'
    /data/regions/Altai.csv       → region_slug='altay'

Колонки CSV: 'date' обязательна. Известные числовые колонки кладутся в
свои поля; остальные сохраняются в JSON-поле `extra`.
"""
import csv
import logging
from datetime import datetime
from pathlib import Path

from sqlalchemy.dialects.postgresql import insert as pg_insert

from app.core.database import SessionLocal, init_db
from app.models.timeseries import Timeseries

logger = logging.getLogger(__name__)

# Файл → slug. Можно расширять по мере появления CSV.
CSV_TO_SLUG = {
    "Novosibirsk.csv": "novosibirsk",
    "Omsk.csv": "omsk",
    "Altai.csv": "altay",
}

KNOWN_INT_COLS = {
    "new_diagnoses",
    "cum_diagnoses",
    "new_recoveries",
    "cum_recoveries",
    "new_deaths",
    "cum_deaths",
    "new_tests",
    "cum_tests",
}


def _safe_int(value: str | None):
    if value is None or value == "":
        return None
    try:
        return int(float(value))
    except (ValueError, TypeError):
        return None


def _safe_float(value: str | None):
    try:
        return float(value)
    except (ValueError, TypeError):
        return value


def parse_csv(path: Path, region_slug: str) -> list[dict]:
    rows: list[dict] = []
    with path.open(encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for raw in reader:
            date_str = (raw.get("date") or "").strip()
            if not date_str:
                continue
            try:
                date_val = datetime.strptime(date_str, "%Y-%m-%d").date()
            except ValueError:
                continue

            row: dict = {"region_slug": region_slug, "date": date_val}
            extra: dict = {}

            for key, val in raw.items():
                if key == "date" or key is None:
                    continue
                val_stripped = (val or "").strip()
                if not val_stripped:
                    continue
                if key in KNOWN_INT_COLS:
                    row[key] = _safe_int(val_stripped)
                else:
                    extra[key] = _safe_float(val_stripped)

            if extra:
                row["extra"] = extra
            rows.append(row)
    return rows


def seed_timeseries(data_dir: Path = Path("/data/regions")) -> int:
    init_db()
    if not data_dir.exists():
        logger.warning("seed_timeseries: каталог %s не найден — пропускаю", data_dir)
        return 0

    db = SessionLocal()
    total_inserted = 0
    try:
        for filename, slug in CSV_TO_SLUG.items():
            path = data_dir / filename
            if not path.exists():
                logger.warning("  %s не найден — пропускаю", path)
                continue

            rows = parse_csv(path, slug)
            if not rows:
                logger.warning("  %s пустой — пропускаю", path)
                continue

            stmt = (
                pg_insert(Timeseries)
                .values(rows)
                .on_conflict_do_nothing(constraint="uq_timeseries_region_date")
            )
            result = db.execute(stmt)
            db.commit()
            inserted = result.rowcount or 0
            total_inserted += inserted
            logger.info("  %s → %s: добавлено %d из %d", filename, slug, inserted, len(rows))

        return total_inserted
    finally:
        db.close()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    n = seed_timeseries()
    print(f"[seed_timeseries] inserted={n}")
