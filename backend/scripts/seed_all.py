"""Запустить все наши seed-скрипты в правильном порядке.

Запуск:
    docker compose exec api python scripts/seed_all.py
    (либо автоматически через db-init контейнер при docker compose up)

Идемпотентно: все сидеры используют ON CONFLICT DO NOTHING.
Безопасно запускать многократно — старые данные не дублируются.
"""
from __future__ import annotations
import logging
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.seed_regions import seed_regions
from scripts.seed_seir_params import seed_seir_params
from scripts.seed_timeseries import seed_timeseries

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("seed_all")


def main() -> None:
    log.info("─── seed_regions ───")
    n_regions = seed_regions()
    log.info("─── seed_timeseries ───")
    n_ts = seed_timeseries()
    log.info("─── seed_seir_params ───")
    n_params = seed_seir_params()

    print()
    print("Reference data seeded:")
    print(f"  regions      : {n_regions} new rows inserted")
    print(f"  timeseries   : {n_ts} new rows inserted")
    print(f"  seir_params  : {n_params} new rows inserted")


if __name__ == "__main__":
    main()
