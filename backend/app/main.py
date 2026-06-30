from __future__ import annotations
import uuid
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.api.agent import router as agent_router
from app.api.common import router as common_router
from app.api.mfg import router as mfg_router
from app.api.ml_forecast import router as ml_router
from app.core.settings import settings

app = FastAPI(
    title="AI Biolab PostgreSQL Orchestration API",
    description="Second-layer server. API works with PostgreSQL.",
    version="0.4.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def request_id_and_anon_session(request: Request, call_next):
    request_id = request.headers.get("X-Request-ID") or str(uuid.uuid4())
    request.state.request_id = request_id
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    if not request.cookies.get("anon_session_id"):
        response.set_cookie(key="anon_session_id", value=str(uuid.uuid4()), httponly=True, samesite="lax", secure=settings.secure_cookie, max_age=7 * 24 * 60 * 60)
    return response

@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": {"code": "INTERNAL_SERVER_ERROR", "message": str(exc), "details": None}, "request_id": getattr(request.state, "request_id", None)},
    )

app.include_router(common_router)
app.include_router(agent_router)
app.include_router(ml_router)
app.include_router(mfg_router)
