from typing import List

from sqlalchemy import select

from app.models.timeseries import Timeseries
from app.repositories.base import BaseRepository


class TimeseriesRepository(BaseRepository):
    def list_by_region(self, region_slug: str) -> List[Timeseries]:
        return list(self.db.scalars(
            select(Timeseries)
            .where(Timeseries.region_slug == region_slug)
            .order_by(Timeseries.date)
        ))
