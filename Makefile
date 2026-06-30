.DEFAULT_GOAL := help
COMPOSE := docker compose
PYTHON ?= python

## help                 показать команды
help:
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/^## //'

## env                  создать .env из .env.example, если его ещё нет
env:
	@test -f .env || cp .env.example .env

## cgan-assets          скачать датасет и H5-файлы реальной CGAN
cgan-assets:
	$(PYTHON) scripts/download_cgan_assets.py

## cgan-assets-force    заново скачать CGAN-ассеты
cgan-assets-force:
	$(PYTHON) scripts/download_cgan_assets.py --force

## first-run            первый запуск: .env + CGAN-ассеты + сборка всего стека
first-run: env cgan-assets
	$(COMPOSE) up -d --build
	$(COMPOSE) ps -a

## up                   запустить уже собранный стек
up: env
	$(COMPOSE) up -d

## up-build             пересобрать и запустить весь стек
up-build: env
	$(COMPOSE) up -d --build

## down                 остановить и удалить контейнеры проекта, БД сохранить
down:
	$(COMPOSE) down --remove-orphans

## stop                 остановить контейнеры, не удаляя их
stop:
	$(COMPOSE) stop

## restart              перезапустить весь стек
restart:
	$(COMPOSE) restart

## ps                   показать состояние контейнеров
ps:
	$(COMPOSE) ps -a

## logs                 следить за логами всего стека
logs:
	$(COMPOSE) logs -f --tail=150

## logs-api             следить за логами API
logs-api:
	$(COMPOSE) logs -f --tail=200 api

## logs-init            показать логи создания и наполнения БД
logs-init:
	$(COMPOSE) logs --tail=300 db-init

## logs-front           следить за логами frontend
logs-front:
	$(COMPOSE) logs -f --tail=200 frontend

## health               проверить health API
health:
	@curl -fsS http://localhost:8001/api/health
	@echo

## agent-direct         быстрый реальный Covasim без HTTP и PostgreSQL
agent-direct:
	$(COMPOSE) exec api python scripts/run_agent_direct.py

## agent-smoke          реальный API-запуск + повторный точный cache-hit из PostgreSQL
agent-smoke:
	$(PYTHON) backend/scripts/smoke_agent_api.py

## agent-db-check       последние сохранённые результаты агентной модели
agent-db-check:
	$(COMPOSE) exec db psql -U $${POSTGRES_USER:-ai_biolab} -d $${POSTGRES_DB:-ai_biolab} -c "SELECT run_id, left(request_hash,12) AS hash, region_id, model_version, rand_seed, created_at FROM agent_run_results ORDER BY created_at DESC LIMIT 20;"

## agent-db-count       количество уникальных точных расчётов в кэше
agent-db-count:
	$(COMPOSE) exec db psql -U $${POSTGRES_USER:-ai_biolab} -d $${POSTGRES_DB:-ai_biolab} -c "SELECT count(*) AS exact_cached_runs FROM agent_run_results;"

## cgan-smoke           быстрый прямой запуск CGAN на 3 траекториях
cgan-smoke:
	$(COMPOSE) exec api python scripts/run_cgan_forecast.py --context-date 2024-03-06 --n-trajectories 3

## mfg-check            проверить импорт сценариев модели среднего поля
mfg-check:
	$(COMPOSE) exec db psql -U $${POSTGRES_USER:-ai_biolab} -d $${POSTGRES_DB:-ai_biolab} -c "SELECT scenario_id, jsonb_array_length(data_json->'series') AS rows FROM mfg_scenarios ORDER BY scenario_id;"

## mfg-reimport         переимпортировать рассчитанные CSV с заменой записей
mfg-reimport:
	$(COMPOSE) exec api python scripts/import_mfg_scenarios_to_db.py --input-dir /data_to_import --region-id novosibirsk_oblast --replace

## psql                 открыть psql внутри контейнера
psql:
	$(COMPOSE) exec db psql -U $${POSTGRES_USER:-ai_biolab} -d $${POSTGRES_DB:-ai_biolab}

## test-syntax          проверить Python-синтаксис проекта
test-syntax:
	$(PYTHON) -m compileall -q backend/app backend/scripts scripts


## remove-all-containers  ОПАСНО: удалить ВСЕ Docker-контейнеры на компьютере, volumes сохранить
remove-all-containers:
	@ids="$$(docker ps -aq)"; if [ -n "$$ids" ]; then docker rm -f $$ids; else echo "Контейнеров нет"; fi

## remove-project       удалить контейнеры и сети проекта, сохранить volume БД
remove-project:
	$(COMPOSE) down --remove-orphans

## reset-all            ОПАСНО: удалить контейнеры и volume PostgreSQL
reset-all:
	$(COMPOSE) down -v --remove-orphans

.PHONY: help env cgan-assets cgan-assets-force first-run up up-build down stop restart ps \
        logs logs-api logs-init logs-front health agent-direct agent-smoke agent-db-check \
        agent-db-count cgan-smoke remove-all-containers mfg-check mfg-reimport psql test-syntax remove-project reset-all
