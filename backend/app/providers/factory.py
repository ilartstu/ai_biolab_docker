from __future__ import annotations
from functools import lru_cache
from app.providers.base import DataProvider
from app.providers.postgres_provider import PostgresDataProvider

@lru_cache
def get_provider() -> DataProvider:
    return PostgresDataProvider()
