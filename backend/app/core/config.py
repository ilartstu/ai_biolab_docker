from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+psycopg://ai_biolab:changeme@db:5432/ai_biolab"
    API_DEBUG: bool = False
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost"]

    model_config = SettingsConfigDict(env_file=".env", extra="ignore", case_sensitive=True)


settings = Settings()
