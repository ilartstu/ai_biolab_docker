from __future__ import annotations
import asyncio
from copy import deepcopy
from datetime import date, timedelta
from pathlib import Path
from typing import Any
from app.core import db
from app.core.settings import settings
from app.modeling.cgan import CGANForecaster
from app.providers.base import DataProvider, ProgressCallback

class PostgresDataProvider(DataProvider):
    def __init__(self) -> None:
        self._cgan_forecaster: CGANForecaster | None = None

    def _get_cgan_forecaster(self) -> CGANForecaster:
        if self._cgan_forecaster is None:
            self._cgan_forecaster = CGANForecaster(
                data_dir=settings.cgan_data_dir,
                output_dir=settings.generated_dir / "cgan",
                n_trajectories=settings.cgan_n_trajectories,
            )
        return self._cgan_forecaster

    def agent_config(self) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_config(conn, "agent")

    async def run_agent(self, payload: dict[str, Any], run_id: str, progress_callback: ProgressCallback | None = None) -> dict[str, Any]:
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

    async def run_ml_forecast(self, payload: dict[str, Any], run_id: str, progress_callback: ProgressCallback | None = None) -> dict[str, Any]:
        if progress_callback:
            progress_callback(12, "Подготовка ML-прогноза.")

        context_date = date.fromisoformat(payload["context_date"])
        context_days = int(payload.get("context_days", 14))
        history: list[dict[str, Any]] | None = None
        models = []
        artifacts: dict[str, Any] = {}
        diagnostics: dict[str, Any] = {}

        with db.connect() as conn:
            mock_model_files = {
                model_id: db.get_ml_model_result(conn, model_id)
                for model_id in payload["model_ids"]
                if model_id != "cgan"
            }

        for model_id in payload["model_ids"]:
            if model_id == "cgan":
                if progress_callback:
                    progress_callback(15, "Запуск реальной CGAN-модели.")
                cgan_result = await asyncio.to_thread(
                    self._get_cgan_forecaster().predict,
                    context_date=payload["context_date"],
                    region_id=payload["region_id"],
                    indicator_id=payload["indicator_id"],
                    horizon_days=int(payload.get("horizon_days", 5)),
                    context_days=context_days,
                    run_id=run_id,
                    progress_callback=progress_callback,
                )
                history = cgan_result["history"]
                cgan_artifact = cgan_result.get("artifact")
                if cgan_artifact:
                    cgan_artifact = {
                        **cgan_artifact,
                        "url": f"/api/models/ml-forecast/runs/{run_id}/artifacts/forecast_csv",
                    }
                    artifacts["forecast_csv"] = cgan_artifact
                diagnostics["cgan"] = cgan_result.get("diagnostics", {})
                models.append({
                    "model_id": "cgan",
                    "model_name": "CGAN",
                    "forecast": cgan_result["forecast"],
                    "diagnostics": cgan_result.get("diagnostics", {}),
                })
                continue

            if progress_callback:
                progress_callback(82, f"Подготовка mock-результата {model_id.upper()}.")
            model_file = mock_model_files[model_id]
            forecast = []
            for row in model_file["forecast"]:
                item = deepcopy(row)
                offset = int(item.pop("date_offset", item.get("horizon", 1)))
                item["date"] = (context_date + timedelta(days=offset)).isoformat()
                forecast.append(item)
            models.append({"model_id": model_id, "model_name": model_id.upper(), "forecast": forecast})

        if history is None:
            await asyncio.sleep(settings.mock_sleep_seconds)
            history = []
            for i in range(context_days, 0, -1):
                day = context_date - timedelta(days=i - 1)
                history.append({"date": day.isoformat(), "value": 400 + i * 7})

        result = {
            "run_id": run_id,
            "status": "completed",
            "params": payload,
            "history": history,
            "models": models,
            "comparison": {"type": "mean_lines", "model_ids": payload["model_ids"], "indicator_id": payload["indicator_id"]},
            "chart": {"default_type": "line_with_interval", "context_days": context_days, "horizon_days": payload.get("horizon_days", 5)},
            "artifacts": artifacts,
            "diagnostics": diagnostics,
        }

        with db.connect() as conn:
            db.upsert_ml_forecast_run_result(
                conn,
                run_id=run_id,
                model_ids=payload["model_ids"],
                region_id=payload["region_id"],
                indicator_id=payload["indicator_id"],
                context_date=payload["context_date"],
                request=payload,
                result=result,
                artifacts=artifacts,
            )
            conn.commit()

        return result

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

    def ml_run_artifact_path(self, run_id: str, artifact_key: str) -> str:
        with db.connect() as conn:
            row = db.get_ml_forecast_run_result(conn, run_id)
        artifacts = row.get("artifacts_json") or {}
        artifact = artifacts.get(artifact_key)
        if not artifact or not artifact.get("path"):
            raise KeyError(f"Artifact not found: {run_id}/{artifact_key}")
        path = Path(artifact["path"])
        if not path.exists():
            raise FileNotFoundError(f"Artifact file not found: {path}")
        return str(path)

    def mfg_config(self) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_config(conn, "mfg")

    def mfg_scenario_result(self, region_id: str, period_id: str, strategy_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_mfg_scenario(conn, region_id, period_id, strategy_id)

    def mfg_scenario_result_by_id(self, scenario_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_mfg_scenario_by_id(conn, scenario_id)
