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

-- ─────────────────────────────────────────────────────────────────────
-- Reference data tables (added from ai_biolab_docker / main branch)
-- ─────────────────────────────────────────────────────────────────────

-- Справочник 75 регионов РФ (slug, name, district, center, population, area, density).
-- Источник: ORIGINAL/new-covid-main/src/Covid.js → backend/scripts/regions_data.py
CREATE TABLE IF NOT EXISTS regions (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    district VARCHAR(255),
    center VARCHAR(255),
    population INTEGER,
    area VARCHAR(64),
    density VARCHAR(64),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_regions_slug ON regions(slug);
CREATE INDEX IF NOT EXISTS idx_regions_district ON regions(district);

-- Дневной временной ряд COVID-эпидемиологии по регионам.
-- Источник: data/regions/{Novosibirsk,Omsk,Altai}.csv
-- Базовые колонки одинаковые для всех регионов; в `extra` (jsonb)
-- сохраняются регион-специфичные поля (для НСО: hospitalised, n_critical,
-- ventilation, 1vac, 2vac, yandex_index, positive_percent и др.).
CREATE TABLE IF NOT EXISTS region_timeseries (
    id SERIAL PRIMARY KEY,
    region_slug VARCHAR(64) NOT NULL,
    date DATE NOT NULL,
    new_diagnoses INTEGER,
    cum_diagnoses INTEGER,
    new_recoveries INTEGER,
    cum_recoveries INTEGER,
    new_deaths INTEGER,
    cum_deaths INTEGER,
    new_tests INTEGER,
    cum_tests INTEGER,
    extra JSONB,
    CONSTRAINT uq_region_timeseries_region_date UNIQUE (region_slug, date)
);

CREATE INDEX IF NOT EXISTS idx_region_timeseries_lookup
    ON region_timeseries(region_slug, date);

-- Калибровочные параметры SEIR-модели (результат Optuna-калибровки).
-- Источник: data/seir/params_08_04_2022.json
-- Один файл = одна запись с label='08_04_2022', region_slug='novosibirsk'.
CREATE TABLE IF NOT EXISTS seir_params (
    id SERIAL PRIMARY KEY,
    region_slug VARCHAR(64) NOT NULL,
    label VARCHAR(64) NOT NULL,
    params JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_seir_params_region_label UNIQUE (region_slug, label)
);

CREATE INDEX IF NOT EXISTS idx_seir_params_region ON seir_params(region_slug);
