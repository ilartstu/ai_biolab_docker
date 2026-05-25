from typing import Optional

from sqlalchemy import select

from app.models.seir_params import SeirParams
from app.repositories.base import BaseRepository


class SeirParamsRepository(BaseRepository):
    def get_latest_for_region(self, region_slug: str) -> Optional[SeirParams]:
        return self.db.scalars(
            select(SeirParams)
            .where(SeirParams.region_slug == region_slug)
            .order_by(SeirParams.created_at.desc())
        ).first()
