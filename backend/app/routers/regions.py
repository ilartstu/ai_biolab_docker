from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.region import RegionRead
from app.services.region_service import RegionService

router = APIRouter(prefix="/regions", tags=["regions"])


@router.get("", response_model=List[RegionRead])
def list_regions(db: Session = Depends(get_db)):
    """Список регионов РФ. Заменит хардкод из new-covid-main/src/Covid.js."""
    return RegionService(db).list_all()


@router.get("/{slug}", response_model=RegionRead)
def get_region(slug: str, db: Session = Depends(get_db)):
    region = RegionService(db).get_by_slug(slug)
    if not region:
        raise HTTPException(status_code=404, detail=f"region '{slug}' not found")
    return region
