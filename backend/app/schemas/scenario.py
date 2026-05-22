from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel, ConfigDict, Field


class ScenarioRunRequest(BaseModel):
    region_slug: str = Field(description="например 'novosibirsk', 'altay', 'omsk'")
    population: int = Field(ge=10_000, le=20_000_000)
    n_future_days: int = Field(ge=1, le=365)
    initial_infected: int = Field(ge=1)


class ScenarioRunResponse(BaseModel):
    id: int
    status: str
    region_slug: str
    population: int
    n_future_days: int
    initial_infected: int
    started_at: datetime
    finished_at: Optional[datetime] = None
    result: Optional[Any] = None

    model_config = ConfigDict(from_attributes=True)
