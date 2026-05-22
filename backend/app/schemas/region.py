from typing import Optional

from pydantic import BaseModel, ConfigDict


class RegionBase(BaseModel):
    slug: str
    name: str
    district: Optional[str] = None
    population: Optional[int] = None


class RegionRead(RegionBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
