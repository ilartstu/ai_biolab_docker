from __future__ import annotations
from pathlib import Path
from typing import Any
import psycopg
from psycopg.rows import dict_row
from psycopg.types.json import Jsonb
from app.core.settings import settings

def connect():
    return psycopg.connect(settings.database_url, row_factory=dict_row)

def init_db(schema_path: str | Path = "db/schema.sql") -> None:
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute(Path(schema_path).read_text(encoding="utf-8"))
        conn.commit()

def upsert_config(conn, section: str, data: dict[str, Any]) -> None:
    conn.execute(
        '''
        INSERT INTO app_config(section, data_json, updated_at)
        VALUES (%s, %s, NOW())
        ON CONFLICT(section) DO UPDATE SET data_json = EXCLUDED.data_json, updated_at = NOW()
        ''',
        (section, Jsonb(data)),
    )

def get_config(conn, section: str) -> dict[str, Any]:
    row = conn.execute("SELECT data_json FROM app_config WHERE section = %s", (section,)).fetchone()
    if not row:
        raise KeyError(f"Config not found: {section}")
    return row["data_json"]

def upsert_mock_result(conn, key: str, data: dict[str, Any]) -> None:
    conn.execute(
        '''
        INSERT INTO mock_results(key, data_json, updated_at)
        VALUES (%s, %s, NOW())
        ON CONFLICT(key) DO UPDATE SET data_json = EXCLUDED.data_json, updated_at = NOW()
        ''',
        (key, Jsonb(data)),
    )

def get_mock_result(conn, key: str) -> dict[str, Any]:
    row = conn.execute("SELECT data_json FROM mock_results WHERE key = %s", (key,)).fetchone()
    if not row:
        raise KeyError(f"Mock result not found: {key}")
    return row["data_json"]

def upsert_ml_model_result(conn, model_id: str, data: dict[str, Any]) -> None:
    conn.execute(
        '''
        INSERT INTO ml_forecast_model_results(model_id, data_json, updated_at)
        VALUES (%s, %s, NOW())
        ON CONFLICT(model_id) DO UPDATE SET data_json = EXCLUDED.data_json, updated_at = NOW()
        ''',
        (model_id, Jsonb(data)),
    )

def get_ml_model_result(conn, model_id: str) -> dict[str, Any]:
    row = conn.execute("SELECT data_json FROM ml_forecast_model_results WHERE model_id = %s", (model_id,)).fetchone()
    if not row:
        raise KeyError(f"ML model result not found: {model_id}")
    return row["data_json"]

def upsert_ml_precomputed(conn, result_type: str, region_id: str, model_id: str, indicator_id: str, data: dict[str, Any]) -> None:
    conn.execute(
        '''
        INSERT INTO ml_precomputed_results(result_type, region_id, model_id, indicator_id, data_json, updated_at)
        VALUES (%s, %s, %s, %s, %s, NOW())
        ON CONFLICT(result_type, region_id, model_id, indicator_id) DO UPDATE SET data_json = EXCLUDED.data_json, updated_at = NOW()
        ''',
        (result_type, region_id, model_id, indicator_id, Jsonb(data)),
    )

def get_ml_precomputed(conn, result_type: str, region_id: str, model_id: str, indicator_id: str) -> dict[str, Any]:
    row = conn.execute(
        '''
        SELECT data_json FROM ml_precomputed_results
        WHERE result_type = %s
          AND (region_id = %s OR region_id = 'default')
          AND (model_id = %s OR model_id = 'default')
          AND (indicator_id = %s OR indicator_id = 'default')
        ORDER BY
          CASE WHEN region_id = %s THEN 0 ELSE 1 END,
          CASE WHEN model_id = %s THEN 0 ELSE 1 END,
          CASE WHEN indicator_id = %s THEN 0 ELSE 1 END
        LIMIT 1
        ''',
        (result_type, region_id, model_id, indicator_id, region_id, model_id, indicator_id),
    ).fetchone()
    if not row:
        raise KeyError(f"ML precomputed result not found: {result_type}/{region_id}/{model_id}/{indicator_id}")
    return row["data_json"]

def mfg_scenario_exists(conn, scenario_id: str, region_id: str, period_id: str, strategy_id: str, source_hash: str | None = None) -> bool:
    if source_hash:
        if conn.execute("SELECT 1 FROM imported_files WHERE file_hash = %s LIMIT 1", (source_hash,)).fetchone():
            return True
    row = conn.execute(
        "SELECT 1 FROM mfg_scenarios WHERE scenario_id = %s OR (region_id = %s AND period_id = %s AND strategy_id = %s) LIMIT 1",
        (scenario_id, region_id, period_id, strategy_id),
    ).fetchone()
    return row is not None

def insert_mfg_scenario_if_missing(conn, scenario_id: str, region_id: str, period_id: str, strategy_id: str, data: dict[str, Any],
                                   source_model: str | None = None, source_region_code: str | None = None,
                                   source_period: str | None = None, source_strategy: str | None = None,
                                   source_file: str | None = None, source_hash: str | None = None) -> bool:
    if mfg_scenario_exists(conn, scenario_id, region_id, period_id, strategy_id, source_hash):
        return False
    conn.execute(
        '''
        INSERT INTO mfg_scenarios(
            scenario_id, region_id, period_id, strategy_id,
            source_model, source_region_code, source_period, source_strategy,
            source_file, source_hash, data_json, created_at, updated_at
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())
        ''',
        (scenario_id, region_id, period_id, strategy_id, source_model, source_region_code, source_period, source_strategy, source_file, source_hash, Jsonb(data)),
    )
    return True

def replace_mfg_scenario(conn, scenario_id: str, region_id: str, period_id: str, strategy_id: str, data: dict[str, Any],
                         source_model: str | None = None, source_region_code: str | None = None,
                         source_period: str | None = None, source_strategy: str | None = None,
                         source_file: str | None = None, source_hash: str | None = None) -> None:
    conn.execute(
        '''
        INSERT INTO mfg_scenarios(
            scenario_id, region_id, period_id, strategy_id,
            source_model, source_region_code, source_period, source_strategy,
            source_file, source_hash, data_json, created_at, updated_at
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())
        ON CONFLICT(scenario_id) DO UPDATE SET
            region_id = EXCLUDED.region_id,
            period_id = EXCLUDED.period_id,
            strategy_id = EXCLUDED.strategy_id,
            source_model = EXCLUDED.source_model,
            source_region_code = EXCLUDED.source_region_code,
            source_period = EXCLUDED.source_period,
            source_strategy = EXCLUDED.source_strategy,
            source_file = EXCLUDED.source_file,
            source_hash = EXCLUDED.source_hash,
            data_json = EXCLUDED.data_json,
            updated_at = NOW()
        ''',
        (scenario_id, region_id, period_id, strategy_id, source_model, source_region_code, source_period, source_strategy, source_file, source_hash, Jsonb(data)),
    )

def record_imported_file(conn, file_hash: str, source_file: str, file_name: str, file_size: int, file_mtime: float,
                         import_type: str, target_id: str | None, status: str, message: str | None) -> None:
    conn.execute(
        '''
        INSERT INTO imported_files(file_hash, source_file, file_name, file_size, file_mtime, import_type, target_id, status, message, imported_at)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, NOW())
        ON CONFLICT(file_hash) DO NOTHING
        ''',
        (file_hash, source_file, file_name, file_size, file_mtime, import_type, target_id, status, message),
    )

def get_mfg_scenario(conn, region_id: str, period_id: str, strategy_id: str) -> dict[str, Any]:
    row = conn.execute(
        "SELECT data_json FROM mfg_scenarios WHERE region_id = %s AND period_id = %s AND strategy_id = %s",
        (region_id, period_id, strategy_id),
    ).fetchone()
    if not row:
        raise KeyError(f"MFG scenario not found: {region_id}/{period_id}/{strategy_id}")
    return row["data_json"]

def get_mfg_scenario_by_id(conn, scenario_id: str) -> dict[str, Any]:
    row = conn.execute("SELECT data_json FROM mfg_scenarios WHERE scenario_id = %s", (scenario_id,)).fetchone()
    if not row:
        raise KeyError(f"MFG scenario not found: {scenario_id}")
    return row["data_json"]
