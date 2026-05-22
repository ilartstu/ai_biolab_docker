from datetime import date as date_t

from pydantic import BaseModel


class ForecastPoint(BaseModel):
    date: date_t
    value: float
