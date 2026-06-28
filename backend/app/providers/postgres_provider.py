from __future__ import annotations
import asyncio
from copy import deepcopy
from datetime import date, timedelta
from typing import Any
from app.core import db
from app.core.settings import settings
from app.providers.base import DataProvider

class PostgresDataProvider(DataProvider):
    def agent_config(self) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_config(conn, "agent")

    async def run_agent(self, payload: dict[str, Any], run_id: str) -> dict[str, Any]:
        await asyncio.sleep(settings.mock_sleep_seconds)
        with db.connect() as conn:
            raw = db.get_mock_result(conn, "agent_result")
        result = deepcopy(raw)
        result["run_id"] = run_id
        result["status"] = "completed"
        result["params"] = payload
        requested_days = int(payload.get("sim_params", {}).get("forecast_days", len(result.get("series", [])) - 1))
        result["series"] = result.get("series", [])[: requested_days + 1]
        result["interventions"] = [
            {"date": item["date"], "beta_change": item["beta_change"], "label": f"Интервенция {idx + 1}"}
            for idx, item in enumerate(payload.get("interventions", []))
        ]
        if result["series"]:
            last = result["series"][-1]
            result["summary"] = {
                "final_cum_infections": last.get("cum_infections"),
                "final_cum_critical": last.get("cum_critical"),
                "final_cum_recoveries": last.get("cum_recoveries"),
                "final_cum_deaths": last.get("cum_deaths"),
            }
        return result

    def ml_config(self) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_config(conn, "ml_forecast")

    async def run_ml_forecast(self, payload: dict[str, Any], run_id: str) -> dict[str, Any]:
        await asyncio.sleep(settings.mock_sleep_seconds)
        context_date = date.fromisoformat(payload["context_date"])
        context_days = int(payload.get("context_days", 14))
        history = []
        for i in range(context_days, 0, -1):
            day = context_date - timedelta(days=i - 1)
            history.append({"date": day.isoformat(), "value": 400 + i * 7})
        models = []
        with db.connect() as conn:
            for model_id in payload["model_ids"]:
                model_file = db.get_ml_model_result(conn, model_id)
                forecast = []
                for row in model_file["forecast"]:
                    item = deepcopy(row)
                    offset = int(item.pop("date_offset", item.get("horizon", 1)))
                    item["date"] = (context_date + timedelta(days=offset)).isoformat()
                    forecast.append(item)
                models.append({"model_id": model_id, "model_name": model_id.upper(), "forecast": forecast})
        return {
            "run_id": run_id,
            "status": "completed",
            "params": payload,
            "history": history,
            "models": models,
            "comparison": {"type": "mean_lines", "model_ids": payload["model_ids"], "indicator_id": payload["indicator_id"]},
            "chart": {"default_type": "line_with_interval", "context_days": context_days, "horizon_days": payload.get("horizon_days", 5)},
        }

    def ml_modeling(self, region_id: str, model_id: str, indicator_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            data = db.get_ml_precomputed(conn, "modeling", region_id, model_id, indicator_id)
        data["params"] = {"region_id": region_id, "model_id": model_id, "indicator_id": indicator_id}
        if model_id != "seir_hcd":
            data["model_parameters"] = []
            data["reproduction_index"] = []
        return data

    def ml_validation(self, region_id: str, model_id: str, indicator_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            data = db.get_ml_precomputed(conn, "validation", region_id, model_id, indicator_id)
        data["params"] = {"region_id": region_id, "model_id": model_id, "indicator_id": indicator_id}
        if model_id != "seir_hcd":
            data["model_parameters_forecast"] = []
        return data

    def mfg_config(self) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_config(conn, "mfg")

    def mfg_scenario_result(self, region_id: str, period_id: str, strategy_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_mfg_scenario(conn, region_id, period_id, strategy_id)

    def mfg_scenario_result_by_id(self, scenario_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_mfg_scenario_by_id(conn, scenario_id)
