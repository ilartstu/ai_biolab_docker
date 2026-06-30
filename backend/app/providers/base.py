from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, Callable

ProgressCallback = Callable[[float, str], None]


class DataProvider(ABC):
    @abstractmethod
    def agent_config(self) -> dict[str, Any]: ...

    @abstractmethod
    async def run_agent(
        self,
        payload: dict[str, Any],
        run_id: str,
        progress_callback: ProgressCallback | None = None,
    ) -> dict[str, Any]: ...

    @abstractmethod
    def ml_config(self) -> dict[str, Any]: ...

    @abstractmethod
    async def run_ml_forecast(
        self,
        payload: dict[str, Any],
        run_id: str,
        progress_callback: ProgressCallback | None = None,
    ) -> dict[str, Any]: ...

    @abstractmethod
    def ml_modeling(self, region_id: str, model_id: str, indicator_id: str) -> dict[str, Any]: ...

    @abstractmethod
    def ml_validation(self, region_id: str, model_id: str, indicator_id: str) -> dict[str, Any]: ...

    @abstractmethod
    def ml_run_artifact_path(self, run_id: str, artifact_key: str) -> str: ...

    @abstractmethod
    def mfg_config(self) -> dict[str, Any]: ...

    @abstractmethod
    def mfg_scenario_result(self, region_id: str, period_id: str, strategy_id: str) -> dict[str, Any]: ...

    @abstractmethod
    def mfg_scenario_result_by_id(self, scenario_id: str) -> dict[str, Any]: ...
