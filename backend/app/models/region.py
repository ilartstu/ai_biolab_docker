from typing import Optional

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class Region(Base):
    __tablename__ = "regions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    slug: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    district: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    center: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    population: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    area: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    density: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
