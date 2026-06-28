from __future__ import annotations
from fastapi import APIRouter, Query
from app.providers.factory import get_provider

router = APIRouter(prefix="/api/models/mfg", tags=["mfg"])
provider = get_provider()

@router.get("/config")
async def config():
    return provider.mfg_config()

@router.get("/scenario-results")
async def scenario_results(region_id: str = Query(...), period_id: str = Query(...), strategy_id: str = Query(...)):
    return provider.mfg_scenario_result(region_id, period_id, strategy_id)

@router.get("/scenarios/{scenario_id}/results")
async def scenario_by_id(scenario_id: str):
    parts = scenario_id.split(":")
    if len(parts) == 3:
        region_id, period_id, strategy_id = parts
        return provider.mfg_scenario_result(region_id, period_id, strategy_id)
    return provider.mfg_scenario_result_by_id(scenario_id)

@router.get("/scenarios/{scenario_id}/table")
async def table(scenario_id: str):
    result = await scenario_by_id(scenario_id)
    return {
        "scenario": result["scenario"],
        "columns": [{"key": key, "label": key} for key in ["date", "S", "E", "I", "R", "H", "C", "D"]],
        "rows": result.get("series", []),
        "pagination": None,
    }
