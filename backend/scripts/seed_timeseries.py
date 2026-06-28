"""Засеять таблицу region_timeseries из CSV-файлов в /data/regions/.

Запуск:
    docker compose exec api python scripts/seed_timeseries.py

Ожидаемая структура каталога:
    /data/regions/Novosibirsk.csv → region_slug='novosibirsk' (840 строк, 22 колонки)
    /data/regions/Omsk.csv        → region_slug='omsk'        (695 строк, 9 колонок)
    /data/regions/Altai.csv       → region_slug='altay'       (688 строк, 10 колонок)

Колонки CSV: 'date' обязательна. Базовые числовые колонки кладутся в свои
поля; всё остальное (n_critical, hospitalised, yandex_index и т.д.) сохраняется
в JSON-поле `extra`.

Идемпотентно: ON CONFLICT (region_slug, date) DO NOTHING.
"""
from __future__ import annotations
import csv
import logging
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from psycopg.types.json import Jsonb

from app.core import db

logger = logging.getLogger(__name__)

# Файл → slug. Расширять по мере появления CSV.
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


def _safe_int(value):
    if value is None or value == "":
        return None
    try:
        return int(float(value))
    except (ValueError, TypeError):
        return None


def _safe_float(value):
    try:
        return float(value)
    except (ValueError, TypeError):
        return value


def parse_csv(path: Path, region_slug: str) -> list[dict]:
    rows = []
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
    """Залить временные ряды из CSV-файлов в region_timeseries."""
    if not data_dir.exists():
        logger.warning("seed_timeseries: каталог %s не найден — пропускаю", data_dir)
        return 0

    total_inserted = 0
    with db.connect() as conn:
        for filename, slug in CSV_TO_SLUG.items():
            path = data_dir / filename
            if not path.exists():
                logger.warning("  %s не найден — пропускаю", path)
                continue

            rows = parse_csv(path, slug)
            if not rows:
                logger.warning("  %s пустой — пропускаю", path)
                continue

            inserted = 0
            for row in rows:
                extra_json = Jsonb(row.get("extra")) if row.get("extra") else None
                result = conn.execute(
                    """
                    INSERT INTO region_timeseries(
                        region_slug, date,
                        new_diagnoses, cum_diagnoses,
                        new_recoveries, cum_recoveries,
                        new_deaths, cum_deaths,
                        new_tests, cum_tests,
                        extra
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (region_slug, date) DO NOTHING
                    """,
                    (
                        row["region_slug"],
                        row["date"],
                        row.get("new_diagnoses"),
                        row.get("cum_diagnoses"),
                        row.get("new_recoveries"),
                        row.get("cum_recoveries"),
                        row.get("new_deaths"),
                        row.get("cum_deaths"),
                        row.get("new_tests"),
                        row.get("cum_tests"),
                        extra_json,
                    ),
                )
                if result.rowcount and result.rowcount > 0:
                    inserted += 1
            conn.commit()
            total_inserted += inserted
            logger.info("  %s → %s: inserted %d / %d", filename, slug, inserted, len(rows))

    return total_inserted


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    n = seed_timeseries()
    print(f"[seed_timeseries] inserted={n}")
