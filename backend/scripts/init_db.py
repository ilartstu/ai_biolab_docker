from __future__ import annotations
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.core.db import init_db

def main() -> None:
    init_db(ROOT / "db" / "schema.sql")
    print("PostgreSQL schema initialized")

if __name__ == "__main__":
    main()
