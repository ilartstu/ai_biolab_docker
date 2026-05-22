from typing import List, Optional

from sqlalchemy.orm import Session

from app.models.region import Region
from app.repositories.region_repo import RegionRepository


class RegionService:
    def __init__(self, db: Session):
        self.repo = RegionRepository(db)

    def list_all(self) -> List[Region]:
        return self.repo.list_all()

    def get_by_slug(self, slug: str) -> Optional[Region]:
        return self.repo.get_by_slug(slug)
