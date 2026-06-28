from __future__ import annotations
import os
from pathlib import Path
from pydantic import BaseModel

class Settings(BaseModel):
    database_url: str = os.getenv("DATABASE_URL", "postgresql://ai_biolab:ai_biolab@localhost:15432/ai_biolab")
    mock_data_dir: Path = Path(os.getenv("MOCK_DATA_DIR", "mock_data"))
    generated_dir: Path = Path(os.getenv("GENERATED_DIR", "generated"))
    cgan_data_dir: Path = Path(os.getenv("CGAN_DATA_DIR", "/data/cgan"))
    cgan_n_trajectories: int = int(os.getenv("CGAN_N_TRAJECTORIES", "100"))
    mock_sleep_seconds: int = int(os.getenv("MOCK_SLEEP_SECONDS", "3"))
    max_parallel_runs: int = int(os.getenv("MAX_PARALLEL_RUNS", "2"))
    max_queue_size: int = int(os.getenv("MAX_QUEUE_SIZE", "10"))
    secure_cookie: bool = os.getenv("SECURE_COOKIE", "false").lower() == "true"

settings = Settings()
