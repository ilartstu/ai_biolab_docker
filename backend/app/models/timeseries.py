from datetime import date as date_t
from typing import Any, Optional

from sqlalchemy import Date, Integer, JSON, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class Timeseries(Base):
    """Дневной временной ряд эпидемиологии по региону.

    Базовые колонки одинаковые для всех регионов; в `extra` сохраняются
    регион-специфичные поля (например, для Новосибирска: hospitalised,
    n_critical, ventilation, 1vac, 2vac, yandex_index, positive_percent и др.).
    """

    __tablename__ = "timeseries"
    __table_args__ = (UniqueConstraint("region_slug", "date", name="uq_timeseries_region_date"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    region_slug: Mapped[str] = mapped_column(String(64), index=True)
    date: Mapped[date_t] = mapped_column(Date, index=True)

    new_diagnoses: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    cum_diagnoses: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    new_recoveries: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    cum_recoveries: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    new_deaths: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    cum_deaths: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    new_tests: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    cum_tests: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)

    extra: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
