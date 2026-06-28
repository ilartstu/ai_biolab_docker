from __future__ import annotations
from datetime import date
from typing import Literal
from pydantic import BaseModel, Field

class InterventionIn(BaseModel):
    date: date
    beta_change: float = Field(ge=0.33, le=3)

class AgentSimParams(BaseModel):
    pop_size: int = Field(ge=1_000, le=1_000_000)
    pop_infected: int = Field(ge=10, le=5_000)
    forecast_days: int = Field(default=45, ge=1, le=365)
    beta: float | None = Field(default=0.02, ge=0.001, le=10)

class AgentRunRequest(BaseModel):
    client_request_id: str
    region_id: str
    sim_params: AgentSimParams
    interventions: list[InterventionIn] = Field(default_factory=list)

class MlRunRequest(BaseModel):
    client_request_id: str
    region_id: str
    context_date: date
    model_ids: list[str] = Field(min_length=1, max_length=3)
    indicator_id: str
    mode: Literal["single_model", "compare_models"] = "single_model"
    horizon_days: int = Field(default=5, ge=1, le=5)
    context_days: int = Field(default=14, ge=14, le=14)

class CancelRequest(BaseModel):
    reason: str | None = None
