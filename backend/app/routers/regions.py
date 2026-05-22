from datetime import date
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.timeseries import Timeseries
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


@router.get("/{slug}/timeseries")
def get_region_timeseries(
    slug: str,
    date_from: Optional[date] = Query(None),
    date_to: Optional[date] = Query(None),
    db: Session = Depends(get_db),
):
    """Временной ряд эпидемиологии для региона.

    Заменяет старые `/api/csvCovid/<region>` (77 хардкод-роутов) одним endpoint'ом.
    """
    stmt = select(Timeseries).where(Timeseries.region_slug == slug).order_by(Timeseries.date)
    if date_from:
        stmt = stmt.where(Timeseries.date >= date_from)
    if date_to:
        stmt = stmt.where(Timeseries.date <= date_to)

    rows = db.scalars(stmt).all()
    return {
        "region_slug": slug,
        "count": len(rows),
        "data": [
            {
                "date": r.date.isoformat(),
                "new_diagnoses": r.new_diagnoses,
                "cum_diagnoses": r.cum_diagnoses,
                "new_recoveries": r.new_recoveries,
                "cum_recoveries": r.cum_recoveries,
                "new_deaths": r.new_deaths,
                "cum_deaths": r.cum_deaths,
                "new_tests": r.new_tests,
                "cum_tests": r.cum_tests,
                "extra": r.extra,
            }
            for r in rows
        ],
    }
