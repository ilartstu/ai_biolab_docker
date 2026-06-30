CREATE TABLE IF NOT EXISTS app_config (
    section TEXT PRIMARY KEY,
    data_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mock_results (
    key TEXT PRIMARY KEY,
    data_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS agent_run_results (
    run_id TEXT PRIMARY KEY,
    request_hash TEXT NOT NULL UNIQUE,
    region_id TEXT NOT NULL,
    request_json JSONB NOT NULL,
    result_json JSONB NOT NULL,
    model_version TEXT NOT NULL,
    rand_seed INTEGER NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_agent_run_results_lookup
ON agent_run_results(region_id, created_at DESC);

CREATE TABLE IF NOT EXISTS ml_forecast_model_results (
    model_id TEXT PRIMARY KEY,
    data_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ml_precomputed_results (
    result_type TEXT NOT NULL,
    region_id TEXT NOT NULL DEFAULT 'default',
    model_id TEXT NOT NULL DEFAULT 'default',
    indicator_id TEXT NOT NULL DEFAULT 'default',
    data_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (result_type, region_id, model_id, indicator_id)
);

CREATE TABLE IF NOT EXISTS ml_forecast_run_results (
    run_id TEXT PRIMARY KEY,
    model_ids JSONB NOT NULL,
    region_id TEXT NOT NULL,
    indicator_id TEXT NOT NULL,
    context_date DATE NOT NULL,
    request_json JSONB NOT NULL,
    result_json JSONB NOT NULL,
    artifacts_json JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ml_forecast_run_results_lookup
ON ml_forecast_run_results(region_id, indicator_id, context_date, created_at DESC);

CREATE TABLE IF NOT EXISTS mfg_scenarios (
    scenario_id TEXT PRIMARY KEY,
    region_id TEXT NOT NULL,
    period_id TEXT NOT NULL,
    strategy_id TEXT NOT NULL,
    source_model TEXT,
    source_region_code TEXT,
    source_period TEXT,
    source_strategy TEXT,
    source_file TEXT,
    source_hash TEXT,
    data_json JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(region_id, period_id, strategy_id)
);

CREATE INDEX IF NOT EXISTS idx_mfg_scenarios_lookup
ON mfg_scenarios(region_id, period_id, strategy_id);

CREATE INDEX IF NOT EXISTS idx_mfg_scenarios_source_hash
ON mfg_scenarios(source_hash);

CREATE TABLE IF NOT EXISTS imported_files (
    file_hash TEXT PRIMARY KEY,
    source_file TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    file_mtime DOUBLE PRECISION NOT NULL,
    import_type TEXT NOT NULL,
    target_id TEXT,
    status TEXT NOT NULL,
    message TEXT,
    imported_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_imported_files_source_file
ON imported_files(source_file);

CREATE INDEX IF NOT EXISTS idx_imported_files_target
ON imported_files(target_id);
