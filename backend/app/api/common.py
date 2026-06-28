from __future__ import annotations
from fastapi import APIRouter, Request, Response
from app.core.orchestrator import orchestrator

router = APIRouter(prefix="/api", tags=["common"])

@router.get("/health")
async def health():
    return {"status": "ok"}

@router.get("/runs/active")
async def active_runs(request: Request, response: Response):
    return orchestrator.active(request, response)
