from __future__ import annotations

import hashlib
import json
import math
from copy import deepcopy
from dataclasses import dataclass
from datetime import date, timedelta
from typing import Any, Callable

ProgressCallback = Callable[[float, str], None]

AGENT_METRICS = (
    "cum_infections",
    "cum_critical",
    "cum_recoveries",
    "cum_deaths",
    "new_infections",
    "new_critical",
    "new_recoveries",
    "new_deaths",
)


class AgentInputError(ValueError):
    """Invalid model input that should be reported to the caller."""


def _normalized_number(value: Any) -> int | float | None:
    if value is None:
        return None
    number = float(value)
    if not math.isfinite(number):
        raise AgentInputError("Числовые параметры должны быть конечными.")
    if number.is_integer():
        return int(number)
    return number


def canonical_agent_request(
    payload: dict[str, Any],
    *,
    start_day: str,
    rand_seed: int,
    model_version: str,
) -> dict[str, Any]:
    """Return the stable calculation identity used for exact PostgreSQL caching.

    client_request_id is intentionally excluded: it identifies an HTTP request,
    not a scientific calculation. Interventions are sorted so that the same set
    in a different UI order maps to the same calculation.
    """
    sim_params = payload.get("sim_params") or {}
    interventions = sorted(
        (
            {
                "date": str(item["date"]),
                "beta_change": _normalized_number(item["beta_change"]),
            }
            for item in payload.get("interventions", [])
        ),
        key=lambda item: (item["date"], item["beta_change"]),
    )
    return {
        "region_id": str(payload["region_id"]),
        "sim_params": {
            "pop_size": int(sim_params["pop_size"]),
            "pop_infected": int(sim_params["pop_infected"]),
            "forecast_days": int(sim_params.get("forecast_days", 45)),
            "beta": _normalized_number(sim_params.get("beta", 0.02)),
        },
        "interventions": interventions,
        "runtime": {
            "start_day": start_day,
            "rand_seed": int(rand_seed),
            "model_version": model_version,
        },
    }


def agent_request_hash(canonical_request: dict[str, Any]) -> str:
    raw = json.dumps(
        canonical_request,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    )
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()


@dataclass(slots=True)
class CovasimAgentRunner:
    start_day: str = "2020-03-12"
    rand_seed: int = 1
    model_version: str = "covasim-3.1.8-adapter-1"
    max_interventions: int = 50

    def validate_payload(self, payload: dict[str, Any], allowed_region_ids: set[str]) -> None:
        region_id = str(payload.get("region_id", ""))
        if region_id not in allowed_region_ids:
            raise AgentInputError(f"Неизвестный region_id: {region_id}")

        sim_params = payload.get("sim_params") or {}
        pop_size = int(sim_params["pop_size"])
        pop_infected = int(sim_params["pop_infected"])
        forecast_days = int(sim_params.get("forecast_days", 45))
        if pop_infected > pop_size:
            raise AgentInputError("pop_infected не может быть больше pop_size.")

        interventions = payload.get("interventions", [])
        if len(interventions) > self.max_interventions:
            raise AgentInputError(
                f"Допускается не более {self.max_interventions} интервенций."
            )

        start = date.fromisoformat(self.start_day)
        end = start + timedelta(days=forecast_days)
        seen_dates: set[date] = set()
        for item in interventions:
            intervention_date = date.fromisoformat(str(item["date"]))
            if intervention_date in seen_dates:
                raise AgentInputError("Даты интервенций не должны повторяться.")
            seen_dates.add(intervention_date)
            if intervention_date < start or intervention_date > end:
                raise AgentInputError(
                    "Дата интервенции должна попадать в период моделирования "
                    f"{start.isoformat()}–{end.isoformat()}."
                )

    def canonicalize(self, payload: dict[str, Any]) -> dict[str, Any]:
        return canonical_agent_request(
            payload,
            start_day=self.start_day,
            rand_seed=self.rand_seed,
            model_version=self.model_version,
        )

    def predict(
        self,
        *,
        payload: dict[str, Any],
        run_id: str,
        allowed_region_ids: set[str],
        progress_callback: ProgressCallback | None = None,
    ) -> dict[str, Any]:
        self.validate_payload(payload, allowed_region_ids)
        canonical_request = self.canonicalize(payload)
        sim_params = canonical_request["sim_params"]

        if progress_callback:
            progress_callback(18, "Covasim: подготовка параметров модели.")

        import covasim as cv

        start = date.fromisoformat(self.start_day)
        intervention_rows = canonical_request["interventions"]
        interventions = []
        if intervention_rows:
            days = [
                (date.fromisoformat(item["date"]) - start).days
                for item in intervention_rows
            ]
            changes = [float(item["beta_change"]) for item in intervention_rows]
            interventions.append(cv.change_beta(days=days, changes=changes))

        pars: dict[str, Any] = {
            "pop_size": int(sim_params["pop_size"]),
            "pop_infected": int(sim_params["pop_infected"]),
            "n_days": int(sim_params["forecast_days"]),
            "start_day": self.start_day,
            "rand_seed": int(self.rand_seed),
            "verbose": 0,
        }
        if sim_params.get("beta") is not None:
            pars["beta"] = float(sim_params["beta"])
        if interventions:
            pars["interventions"] = interventions

        if progress_callback:
            progress_callback(32, "Covasim: создание популяции.")

        sim = cv.Sim(pars=pars)

        if progress_callback:
            progress_callback(45, "Covasim: выполнение агентной симуляции.")

        sim.run()

        if progress_callback:
            progress_callback(82, "Covasim: подготовка временных рядов.")

        missing = [key for key in AGENT_METRICS if key not in sim.results]
        if missing:
            raise RuntimeError(
                "Covasim не вернул обязательные показатели: " + ", ".join(missing)
            )

        metric_values: dict[str, list[float]] = {}
        for key in AGENT_METRICS:
            values = getattr(sim.results[key], "values", sim.results[key])
            metric_values[key] = [float(value) for value in values]

        series_length = min(len(values) for values in metric_values.values())
        rows: list[dict[str, Any]] = []
        for index in range(series_length):
            row: dict[str, Any] = {
                "date": (start + timedelta(days=index)).isoformat(),
                "t": index,
            }
            for key in AGENT_METRICS:
                value = metric_values[key][index]
                row[key] = value if math.isfinite(value) else None
            rows.append(row)

        last = rows[-1] if rows else {}
        result = {
            "run_id": run_id,
            "status": "completed",
            "cache_status": "miss",
            "params": deepcopy(payload),
            "canonical_request": canonical_request,
            "model": {
                "engine": "covasim",
                "version": self.model_version,
                "covasim_version": getattr(cv, "__version__", None),
                "rand_seed": self.rand_seed,
                "start_day": self.start_day,
            },
            "interventions": [
                {
                    **item,
                    "day": (date.fromisoformat(item["date"]) - start).days,
                    "label": f"Интервенция {index + 1}",
                }
                for index, item in enumerate(intervention_rows)
            ],
            "series": rows,
            "summary": {
                "final_cum_infections": last.get("cum_infections"),
                "final_cum_critical": last.get("cum_critical"),
                "final_cum_recoveries": last.get("cum_recoveries"),
                "final_cum_deaths": last.get("cum_deaths"),
            },
        }

        if progress_callback:
            progress_callback(88, "Covasim: результат готов к сохранению.")
        return result
