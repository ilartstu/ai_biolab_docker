from typing import Optional

from app.models.scenario_run import ScenarioRun
from app.repositories.base import BaseRepository


class ScenarioRepository(BaseRepository):
    def create(self, run: ScenarioRun) -> ScenarioRun:
        self.db.add(run)
        self.db.commit()
        self.db.refresh(run)
        return run

    def update(self, run: ScenarioRun) -> ScenarioRun:
        self.db.commit()
        self.db.refresh(run)
        return run

    def get(self, run_id: int) -> Optional[ScenarioRun]:
        return self.db.get(ScenarioRun, run_id)
