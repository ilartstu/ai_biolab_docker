.DEFAULT_GOAL := help
COMPOSE := docker compose

## ───── Базовые команды ─────

## help              показать список команд
help:
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/^## //'

## up                поднять стек в фоне (db + db-init + api + frontend)
up:
	$(COMPOSE) up -d

## up-build          пересобрать образы и поднять (после правок backend-кода)
up-build:
	$(COMPOSE) up -d --build

## up-fg             поднять стек с логами в текущем терминале
up-fg:
	$(COMPOSE) up

## down              остановить стек (БД сохраняется)
down:
	$(COMPOSE) down

## restart           перезапустить весь стек
restart:
	$(COMPOSE) restart

## ps                статус контейнеров
ps:
	$(COMPOSE) ps

## build             пересобрать образы (с кешем)
build:
	$(COMPOSE) build

## rebuild           пересобрать образы БЕЗ кеша и поднять
rebuild:
	$(COMPOSE) build --no-cache
	$(COMPOSE) up -d

## ───── Логи ─────

## logs              tail логи всего стека
logs:
	$(COMPOSE) logs -f --tail=100

## logs-api          логи только API
logs-api:
	$(COMPOSE) logs -f --tail=200 api

## logs-front        логи только фронта
logs-front:
	$(COMPOSE) logs -f --tail=200 frontend

## logs-db           логи только БД
logs-db:
	$(COMPOSE) logs -f --tail=200 db

## logs-init         логи db-init (полезно при первом запуске чтобы видеть импорт)
logs-init:
	$(COMPOSE) logs db-init

## ───── Shell-доступ ─────

## sh-api            bash внутри api-контейнера
sh-api:
	$(COMPOSE) exec api bash

## sh-front          sh внутри frontend-контейнера
sh-front:
	$(COMPOSE) exec frontend sh

## sh-db             bash внутри db-контейнера
sh-db:
	$(COMPOSE) exec db bash

## psql              psql внутри db-контейнера (без пароля, через docker exec)
psql:
	$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab

## psql-host         psql с хоста через 15433 (берёт пароль из .env)
psql-host:
	@bash -c 'set -a && source .env && set +a && PGPASSWORD=$$POSTGRES_PASSWORD psql -h localhost -p $$POSTGRES_PORT -U $$POSTGRES_USER -d $$POSTGRES_DB'

## ───── Healthcheck и smoke-тесты ─────

## health            проверить /api/health
health:
	@echo "── GET /api/health ──"
	@curl -s http://localhost:8001/api/health || echo "API недоступен"
	@echo ""

## smoke             тест запроса конфигурации агентной модели
smoke:
	@echo "── GET /api/models/agent/config ──"
	@curl -s http://localhost:8001/api/models/agent/config | python3 -m json.tool || true

## init-db           применить текущую схему db/schema.sql к PostgreSQL
init-db:
	$(COMPOSE) exec api python scripts/init_db.py

## cgan-smoke        быстрый прямой CGAN-инференс внутри api-контейнера (3 траектории)
cgan-smoke:
	$(COMPOSE) exec api python scripts/run_cgan_forecast.py --context-date 2024-03-06 --n-trajectories 3

## cgan-api-smoke    проверить полный async API-путь CGAN через localhost:8001
cgan-api-smoke:
	$(COMPOSE) exec api python scripts/init_db.py
	python3 backend/scripts/smoke_cgan_api.py

## cgan-db-check     показать последние сохранённые ML/CGAN runs в PostgreSQL
cgan-db-check:
	$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "SELECT run_id, model_ids, region_id, indicator_id, context_date, created_at FROM ml_forecast_run_results ORDER BY created_at DESC LIMIT 10;"

## ───── Сидеры справочных данных ─────

## seed              запустить ВСЕ наши сидеры (regions + timeseries + seir_params)
seed:
	$(COMPOSE) exec api python scripts/seed_all.py

## seed-regions      засеять только regions (75 регионов РФ из Covid.js)
seed-regions:
	$(COMPOSE) exec api python scripts/seed_regions.py

## seed-timeseries   засеять только timeseries из CSV в data/regions/
seed-timeseries:
	$(COMPOSE) exec api python scripts/seed_timeseries.py

## seed-seir         засеять только seir_params из data/seir/
seed-seir:
	$(COMPOSE) exec api python scripts/seed_seir_params.py

## seed-mfg          переимпортировать MFG-сценарии из data_to_import/
seed-mfg:
	$(COMPOSE) exec api python scripts/import_mfg_scenarios_to_db.py \
		--input-dir /data_to_import \
		--region-id novosibirsk_oblast

## seed-mfg-replace  переимпортировать MFG-сценарии с заменой существующих
seed-mfg-replace:
	$(COMPOSE) exec api python scripts/import_mfg_scenarios_to_db.py \
		--input-dir /data_to_import \
		--region-id novosibirsk_oblast \
		--replace

## reset-mfg         очистить таблицу mfg_scenarios и imported_files и заново импортировать
reset-mfg:
	@echo "── Очищаю mfg_scenarios и imported_files ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "DELETE FROM mfg_scenarios; DELETE FROM imported_files WHERE import_type='mfg_scenario';"
	@echo "── Импортирую заново ──"
	$(COMPOSE) exec api python scripts/import_mfg_scenarios_to_db.py \
		--input-dir /data_to_import \
		--region-id novosibirsk_oblast

## seed-check        проверить, что все справочные данные засеялись
seed-check:
	@echo "── regions count ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -t -c "SELECT count(*) FROM regions;"
	@echo "── timeseries by region ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "SELECT region_slug, count(*), min(date), max(date) FROM region_timeseries GROUP BY region_slug ORDER BY region_slug;"
	@echo "── seir_params ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "SELECT id, region_slug, label, created_at FROM seir_params;"
	@echo "── mfg_scenarios ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "SELECT scenario_id, region_id, period_id, strategy_id FROM mfg_scenarios ORDER BY period_id, strategy_id;"

## ───── Фронт ─────

## front-reset       полная пересборка фронта (удаляет node_modules-volume)
front-reset:
	$(COMPOSE) stop frontend
	$(COMPOSE) rm -f frontend
	docker volume rm ai_biolab_Anna_frontend_node_modules 2>/dev/null || true
	$(COMPOSE) build --no-cache frontend
	$(COMPOSE) up -d frontend

## front-install     добавить новый npm-пакет: make front-install p=react-bootstrap
front-install:
	$(COMPOSE) exec frontend npm install $(p) --legacy-peer-deps

## ───── Очистка ─────

## clean             остановить + удалить ВСЕ volumes (СБРАСЫВАЕТ БД!)
clean:
	$(COMPOSE) down -v

## clean-pg-legacy   снести старый PG-volume (если остался от PG16 или старых попыток)
clean-pg-legacy:
	-docker volume rm ai_biolab_Anna_postgres_data 2>/dev/null
	-docker volume rm ai_biolab_anna_postgres_data 2>/dev/null
	-docker volume rm ai_biolab_anna_pg18_data 2>/dev/null
	@echo "Старые PG-volume'ы снесены (если были)"

## prune             docker system prune (чистка dangling-образов)
prune:
	docker system prune -f

.PHONY: help up up-build up-fg down restart ps build rebuild \
        logs logs-api logs-front logs-db logs-init \
        sh-api sh-front sh-db psql psql-host \
        health smoke init-db cgan-smoke cgan-api-smoke cgan-db-check \
        seed seed-regions seed-timeseries seed-seir seed-mfg seed-mfg-replace reset-mfg seed-check \
        front-reset front-install \
        clean clean-pg-legacy prune
