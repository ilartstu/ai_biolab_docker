"""STUB. SEIR / Covasim — будет адаптирован код dlya_kati.py + calibration_total.py.

См. CODE/ORIGINAL/server.app.covid19-modeling-main/dlya_kati.py
"""
from typing import Any

from app.schemas.scenario import ScenarioRunRequest


def run_seir_stub(req: ScenarioRunRequest) -> dict[str, Any]:
    """Заглушка вместо вызова covasim.Sim. Возвращает синтетический временной ряд."""
    return {
        "region_slug": req.region_slug,
        "days": list(range(req.n_future_days)),
        "new_diagnoses": [req.initial_infected + i * 2 for i in range(req.n_future_days)],
        "note": "stub — заменить вызовом covasim.Sim после переноса dlya_kati.py",
    }
