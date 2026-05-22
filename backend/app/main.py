from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import init_db
from app.core.logging import setup_logging
from app.routers import health, regions, scenarios, forecasts, outbreaks


@asynccontextmanager
async def lifespan(app: FastAPI):
    setup_logging()
    init_db()
    yield


app = FastAPI(
    title="ai-biolab.ru API",
    description="FastAPI-монолит (Router-Service-Repository). См. ПРИЛОЖЕНИЕ 2 ТЗ.",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(regions.router, prefix="/api/v1")
app.include_router(scenarios.router, prefix="/api/v1")
app.include_router(forecasts.router, prefix="/api/v1")
app.include_router(outbreaks.router, prefix="/api/v1")
