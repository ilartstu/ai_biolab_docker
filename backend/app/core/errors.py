from __future__ import annotations
from fastapi import HTTPException

def api_error(status_code: int, code: str, message: str, details=None, headers=None):
    raise HTTPException(
        status_code=status_code,
        detail={"error": {"code": code, "message": message, "details": details}},
        headers=headers,
    )
