from datetime import datetime
from typing import Optional

from sqlalchemy.orm import Session

from app.models.scenario_run import ScenarioRun
from app.repositories.scenario_repo import ScenarioRepository
from app.schemas.scenario import ScenarioRunRequest
from app.modeling.seir import run_seir_stub


class ScenarioService:
    def __init__(self, db: Session):
        self.db = db
        self.repo = ScenarioRepository(db)

    def start_run(self, payload: ScenarioRunRequest) -> ScenarioRun:
        run = ScenarioRun(
            region_slug=payload.region_slug,
            population=payload.population,
            n_future_days=payload.n_future_days,
            initial_infected=payload.initial_infected,
            status="pending",
            started_at=datetime.utcnow(),
        )
        run = self.repo.create(run)

        # TODO заменить на BackgroundTasks / Celery когда подключим реальный Covasim
        result = run_seir_stub(payload)

        run.status = "completed"
        run.finished_at = datetime.utcnow()
        run.result = result
        return self.repo.update(run)

    def get_run(self, run_id: int) -> Optional[ScenarioRun]:
        return self.repo.get(run_id)
