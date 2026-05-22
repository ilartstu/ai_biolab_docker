from fastapi import APIRouter

router = APIRouter(prefix="/forecasts", tags=["forecasts"])


@router.get("")
def list_forecasts() -> dict:
    """STUB. SARIMAX-прогнозы (см. ORIGINAL/server.app.covid19-modeling-main/SARIMAX.py).

    Заменит /api/forecasts*, /api/res_valid, /api/res_train из старого Node-бэка.
    """
    return {"forecasts": [], "note": "stub — будет реализовано после переноса SARIMAX.py"}
