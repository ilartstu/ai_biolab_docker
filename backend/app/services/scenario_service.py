import logging
from datetime import datetime
from typing import Optional

from sqlalchemy.orm import Session

from app.core.database import SessionLocal
from app.modeling.seir import run_seir
from app.models.scenario_run import ScenarioRun
from app.repositories.region_repo import RegionRepository
from app.repositories.scenario_repo import ScenarioRepository
from app.repositories.seir_params_repo import SeirParamsRepository
from app.repositories.timeseries_repo import TimeseriesRepository
from app.schemas.scenario import ScenarioRunRequest

logger = logging.getLogger(__name__)


class ScenarioService:
    def __init__(self, db: Session):
        self.db = db
        self.scenario_repo = ScenarioRepository(db)
        self.region_repo = RegionRepository(db)
        self.timeseries_repo = TimeseriesRepository(db)
        self.seir_params_repo = SeirParamsRepository(db)

    def create_pending_run(self, payload: ScenarioRunRequest) -> ScenarioRun:
        """Записать запрос в БД со статусом pending. Фактический расчёт — отдельно."""
        run = ScenarioRun(
            region_slug=payload.region_slug,
            population=payload.population,
            n_future_days=payload.n_future_days,
            initial_infected=payload.initial_infected,
            status="pending",
            started_at=datetime.utcnow(),
        )
        return self.scenario_repo.create(run)

    def get_run(self, run_id: int) -> Optional[ScenarioRun]:
        return self.scenario_repo.get(run_id)

    def execute_run(self, run_id: int) -> None:
        """Загрузить данные из БД, запустить Covasim, обновить запись.

        Вызывается через BackgroundTasks — не должна бросать наверх.
        """
        run = self.scenario_repo.get(run_id)
        if not run:
            logger.error("execute_run: run %d not found", run_id)
            return

        run.status = "running"
        self.scenario_repo.update(run)

        try:
            region = self.region_repo.get_by_slug(run.region_slug)
            if not region:
                raise ValueError(f"region '{run.region_slug}' не найден в БД")

            ts_rows = self.timeseries_repo.list_by_region(run.region_slug)
            if not ts_rows:
                raise ValueError(
                    f"нет временного ряда для региона '{run.region_slug}' (засей через make seed)"
                )

            params_row = self.seir_params_repo.get_latest_for_region(run.region_slug)
            if not params_row:
                raise ValueError(
                    f"нет калибровочных SEIR-параметров для '{run.region_slug}'. "
                    f"Пока есть только для 'novosibirsk' (из params_08_04_2022.json)"
                )

            ts_dicts = [
                {
                    "date": r.date,
                    "new_diagnoses": r.new_diagnoses,
                    "cum_diagnoses": r.cum_diagnoses,
                    "new_recoveries": r.new_recoveries,
                    "cum_recoveries": r.cum_recoveries,
                    "new_deaths": r.new_deaths,
                    "cum_deaths": r.cum_deaths,
                    "new_tests": r.new_tests,
                    "cum_tests": r.cum_tests,
                }
                for r in ts_rows
            ]

            logger.info(
                "execute_run #%d: запуск SEIR для %s (pop=%d, n_future=%d, %d точек ряда)",
                run_id, run.region_slug, run.population, run.n_future_days, len(ts_dicts),
            )

            result = run_seir(
                region_slug=run.region_slug,
                location=region.name,
                population=run.population,
                n_future_days=run.n_future_days,
                initial_infected=run.initial_infected,
                timeseries_rows=ts_dicts,
                seir_params=params_row.params,
            )

            run.status = "completed"
            run.result = result
            logger.info("execute_run #%d: completed", run_id)

        except Exception as e:
            logger.exception("execute_run #%d: failed", run_id)
            run.status = "failed"
            run.result = {"error": str(e), "type": type(e).__name__}

        finally:
            run.finished_at = datetime.utcnow()
            self.scenario_repo.update(run)


def execute_run_in_background(run_id: int) -> None:
    """Вспомогательный wrapper для FastAPI BackgroundTasks.

    BackgroundTasks выполняется ПОСЛЕ возврата ответа клиенту, в том же процессе.
    Сессия БД из http-запроса уже закрыта, поэтому открываем свежую.
    """
    db = SessionLocal()
    try:
        ScenarioService(db).execute_run(run_id)
    finally:
        db.close()
