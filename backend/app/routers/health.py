from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.core.database import get_db

router = APIRouter(tags=["health"])


@router.get("/health")
def health() -> dict:
    return {"status": "ok"}


@router.get("/health/db")
def health_db(db: Session = Depends(get_db)) -> dict:
    result = db.execute(text("SELECT 1")).scalar()
    return {"status": "ok", "db_alive": result == 1}


@router.get("/health/modeling")
def health_modeling() -> dict:
    """Smoke-test для тяжёлых deps из Этапа 2.
    После rebuild api-контейнера проверяет что все либы импортируются."""
    versions: dict = {}
    failures: dict = {}

    libs = ["covasim", "numpy", "pandas", "scipy", "sciris"]
    for lib in libs:
        try:
            mod = __import__(lib)
            versions[lib] = getattr(mod, "__version__", "unknown")
        except Exception as e:
            failures[lib] = f"{type(e).__name__}: {e}"

    return {
        "status": "ok" if not failures else "degraded",
        "versions": versions,
        "failures": failures,
    }
