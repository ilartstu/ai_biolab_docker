"""Запустить все сидеры в правильном порядке.

Запуск: docker compose exec api python -m app.scripts.seed_all
        (или make seed)
"""
import logging

from app.scripts.seed_regions import seed_regions
from app.scripts.seed_seir_params import seed_seir_params
from app.scripts.seed_timeseries import seed_timeseries

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("seed_all")

if __name__ == "__main__":
    log.info("─── seed_regions ───")
    n_regions = seed_regions()
    log.info("─── seed_timeseries ───")
    n_ts = seed_timeseries()
    log.info("─── seed_seir_params ───")
    n_params = seed_seir_params()

    print()
    print(f"  regions      : {n_regions} inserted")
    print(f"  timeseries   : {n_ts} inserted")
    print(f"  seir_params  : {n_params} inserted")
