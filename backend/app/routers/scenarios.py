from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.scenario import ScenarioRunRequest, ScenarioRunResponse
from app.services.scenario_service import ScenarioService

router = APIRouter(prefix="/scenarios", tags=["scenarios"])


@router.post("/run", response_model=ScenarioRunResponse, status_code=202)
def run_scenario(payload: ScenarioRunRequest, db: Session = Depends(get_db)):
    """Запуск SEIR-сценария (Covasim). Заменяет POST /data из старого Node-бэка.

    На текущем этапе — STUB: пишет запись в БД и возвращает синтетический результат.
    Реальный запуск через `app/modeling/seir.py` после переноса dlya_kati.py.
    """
    return ScenarioService(db).start_run(payload)


@router.get("/{run_id}", response_model=ScenarioRunResponse)
def get_scenario(run_id: int, db: Session = Depends(get_db)):
    run = ScenarioService(db).get_run(run_id)
    if not run:
        raise HTTPException(status_code=404, detail=f"scenario_run {run_id} not found")
    return run
