.DEFAULT_GOAL := help
COMPOSE := docker compose

## ───── Базовые команды ─────

## help              показать список команд
help:
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/^## //'

## up                поднять весь стек в фоне (db + api + frontend)
up:
	$(COMPOSE) up -d

## up-fg             поднять стек с логами в текущем терминале
up-fg:
	$(COMPOSE) up

## down              остановить стек (БД и node_modules сохраняются)
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

## psql-host         psql с хоста через 5433 (берёт пароль из .env)
psql-host:
	@bash -c 'set -a && source .env && set +a && PGPASSWORD=$$POSTGRES_PASSWORD psql -h localhost -p $$POSTGRES_PORT -U $$POSTGRES_USER -d $$POSTGRES_DB'

## ───── Healthcheck и smoke-тесты ─────

## health            проверить /health и /health/db
health:
	@echo "── GET /health ──"
	@curl -s http://localhost:8000/health || echo "API недоступен"
	@echo "\n── GET /health/db ──"
	@curl -s http://localhost:8000/health/db || echo "API недоступен"
	@echo ""

## smoke             запустить тестовый сценарий через API
smoke:
	@curl -s -X POST http://localhost:8000/api/v1/scenarios/run \
		-H "Content-Type: application/json" \
		-d '{"region_slug":"novosibirsk","population":2798170,"n_future_days":45,"initial_infected":20}' \
		| python3 -m json.tool || true

## ───── Фронт ─────

## front-reset       полная пересборка фронта (удаляет node_modules-volume)
front-reset:
	$(COMPOSE) stop frontend
	$(COMPOSE) rm -f frontend
	docker volume rm ai_biolab_frontend_node_modules 2>/dev/null || true
	$(COMPOSE) build --no-cache frontend
	$(COMPOSE) up -d frontend

## front-install     добавить новый npm-пакет: make front-install p=react-bootstrap
front-install:
	$(COMPOSE) exec frontend npm install $(p) --legacy-peer-deps

## ───── Seed данных (Этап 1) ─────

## seed              запустить все сидеры: regions + timeseries + seir_params
seed:
	$(COMPOSE) exec api python -m app.scripts.seed_all

## seed-regions      засеять только regions (75 регионов из Covid.js)
seed-regions:
	$(COMPOSE) exec api python -m app.scripts.seed_regions

## seed-timeseries   засеять только timeseries из CSV в data/regions/
seed-timeseries:
	$(COMPOSE) exec api python -m app.scripts.seed_timeseries

## seed-seir         засеять только seir_params из data/seir/
seed-seir:
	$(COMPOSE) exec api python -m app.scripts.seed_seir_params

## seed-check        проверить, что данные засеялись
seed-check:
	@echo "── regions count ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -t -c "SELECT count(*) FROM regions;"
	@echo "── timeseries by region ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "SELECT region_slug, count(*), min(date), max(date) FROM timeseries GROUP BY region_slug ORDER BY region_slug;"
	@echo "── seir_params ──"
	@$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab -c "SELECT id, region_slug, label, created_at FROM seir_params;"

## ───── Backend / Alembic ─────

## migrate           применить миграции Alembic
migrate:
	$(COMPOSE) exec api alembic upgrade head

## migrate-new       создать новую миграцию: make migrate-new m="add timeseries table"
migrate-new:
	$(COMPOSE) exec api alembic revision --autogenerate -m "$(m)"

## migrate-down      откатить последнюю миграцию
migrate-down:
	$(COMPOSE) exec api alembic downgrade -1

## ───── Очистка ─────

## clean             остановить + удалить ВСЕ volumes (СБРАСЫВАЕТ БД!)
clean:
	$(COMPOSE) down -v

## clean-pg-legacy   снести старый volume от PG 16 (если остался после апгрейда)
clean-pg-legacy:
	-docker volume rm ai_biolab_pg_data 2>/dev/null
	-docker volume rm ai_biolab_pg18_data 2>/dev/null
	@echo "Старые PG-volume'ы снесены (если были)"

## prune             docker system prune (чистка dangling-образов)
prune:
	docker system prune -f

.PHONY: help up up-fg down restart ps build rebuild logs logs-api logs-front logs-db \
        sh-api sh-front sh-db psql psql-host health smoke front-reset front-install \
        seed seed-regions seed-timeseries seed-seir seed-check \
        migrate migrate-new migrate-down clean clean-pg-legacy prune
