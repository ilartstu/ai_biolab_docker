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

## psql              psql внутри db-контейнера
psql:
	$(COMPOSE) exec db psql -U ai_biolab -d ai_biolab

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

## prune             docker system prune (чистка dangling-образов)
prune:
	docker system prune -f

.PHONY: help up up-fg down restart ps build rebuild logs logs-api logs-front logs-db \
        sh-api sh-front sh-db psql health smoke front-reset front-install \
        migrate migrate-new migrate-down clean prune
