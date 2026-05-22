from datetime import datetime
from typing import Any, Optional

from sqlalchemy import DateTime, Integer, JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class ScenarioRun(Base):
    __tablename__ = "scenario_runs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    region_slug: Mapped[str] = mapped_column(String(64), index=True)
    population: Mapped[int] = mapped_column(Integer)
    n_future_days: Mapped[int] = mapped_column(Integer)
    initial_infected: Mapped[int] = mapped_column(Integer)
    status: Mapped[str] = mapped_column(String(32), default="pending")
    started_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    finished_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    result: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
