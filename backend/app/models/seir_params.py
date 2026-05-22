from datetime import datetime
from typing import Any

from sqlalchemy import DateTime, Integer, JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class SeirParams(Base):
    """Сохранённые параметры SEIR-калибровки.

    Из старого репо: params_08_04_2022.json — массив объектов с base-параметрами
    (beta, pop_infected, symp_test) и последовательностью beta_change_N / beta_day_N.
    """

    __tablename__ = "seir_params"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    region_slug: Mapped[str] = mapped_column(String(64), index=True)
    label: Mapped[str] = mapped_column(String(64))
    params: Mapped[Any] = mapped_column(JSON)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
