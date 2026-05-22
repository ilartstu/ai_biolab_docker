from typing import List, Optional

from sqlalchemy import select

from app.models.region import Region
from app.repositories.base import BaseRepository


class RegionRepository(BaseRepository):
    def list_all(self) -> List[Region]:
        return list(self.db.scalars(select(Region).order_by(Region.name)))

    def get_by_slug(self, slug: str) -> Optional[Region]:
        return self.db.scalars(select(Region).where(Region.slug == slug)).first()

    def create(self, region: Region) -> Region:
        self.db.add(region)
        self.db.commit()
        self.db.refresh(region)
        return region
