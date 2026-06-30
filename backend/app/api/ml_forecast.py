from __future__ import annotations

from pathlib import Path

from fastapi import APIRouter, Header, Query, Request, Response
from fastapi.responses import FileResponse, JSONResponse

from app.core.errors import api_error
from app.core.orchestrator import jsonable, orchestrator
from app.core.schemas import CancelRequest, MlRunRequest
from app.providers.factory import get_provider

router = APIRouter(prefix="/api/models/ml-forecast", tags=["ml-forecast"])
provider = get_provider()


@router.get("/config")
async def config():
    return provider.ml_config()


@router.post("/runs")
async def create_run(
    payload: MlRunRequest,
    request: Request,
    response: Response,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
):
    data, status = await orchestrator.create_run(
        section="ml_forecast",
        payload=payload.model_dump(mode="json"),
        request=request,
        response=response,
        idempotency_key=idempotency_key,
        worker_func=provider.run_ml_forecast,
    )
    return JSONResponse(status_code=status, content=jsonable(data))


@router.get("/runs/{run_id}/status")
async def status(run_id: str, request: Request):
    return orchestrator.status(run_id, request)


@router.get("/runs/{run_id}/results")
async def results(run_id: str, request: Request):
    return orchestrator.result(run_id, request)


@router.post("/runs/{run_id}/cancel")
async def cancel(run_id: str, payload: CancelRequest | None = None):
    return orchestrator.cancel(run_id, payload.reason if payload else None)


@router.get("/modeling")
async def modeling(
    region_id: str = Query(...),
    model_id: str = Query(...),
    indicator_id: str = Query(...),
):
    return provider.ml_modeling(region_id, model_id, indicator_id)


@router.get("/validation")
async def validation(
    region_id: str = Query(...),
    model_id: str = Query(...),
    indicator_id: str = Query(...),
):
    return provider.ml_validation(region_id, model_id, indicator_id)


@router.get("/runs/{run_id}/table")
async def table(run_id: str, request: Request):
    result = orchestrator.result(run_id, request)
    rows = []
    for model in result.get("models", []):
        for item in model.get("forecast", []):
            rows.append(
                {
                    "model_id": model["model_id"],
                    "model_name": model["model_name"],
                    **item,
                }
            )
    return {
        "run_id": run_id,
        "columns": [
            {"key": key, "label": key}
            for key in [
                "model_name",
                "date",
                "horizon",
                "mean",
                "low_3sigma",
                "high_3sigma",
            ]
        ],
        "rows": rows,
        "pagination": None,
    }


@router.get("/runs/{run_id}/artifacts/{artifact_key}")
async def artifact(run_id: str, artifact_key: str):
    if artifact_key != "forecast_csv":
        api_error(404, "ARTIFACT_NOT_FOUND", "Артефакт не найден.")
    try:
        path = provider.ml_run_artifact_path(run_id, artifact_key)
    except (KeyError, FileNotFoundError):
        api_error(404, "ARTIFACT_NOT_FOUND", "Артефакт не найден.")
    file_path = Path(path)
    return FileResponse(
        path=file_path,
        media_type="text/csv; charset=utf-8",
        filename=file_path.name,
    )
