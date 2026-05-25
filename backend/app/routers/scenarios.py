from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.scenario import ScenarioRunRequest, ScenarioRunResponse
from app.services.scenario_service import ScenarioService, execute_run_in_background

router = APIRouter(prefix="/scenarios", tags=["scenarios"])


@router.post("/run", response_model=ScenarioRunResponse, status_code=202)
def run_scenario(
    payload: ScenarioRunRequest,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
):
    """Запустить SEIR-сценарий (Covasim) в фоне.

    Возвращает 202 + run_id СРАЗУ. Реальный расчёт занимает десятки секунд —
    после возврата стартует BackgroundTask, который вызывает run_seir().
    Клиент должен опрашивать GET /scenarios/{run_id} до status='completed' или 'failed'.
    """
    service = ScenarioService(db)
    run = service.create_pending_run(payload)
    background_tasks.add_task(execute_run_in_background, run.id)
    return run


@router.get("/{run_id}", response_model=ScenarioRunResponse)
def get_scenario(run_id: int, db: Session = Depends(get_db)):
    run = ScenarioService(db).get_run(run_id)
    if not run:
        raise HTTPException(status_code=404, detail=f"scenario_run {run_id} not found")
    return run
