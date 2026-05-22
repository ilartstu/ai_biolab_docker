from fastapi import APIRouter

router = APIRouter(prefix="/outbreaks", tags=["outbreaks"])


@router.get("")
def list_outbreaks() -> dict:
    """STUB. Детекция вспышек по регионам РФ — новый раздел по ТЗ (ПРИЛОЖЕНИЕ 1, п.2).

    Будет отдавать данные для карты/выпадашки с цветовым градиентом Rt и числа инфицированных.
    """
    return {"outbreaks": [], "note": "stub — новый функционал, в старом фронте отсутствует"}
