from __future__ import annotations

import asyncio
from copy import deepcopy
from datetime import date, timedelta
from pathlib import Path
from typing import Any

from app.core import db
from app.core.settings import settings
from app.modeling.agent import CovasimAgentRunner, agent_request_hash
from app.modeling.cgan import CGANForecaster
from app.providers.base import DataProvider, ProgressCallback


class PostgresDataProvider(DataProvider):
    def __init__(self) -> None:
        self._cgan_forecaster: CGANForecaster | None = None
        self._agent_runner = CovasimAgentRunner(
            start_day=settings.agent_start_day,
            rand_seed=settings.agent_rand_seed,
            model_version=settings.agent_model_version,
            max_interventions=settings.agent_max_interventions,
        )

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

    def _allowed_agent_regions(self) -> set[str]:
        config = self.agent_config()
        return {
            str(item["id"])
            for item in config.get("regions", {}).get("items", [])
            if item.get("available", True)
        }

    async def run_agent(
        self,
        payload: dict[str, Any],
        run_id: str,
        progress_callback: ProgressCallback | None = None,
    ) -> dict[str, Any]:
        allowed_regions = self._allowed_agent_regions()
        self._agent_runner.validate_payload(payload, allowed_regions)
        canonical_request = self._agent_runner.canonicalize(payload)
        request_hash = agent_request_hash(canonical_request)

        if progress_callback:
            progress_callback(14, "Поиск идентичного расчёта в PostgreSQL.")

        with db.connect() as conn:
            cached = db.get_agent_run_result_by_hash(conn, request_hash)

        if cached:
            result = deepcopy(cached["result_json"])
            result["source_run_id"] = cached["run_id"]
            result["run_id"] = run_id
            result["params"] = deepcopy(payload)
            result["status"] = "completed"
            result["cache_status"] = "hit"
            result["request_hash"] = request_hash
            if progress_callback:
                progress_callback(88, "Найден готовый идентичный расчёт в PostgreSQL.")
            return result

        result = await asyncio.to_thread(
            self._agent_runner.predict,
            payload=payload,
            run_id=run_id,
            allowed_region_ids=allowed_regions,
            progress_callback=progress_callback,
        )
        result["request_hash"] = request_hash

        if progress_callback:
            progress_callback(89, "Сохранение результата Covasim в PostgreSQL.")

        with db.connect() as conn:
            db.upsert_agent_run_result(
                conn,
                run_id=run_id,
                request_hash=request_hash,
                region_id=str(payload["region_id"]),
                request=canonical_request,
                result=result,
                model_version=self._agent_runner.model_version,
                rand_seed=self._agent_runner.rand_seed,
            )
            conn.commit()
        return result

    def ml_config(self) -> dict[str, Any]:
        with db.connect() as conn:
            return db.get_config(conn, "ml_forecast")

    async def run_ml_forecast(
        self,
        payload: dict[str, Any],
        run_id: str,
        progress_callback: ProgressCallback | None = None,
    ) -> dict[str, Any]:
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
                models.append(
                    {
                        "model_id": "cgan",
                        "model_name": "CGAN",
                        "forecast": cgan_result["forecast"],
                        "diagnostics": cgan_result.get("diagnostics", {}),
                    }
                )
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
            models.append(
                {
                    "model_id": model_id,
                    "model_name": model_id.upper(),
                    "forecast": forecast,
                }
            )

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
            "comparison": {
                "type": "mean_lines",
                "model_ids": payload["model_ids"],
                "indicator_id": payload["indicator_id"],
            },
            "chart": {
                "default_type": "line_with_interval",
                "context_days": context_days,
                "horizon_days": payload.get("horizon_days", 5),
            },
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
        data["params"] = {
            "region_id": region_id,
            "model_id": model_id,
            "indicator_id": indicator_id,
        }
        if model_id != "seir_hcd":
            data["model_parameters"] = []
            data["reproduction_index"] = []
        return data

    def ml_validation(self, region_id: str, model_id: str, indicator_id: str) -> dict[str, Any]:
        with db.connect() as conn:
            data = db.get_ml_precomputed(conn, "validation", region_id, model_id, indicator_id)
        data["params"] = {
            "region_id": region_id,
            "model_id": model_id,
            "indicator_id": indicator_id,
        }
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
