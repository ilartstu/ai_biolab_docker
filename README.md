# ai_biolab_docker — Docker-compose v0

База новой архитектуры сайта **ai-biolab.ru** (FastAPI-монолит Router-Service-Repository + PostgreSQL + React-фронт). Соответствует ПРИЛОЖЕНИЮ 2 ТЗ.

## Быстрый старт через Makefile

```bash
make help              # список всех команд
make up                # поднять весь стек в фоне
make health            # проверить /health и /health/db
make logs-api          # логи бэка
make psql              # зайти в БД
make front-reset       # пересобрать фронт (после правок package.json)
make down              # остановить (БД сохраняется)
make clean             # полный сброс (СНЕСЁТ БД!)

# Этап 1 — данные
make seed              # засеять regions + timeseries + seir_params
make seed-check        # проверить что засеялось
```

## Сидеры данных (Этап 1)

После первого `make up` (или после `make clean && make up`) база пустая.
Команда `make seed` наполняет её данными из старого проекта:

| Что | Источник | Куда | Объём |
|---|---|---|---|
| 75 регионов РФ | `regions_data.py` (распарсено из `ORIGINAL/new-covid-main/src/Covid.js`) | таблица `regions` | 75 строк |
| Временные ряды | `data/regions/{Novosibirsk,Omsk,Altai}.csv` (из `ORIGINAL/server.app.covid19-modeling-main/`) | таблица `timeseries` | ~2200 строк |
| Параметры SEIR | `data/seir/params_08_04_2022.json` | таблица `seir_params` | 1 запись (label=`08_04_2022`, region=`novosibirsk`) |

Сидеры **идемпотентны** (ON CONFLICT DO NOTHING) — можно запускать многократно. Проверка:

```bash
make seed-check
# regions count → 75
# timeseries by region → novosibirsk/omsk/altay с диапазонами дат
# seir_params → одна запись с label='08_04_2022'

# или через API
curl http://localhost:8000/api/v1/regions | jq 'length'         # → 75
curl http://localhost:8000/api/v1/regions/novosibirsk | jq
curl "http://localhost:8000/api/v1/regions/novosibirsk/timeseries?date_from=2020-03-12&date_to=2020-03-20" | jq
```

## Залив в GitHub (пустой репозиторий)

Из директории `ai_biolab_docker/`:

```bash
cd CODE/ai_biolab_docker

# 1. инициализировать git (если ещё не сделано)
git init

# 2. проверить, что .env НЕ попадает в коммит (он в .gitignore)
git status

# 3. зафиксировать всё
git add .
git commit -m "init: docker-compose v0 (FastAPI + PostgreSQL + CRA-shell)"

# 4. указать ветку main
git branch -M main

# 5. подключить удалённый репо (замени URL на свой)
# через HTTPS:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
# или через SSH:
# git remote add origin git@github.com:USERNAME/REPO_NAME.git

# 6. запушить
git push -u origin main
```

Если хочешь подружить с `gh` (GitHub CLI):
```bash
gh auth login                                # один раз
gh repo create REPO_NAME --private --source=. --remote=origin --push
```

При следующих изменениях:
```bash
git add .
git commit -m "что сделано"
git push
```

**Что НЕ попадёт в коммит** (уже в `.gitignore`): `.env`, `node_modules/`, `__pycache__/`, `.DS_Store`, `build/`, `*.log`.

## Структура

```
ai_biolab_docker/
├── docker-compose.yml           # api + db + frontend, healthcheck, volumes
├── .env / .env.example          # переменные окружения для всего стека
├── .gitignore
│
├── backend/                     # FastAPI
│   ├── Dockerfile               # python:3.12-slim + uvicorn --reload
│   ├── requirements.txt
│   ├── alembic.ini              # миграции БД
│   ├── alembic/
│   │   ├── env.py
│   │   └── versions/            # сюда будут падать миграции
│   └── app/
│       ├── main.py              # entrypoint FastAPI, lifespan, CORS, include_router
│       ├── core/
│       │   ├── config.py        # pydantic-settings
│       │   ├── database.py      # SQLAlchemy 2.x engine + SessionLocal + Base + get_db
│       │   └── logging.py
│       ├── routers/             # ── СЛОЙ Router (валидация + делегирование) ──
│       │   ├── health.py        #   GET /health, GET /health/db
│       │   ├── regions.py       #   GET /api/v1/regions, /{slug}
│       │   ├── scenarios.py     #   POST /api/v1/scenarios/run (SEIR Covasim)
│       │   ├── forecasts.py     #   STUB — SARIMAX-прогнозы
│       │   └── outbreaks.py     #   STUB — детекция вспышек (новый раздел ТЗ)
│       ├── schemas/             # Pydantic — DTO для I/O
│       │   ├── region.py
│       │   ├── scenario.py
│       │   └── forecast.py
│       ├── services/            # ── СЛОЙ Service (бизнес-логика) ──
│       │   ├── region_service.py
│       │   ├── scenario_service.py
│       │   └── forecast_service.py
│       ├── repositories/        # ── СЛОЙ Repository (единственный доступ к БД) ──
│       │   ├── base.py
│       │   ├── region_repo.py
│       │   └── scenario_repo.py
│       ├── models/              # SQLAlchemy ORM
│       │   ├── region.py        #   таблица regions
│       │   └── scenario_run.py  #   таблица scenario_runs (логирование запусков SEIR)
│       └── modeling/            # ── МОДУЛЬ Modeling (Python-скрипты, БЕЗ импорта FastAPI) ──
│           ├── README.md        #   план переноса dlya_kati.py / SARIMAX.py
│           ├── seir.py          #   STUB — run_seir_stub
│           └── sarimax.py       #   STUB
│
├── frontend/                    # React (CRA, оставляем по решению Ильи)
│   ├── Dockerfile               # node:20-alpine + react-scripts start
│   ├── package.json             # минимум: react, react-router-dom, axios
│   ├── public/index.html
│   └── src/
│       ├── index.js, App.js, index.css
│       ├── api/client.js        # axios-инстанс с REACT_APP_API_URL
│       └── pages/HealthCheck.js # проверка связи с API + БД
│
└── data/                        # монтируется в api как /data:ro
    └── README.md                # сюда копировать CSV/JSON из ORIGINAL
```

## Запуск

```bash
cd CODE/ai_biolab_docker
cp .env.example .env          # уже скопирован, при необходимости отредактируй пароли

docker compose up --build     # первая сборка ~5 мин (npm install + pip install)
```

После запуска:

| URL | Что |
|---|---|
| http://localhost:8000/health | `{"status":"ok"}` |
| http://localhost:8000/health/db | `{"status":"ok","db_alive":true}` |
| http://localhost:8000/docs | Swagger UI (FastAPI) |
| http://localhost:8000/api/v1/regions | список регионов (пустой пока БД не засеяна) |
| http://localhost:3000 | React-фронт, страница HealthCheck дергает оба endpoint'а |
| `psql -h localhost -p 15432 -U ai_biolab -d ai_biolab` | прямой доступ к БД (пароль `changeme`); порт 15432 чтобы не конфликтовать с локальными PG. Или `make psql` через docker exec — обходит порт |

### Проверка работоспособности

```bash
# 1. Стек поднялся
docker compose ps             # все три сервиса должны быть healthy

# 2. API живой
curl http://localhost:8000/health
curl http://localhost:8000/health/db

# 3. БД живая через API
curl http://localhost:8000/api/v1/regions      # []

# 4. Запуск SEIR-сценария (заглушка, но запишет в scenario_runs)
curl -X POST http://localhost:8000/api/v1/scenarios/run \
  -H "Content-Type: application/json" \
  -d '{"region_slug":"novosibirsk","population":2798170,"n_future_days":45,"initial_infected":20}'

curl http://localhost:8000/api/v1/scenarios/1

# 5. Что в БД
docker compose exec db psql -U ai_biolab -d ai_biolab -c "\dt"
docker compose exec db psql -U ai_biolab -d ai_biolab -c "SELECT * FROM scenario_runs;"
```

### Полезные команды

```bash
docker compose logs -f api          # логи бэка
docker compose logs -f frontend     # логи CRA
docker compose down                 # остановить
docker compose down -v              # остановить + удалить БД (полный сброс)

# Миграции Alembic (когда понадобятся вместо create_all)
docker compose exec api alembic revision --autogenerate -m "init"
docker compose exec api alembic upgrade head
```

## Что уже работает

- **PostgreSQL 16** в контейнере с persistent volume и healthcheck (pg_isready).
- **FastAPI** с трёхслойной архитектурой Router → Service → Repository → DB, и отдельным модулем Modeling без зависимостей от FastAPI (как требует ТЗ).
- **CORS** настроен на `http://localhost:3000`.
- **SQLAlchemy 2.x + Pydantic v2** (актуальные стеки).
- **Hot reload** для бэка (uvicorn --reload) и фронта (CRA).
- При первом запуске API создаёт таблицы `regions` и `scenario_runs` через `Base.metadata.create_all()` (заглушка вместо alembic, пока миграций нет).
- **Endpoint логирования запусков:** `POST /api/v1/scenarios/run` пишет запись в `scenario_runs` (status, started_at, finished_at, result jsonb) — реализует требование ТЗ «система логирует каждый запуск расчётов».

## Что НЕ работает (заглушки) — план переноса

| Что | Откуда переносить | Куда здесь |
|---|---|---|
| Реальный Covasim/SEIR | `ORIGINAL/server.app.covid19-modeling-main/dlya_kati.py` + `calibration_total.py` + `functions_total.py` | `backend/app/modeling/seir.py::run_seir_stub` → `run_seir` |
| SARIMAX-прогнозы | `ORIGINAL/.../SARIMAX.py` + `func.py` + `convertCOVID19_f.py` + `COVID19_forecasts.p` | `backend/app/modeling/sarimax.py` |
| Сидер 85 регионов РФ | хардкод из `ORIGINAL/new-covid-main/src/Covid.js` (массив `regions[]`) | `backend/app/scripts/seed_regions.py` (новый) → таблица `regions` |
| Загрузка CSV-таймсерий | `ORIGINAL/.../Novosibirsk.csv`, `Omsk.csv`, `Altai.csv` + удалённые `*-region-data.csv` | таблица `timeseries` (region_slug, date, new_diagnoses, …) — модель добавить |
| Параметры SEIR | `ORIGINAL/.../params_08_04_2022.json` | таблица `seir_params` |
| Предрасчёт MultiSim | `ORIGINAL/.../msim_res.json` (3.5 MB) | seed → `scenario_runs` или отдельная таблица |
| Endpoint детекции вспышек | НЕТ в старом фронте, новый функционал по ТЗ | `routers/outbreaks.py` + service + map/dropdown на фронте |
| Экспорт PNG/PDF/CSV/ZIP с сервера | сейчас на клиенте (`js-file-download`) | `routers/exports.py` + WeasyPrint/Pillow |

## Что НЕ работает на фронте (минимальный shell)

Сейчас `frontend/src/` — только заглушка с одной страницей HealthCheck.

**Что переносим из `ORIGINAL/new-covid-main/src/`** (по решению Ильи — переносим всё, включая `_En`-дубли):

| Категория | Файлы | Что делаем |
|---|---|---|
| Каркас | App.js, NaviBarv2(_En).js, Footer(_En).js, styles.css, App.css | копируем + обновляем Routes |
| Лендинг | Main.js, Main_En.js, MainTeam(_En).js, Components/Main_*.js | копируем как есть |
| Биографии (9 человек × 2 языка) | Components/{Krivorotko, Kabanikhin, Mikhailapov, Petrakova, Semenova, Nesterova, Zyatkov, Zvonareva, Neverov}_info(_En).js | копируем как есть |
| Учебные курсы | Components/Krivorotko_*_teaching*.js | копируем как есть |
| Описания направлений | Data_processing_and_analysis(_En).js, Medicine(_En).js, Pollution_modeling(_En).js, Social_processes(_En).js, The_spread_of_epidemics(_En).js | копируем (axios-вызовы → REACT_APP_API_URL) |
| Новости (66 файлов) | src/news/* | копируем как есть |
| Конференции (12 файлов) | src/conference/* + Conferences(_En).js, Sem_Compl(_En).js | копируем как есть |
| Скачивание статики | Data(_En).js | URL `https://ai-biolab.ru/data/*.csv` → новый CDN или endpoint /api/v1/files/ |
| **★ Modeling SEIR** | Modeling(_En).js (2193 стр.) | копируем + axios → `${API}/api/v1/scenarios/run` |
| **★ ModelingSEIR_HCD** | ModelingSEIR_HCD(_En).js (2095 стр.) | копируем + axios → `${API}/api/v1/forecasts/...` |
| **★ The_spread_of_epidemics** | The_spread_of_epidemics(_En).js (2287 стр.) | копируем + axios → `${API}/...` |
| **★ Covid (статистика)** | Covid(_En).js | копируем, убрать массив 77 хардкод-URL → единый `${API}/api/v1/regions/{slug}/timeseries` |
| **★ Tub** | Tub(_En).js | то же что Covid |
| Картинки | src/images/ (21 MB) + public/ | копируем как есть |

Шаги переноса (планируется отдельной серией задач):

1. Скопировать `ORIGINAL/new-covid-main/src/*` → `ai_biolab_docker/frontend/src/*`.
2. Скопировать `package.json` → дополнить наш минимальный + `react-bootstrap`, `bootstrap`, `chart.js`, `react-chartjs-2`, `chartjs-plugin-zoom`, `formik`, `yup`, `framer-motion`, `js-file-download`, `react-icons`, `react-helmet`, `react-yandex-maps`, `@coreui/react-pro`, `axios-progress-bar`.
3. Глобально заменить `https://server.ai-biolab.ru/` → `${process.env.REACT_APP_API_URL}/api/v1/` (sed).
4. Пересобрать контейнер frontend.

## Что сделано / не сделано

- ✅ `docker-compose.yml` — api + db + frontend, healthcheck для db (pg_isready) и api (HTTP /health).
- ✅ FastAPI с правильной слоистой архитектурой Router → Service → Repository → PostgreSQL (соответствует Рис. 1 ПРИЛОЖЕНИЯ 2).
- ✅ Модуль `modeling/` изолирован от FastAPI (как требует ТЗ).
- ✅ Логирование запусков сценариев через таблицу `scenario_runs`.
- ✅ CORS, hot reload, env-конфигурация, alembic-каркас.
- ✅ Минимальный фронт-shell с реальной проверкой связи API ↔ DB ↔ frontend.
- ⏸ Реальные модели (Covasim, SARIMAX) — пока заглушки, переносятся позже.
- ⏸ Сидер регионов — добавится отдельной задачей.
- ⏸ Перенос 130+ страниц фронта — отдельной задачей.
- ⏸ Карта РФ / выпадашка — отдельной задачей (решение по стеку отложено).


# Backend WIP — попытка переноса SEIR/Covasim (Этап 2)

Эта ветка содержит **незавершённую** попытку миграции SEIR-модели из старого
Node+Python бэка (`server.app.covid19-modeling-main/`) в новый FastAPI-монолит.

Работа приостановлена, потому что отладка research-grade кода Covasim
требует больше времени чем рассчитывалось, и фронт (моя зона) важнее запустить
вперёд. Эта ветка — материал для коллеги, который будет дальше заниматься бэком.

## Что сделано

### Зависимости
- `covasim==3.1.6` — главный движок SEIR-симуляции
- `statsmodels>=0.14.5` — для SARIMAX (используется внутри SEIR для прогноза new_tests)
- `tqdm>=4.66` — прогресс-бар для grid search в best_SARIMAX

### Код
- `backend/app/modeling/sarimax.py` — перенесены invboxcox, best_SARIMAX, get_predict, future_extr_new_tests
- `backend/app/modeling/seir_helpers.py` — НОВЫЙ: smooth, smooth_pd, past_extr, run_model, run_msim_extract
- `backend/app/modeling/seir.py` — главная функция `run_seir(region_slug, population, n_future_days, initial_infected, timeseries_rows, seir_params)` (адаптация `dlya_kati.py`)
- `backend/app/services/scenario_service.py` — `ScenarioService` + `execute_run_in_background` для FastAPI BackgroundTasks
- `backend/app/routers/scenarios.py` — POST `/api/v1/scenarios/run` возвращает 202 + run_id, расчёт уходит в фон
- `backend/app/routers/health.py` — `/health/modeling` smoke-test для всех модельных либ
- `backend/app/repositories/{timeseries_repo,seir_params_repo}.py` — для извлечения данных из БД

### Что работает
- `docker compose build api` собирается (covasim + транзитив ~600 MB, ~5-10 мин первый раз)
- `GET /health/modeling` возвращает версии covasim/numpy/pandas/scipy/sciris — все импортируются
- `POST /api/v1/scenarios/run` принимает запрос, пишет в БД со статусом `pending`, кикает BackgroundTask
- Сценарий стартует, появляется лог `execute_run #N: запуск SEIR для novosibirsk`

## Что НЕ работает (текущая блокирующая проблема)

Симуляция падает или висит внутри Covasim после следующего шага в цепочке:
БД → `_timeseries_rows_to_df` → `past_extr` → `smooth_pd` (`scipy.ndimage.gaussian_filter1d`)
→ `future_extr_new_tests` (SARIMAX grid search 196 моделей) → `run_model` (covasim.Sim)
→ `run_msim_extract` (covasim.MultiSim с n_runs=3).

### Поймали и пофиксили:
1. `dtype('O')` после round-trip данных БД → pandas (NULL значения делают колонку object) — fix: `pd.to_numeric(errors='coerce')` в `_timeseries_rows_to_df`
2. `scs.boxcox` падал с unpacking error на пустой серии — fix: early-return на `len(series) < 20`
3. NaN-отравление колонок после `gaussian_filter1d` — fix: `fillna(0)` перед smooth
4. `statsmodels 0.14.4` + `scipy 1.17` → `_lazywhere` ImportError — fix: `statsmodels>=0.14.5`

### НЕ верифицировано до конца
Последний прогон не подтверждён — uvicorn перезагружался посреди симуляции, лог обрывался.
**Что делать тому, кто продолжит:**
1. `docker compose up -d` и подождать healthy
2. Открыть второй терминал: `make logs-api`
3. `make seed-check` — убедиться что в БД есть 75 регионов + timeseries + seir_params
4. POST на `/api/v1/scenarios/run` с payload `{"region_slug":"novosibirsk","population":2798170,"n_future_days":45,"initial_infected":20}`
5. Через ~60-120 сек проверить `GET /api/v1/scenarios/<id>` — там либо `result` с series, либо `result.error` с traceback

### Известные потенциальные проблемы которые могут вылезти дальше
- **Память**: covasim с pop_size=100k × n_runs=3 ест ~500 MB-1 GB на симуляцию. Если контейнер ограничен — OOM-kill
- **API covasim 3.1.6**: cv.MultiSim, cv.test_num, cv.change_beta — могли поменяться по сравнению с тем, на чём писали оригинальные скрипты (там нет pin'а версии covasim)
- **Производительность**: best_SARIMAX перебирает 196 моделей — можно сократить диапазон или вообще использовать фиксированные параметры `[1,2,0,1]` (см. функцию `future_extr_new_tests`)
- **Откладывания калибровки (Optuna)**: пока используем `params_08_04_2022.json` из seed'а; в будущем добавлять Optuna для актуализации параметров
- **BackgroundTasks vs Celery**: in-process через FastAPI BackgroundTasks; при reload uvicorn задача убивается. Для прода → Celery + Redis

## Откуда переносился код

Все оригинальные скрипты лежат в `CODE/ORIGINAL/server.app.covid19-modeling-main/`:
- `dlya_kati.py` → `app/modeling/seir.py::run_seir`
- `functions_total.py` → `app/modeling/seir_helpers.py`
- `SARIMAX.py` + `func.py` → `app/modeling/sarimax.py`
- `calibration_total.py` — НЕ перенесён (это калибровка через Optuna, отложено)
- `convertCOVID19_f.py` — НЕ перенесён (one-shot загрузка pickle, отдельная задача)

## Как запустить и протестировать

```bash
cd CODE/ai_biolab_docker
git checkout backend-modeling-wip
cp .env.example .env
docker compose up --build       # первый раз ~10-15 минут
sleep 30
make seed                       # засеять regions + timeseries + seir_params
make health                     # /health и /health/db должны вернуть ok
curl -s http://localhost:8000/health/modeling | python3 -m json.tool

# Запустить расчёт
curl -X POST http://localhost:8000/api/v1/scenarios/run \
  -H "Content-Type: application/json" \
  -d '{"region_slug":"novosibirsk","population":2798170,"n_future_days":45,"initial_infected":20}'

# Опросить статус (id из ответа POST)
curl http://localhost:8000/api/v1/scenarios/1 | python3 -m json.tool