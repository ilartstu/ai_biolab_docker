# ai-biolab.ru сайт

Веб-приложение Сириуса для эпидемиологического моделирования. Полная переписка старого монолита Node+Python+CSV на современный стек FastAPI + PostgreSQL + React с асинхронным orchestration-бэком и трёхслойной архитектурой (Router-Service-Repository).

> **Документация на проект**
> Этот файл — единая точка входа. Прочитав его, можно легко продолжить разработку.

---

## 1. История проекта (краткая)

| Этап | Что было |
|---|---|
| **Старый сайт** (`CODE/ORIGINAL/`) | Два репо: React-фронт `new-covid-main` (130+ страниц) + Node-бэк `server.app.covid19-modeling-main` (4494-строчный `index.js`, child_process Python для Covasim, данные в CSV/JSON). Монолит без слоёв. |
| **Этап 1: docker-compose v0** | Подняли FastAPI + PostgreSQL + React в Docker. Сидеры регионов, timeseries, seir_params. Хранится на ветке [`backend-modeling-wip`] и снимке `ai_biolab_docker` локально. |
| **Этап 2: SEIR/Covasim** (отложен) | Попытка перенести `dlya_kati.py` + `SARIMAX.py` в наш FastAPI на ветке `backend-modeling-wip`. Реализовано, но не дочищено — упёрлось в NaN/dtype-проблемы Covasim. Документировано в `BACKEND_WIP.md` на ветке. |
| **Этап 3: Новый подготовленный бэк** | Был параллельно подготовлен проект с бэком, но более production-ready: async POST→polling→GET, Idempotency-Key, anon-сессии, cancel, rate limiting. |
| **Этап 4 (текущий): объединение** | Берём подготовленный проект с бэком как базу (готовые UI + async-бэк), добавляем данные (75 регионов, 3 CSV-таймсерии, seir_params) из прошлых этапов и MFG-сценарии (16 CSV из `data_to_import`). Это **текущее состояние**. |

---

## 2. Архитектура: ТЗ vs реализация

ТЗ требует **трёхслойный монолит Router → Service → Repository → PostgreSQL** + изолированный модуль Modeling. Слои названы в коде иначе, но **семантика та же**:

| Слой по ТЗ | Где в коде | Что внутри |
|---|---|---|
| **Router** | `backend/app/api/` | `agent.py`, `ml_forecast.py`, `mfg.py`, `common.py` — принимают HTTP, валидируют через Pydantic, делегируют дальше. SQL ЗДЕСЬ НЕТ. |
| **Service** (разбит на 2 компонента) | `backend/app/core/orchestrator.py` + `backend/app/providers/postgres_provider.py` | **Orchestrator** управляет жизненным циклом расчётов (очередь, cancel, heartbeat, Idempotency). **Provider** содержит бизнес-логику по моделям. HTTP ЗДЕСЬ НЕТ. |
| **Repository** | `backend/app/core/db.py` | Только функции `connect()`, `get_config()`, `upsert_*()`, `get_mfg_scenario()` и т.д. Raw SQL через `psycopg`. Бизнес-логики ЗДЕСЬ НЕТ. |
| **Modeling** (изолированный модуль) | `backend/app/modeling/` | Изолированные научные скрипты без FastAPI. Сейчас добавлен `modeling/cgan` — перенос inference-логики из `covid19.cgan-main`; Covasim остаётся на ветке `backend-modeling-wip`. |

**Strategy Pattern**: провайдер задан через `DataProvider(ABC)` + factory (`get_provider() -> DataProvider`). Сегодня `PostgresDataProvider`, завтра можно подменить на `FileDataProvider` или `MockDataProvider` без переписывания роутеров.

**Зависимости направлены строго сверху вниз**: проверка через grep —
```bash
grep -rn "from fastapi" backend/app/providers/    # должно быть пусто
grep -rn "from fastapi" backend/app/core/db.py    # должно быть пусто
grep -rn "select\|INSERT" backend/app/api/         # должно быть пусто
```

---

## 3. Технологический стек

### Backend
- **Python 3.11** + **FastAPI 0.115** + **uvicorn**
- **PostgreSQL 18-alpine** (mount `/var/lib/postgresql`, имя volume'а `ai_biolab_anna_pg18_data`)
- **psycopg 3** (raw SQL, без ORM)
- **openpyxl** (для импорта `.xlsx` MFG-сценариев)
- **numpy/pandas/scikit-learn/ta/tensorflow** — runtime для перенесённой CGAN-модели
- *Зависимости отложенные:* `covasim`, `statsmodels` — добавятся когда дойдём до интеграции Covasim/SARIMAX

### Frontend
- **React 18** + **Create React App** (react-scripts 5.0.0)
- **react-bootstrap**, **react-router-dom v6**
- **Highcharts** (для MFG/Agent графиков — ограниченный zoom, нет wheel-zoom)
- **react-katex** (для рендеринга LaTeX-формул на странице MFG)
- **axios** (REACT_APP_API_URL)

### Инфраструктура
- **docker-compose** (4 сервиса: db, db-init, api, frontend)
- **Makefile** (~30+ команд)
- **bind-mount'ы**: `./frontend → /app`, `./backend/generated → /app/generated`, `./data → /data:ro`, `./data_to_import → /data_to_import`

---

## 4. Структура проекта

```
ai_biolab_docker/
├── docker-compose.yml             # 4 сервиса, PG18, named volume ai_biolab_anna_pg18_data
├── .env, .env.example
├── Makefile                       # up/down/seed/seed-check/reset-mfg/psql/...
├── README.md                      # этот файл
├── INTEGRATION_NOTES.md           # карта интеграции (что добавлено сверх проекта с этапа 3)
│
├── backend/
│   ├── Dockerfile                 # python:3.11-slim
│   ├── requirements.txt           # fastapi, uvicorn, pydantic, psycopg, openpyxl, tensorflow, pandas, sklearn
│   ├── db/schema.sql              # 10 таблиц (6 с этапа 3 + ml_run_results + 3 с этапа 1)
│   │
│   ├── app/                       # ── код бэка ──
│   │   ├── main.py                # FastAPI app, CORS, X-Request-ID, anon-cookie
│   │   ├── api/                   # ★ СЛОЙ ROUTER
│   │   │   ├── agent.py           #   /api/models/agent/*
│   │   │   ├── ml_forecast.py     #   /api/models/ml-forecast/*
│   │   │   ├── mfg.py             #   /api/models/mfg/*
│   │   │   └── common.py          #   /api/health, /api/regions (TODO)
│   │   ├── core/
│   │   │   ├── orchestrator.py    # ★ СЛОЙ SERVICE (часть 1): Run-объект, очередь, cancel
│   │   │   ├── schemas.py         #   Pydantic-DTO
│   │   │   ├── settings.py        #   pydantic-settings
│   │   │   ├── db.py              # ★ СЛОЙ REPOSITORY — raw SQL через psycopg
│   │   │   └── errors.py
│   │   ├── providers/             # ★ СЛОЙ SERVICE (часть 2): Strategy Pattern
│   │   │   ├── base.py            #   DataProvider (ABC)
│   │   │   ├── factory.py         #   get_provider() с lru_cache
│   │   │   └── postgres_provider.py  # реальная реализация
│   │   └── modeling/              # ★ ИЗОЛИРОВАННЫЙ MODELING
│   │       └── cgan/              #   CGAN preprocessing + inference без FastAPI
│   │
│   ├── generated/cgan/            # ── CSV-артефакты CGAN runs (git игнорирует *.csv) ──
│   │
│   ├── mock_data/                 # ── моки JSON для первичной заливки в БД ──
│   │   ├── agent/{config,result}.json
│   │   ├── ml_forecast/
│   │   │   ├── config.json
│   │   │   ├── results/{cgan,lstm,seir_hcd}.json
│   │   │   └── precomputed/{modeling,validation}.json
│   │   └── mfg/
│   │       ├── config.json        # ★ ПОЛНОЕ описание MFG-модели: функционал, уравнения, начальные условия, периоды, стратегии, параметры, состояния
│   │       └── scenarios/         # пусто (был mock-файл, удалён — заменён реальными CSV из data_to_import/)
│   │
│   └── scripts/                   # ── сидеры и импортёры ──
│       ├── init_db.py             # CREATE TABLE IF NOT EXISTS из schema.sql
│       ├── import_mock_data_to_db.py  # Анин: грузит mock_data/* в app_config/mock_results/ml_*/mfg_scenarios
│       ├── import_mfg_scenarios_to_db.py  # Анин: парсит CSV/XLSX/JSON из data_to_import/, дополняет датами из mfg/config.json
│       ├── regions_data.py        # 77 регионов РФ (inline, выпарсено из ORIGINAL/Covid.js)
│       ├── seed_regions.py        # → таблица regions
│       ├── seed_timeseries.py     # CSV в /data/regions/ → таблица region_timeseries
│       ├── seed_seir_params.py    # JSON в /data/seir/ → таблица seir_params
│       └── seed_all.py            # оркестратор: regions + timeseries + seir_params
│
├── data/                          # ── СПРАВОЧНЫЕ ДАННЫЕ (mount /data:ro) ──
│   ├── regions/{Novosibirsk,Omsk,Altai}.csv  # ~2200 строк эпидемиологии 2020-2022
│   ├── seir/params_08_04_2022.json # калибровка Covasim для НСО
│   └── cgan/
│       ├── covid_ml_data_Spb.csv  # подготовленные признаки для CGAN Санкт-Петербурга
│       └── model/{generator,discriminator}_full_model.h5
│
├── data_to_import/                # ── ДРОП ФАЙЛОВ ДЛЯ ИМПОРТА (mount /data_to_import) ──
│   └── SEIR_HCD_TGC_Period{1..4}_{BasicScenario,Events,MasksWearing,TotalLoc}.csv
│                                  # 16 файлов: 4 периода × 4 стратегии MFG
│
└── frontend/                      # ── React SPA ──
    ├── Dockerfile
    ├── package.json               # 36 dependencies (полный набор оригинального new-covid-main)
    ├── package-lock.json          # 886 KB (замороженное дерево)
    └── src/
        ├── App.js                 # роутер, 130+ путей; /modeling и /the_spread_of_epidemics → ModelingHub
        ├── api/
        │   ├── client.js          # axios-инстанс с REACT_APP_API_URL
        │   └── modelingApi.js     # обёртки над /api/models/*
        ├── modeling/              # ── НОВЫЙ раздел моделирования ──
        │   ├── ModelingHub.js     # ★ ГЛАВНЫЙ компонент (3 вкладки: Agent / ML-Forecast / MFG)
        │   ├── ModelingHub.css
        │   ├── useAsyncModelRun.js  # хук для POST→polling→GET с восстановлением через localStorage
        │   └── components/TimeSeriesChart.js  # Highcharts wrapper
        ├── Components/, news/, conference/, images/  # ВСЕ старые статические страницы сохранены
        └── (всё остальное из старого сайта)
```

---

## 5. База данных — 10 таблиц

### Этап 3 + CGAN run-log (7 шт.) — общие для всех моделей, моков и сохранённых запусков
- `app_config(section TEXT PK, data_json JSONB, updated_at)` — конфиги agent/ml_forecast/mfg
- `mock_results(key TEXT PK, data_json JSONB, updated_at)` — результаты agent (mock)
- `ml_forecast_model_results(model_id TEXT PK, data_json JSONB)` — моки для CGAN/LSTM/SEIR-HCD
- `ml_precomputed_results(result_type, region_id, model_id, indicator_id, data_json)` — modeling/validation моки
- `ml_forecast_run_results(run_id PK, model_ids JSONB, region_id, indicator_id, context_date, request_json, result_json, artifacts_json)` — сохранённые результаты запусков ML/CGAN + ссылки на CSV
- `mfg_scenarios(scenario_id PK, region_id, period_id, strategy_id, data_json, source_*)` — **16 реальных MFG-сценариев**
- `imported_files(file_hash PK, source_file, file_size, file_mtime, status)` — аудит импорта (SHA-256 дедупликация)

### Этап 1 (3 шт.) — справочные данные из ORIGINAL
- `regions(id, slug UNIQUE, name, district, center, population, area, density)` — 77 строк
- `region_timeseries(id, region_slug, date, new_diagnoses, cum_diagnoses, …, extra JSONB, UNIQUE(slug,date))` — ~2200 строк (NSK/Omsk/Altai)
- `seir_params(id, region_slug, label, params JSONB, UNIQUE(slug,label))` — 1 запись (Новосибирск)

### Проверка
```bash
make seed-check
# regions count → 77
# timeseries by region → 3 региона с диапазонами дат
# seir_params → 1 запись
# mfg_scenarios → 16 строк (4 periods × 4 strategies)
make cgan-db-check
# последние сохранённые ML/CGAN runs
```

---

## 6. API endpoints

Все endpoint'ы под `/api/`. Swagger UI: http://localhost:8001/docs

### Здоровье
- `GET /api/health` — `{"status":"ok"}`

### Агентная модель (mock, готово к интеграции с Covasim из ветки `backend-modeling-wip`)
- `GET  /api/models/agent/config` — параметры формы, регионы, дефолтные значения
- `POST /api/models/agent/runs` (Idempotency-Key) → `{run_id, status}`
- `GET  /api/models/agent/runs/{run_id}/status`
- `GET  /api/models/agent/runs/{run_id}/results`
- `POST /api/models/agent/runs/{run_id}/cancel`
- `GET  /api/models/agent/runs/{run_id}/table` — табличная форма результата

### ML-Forecast (CGAN + LSTM + SEIR-HCD)
- `GET  /api/models/ml-forecast/config`
- `POST /api/models/ml-forecast/runs` — `{model_ids: ['cgan','lstm','seir_hcd'], context_date, ...}`
- `GET  /api/models/ml-forecast/runs/{run_id}/{status,results,table}`
- `GET  /api/models/ml-forecast/runs/{run_id}/artifacts/forecast_csv` — CSV-артефакт CGAN-прогноза
- `POST /api/models/ml-forecast/runs/{run_id}/cancel`
- `GET  /api/models/ml-forecast/modeling?region_id=&model_id=&indicator_id=` — для вкладки «Моделирование»
- `GET  /api/models/ml-forecast/validation?region_id=&model_id=&indicator_id=` — для вкладки «Валидация»

### MFG (модель среднего поля — **РЕАЛЬНЫЕ данные**)
- `GET  /api/models/mfg/config` — описание модели, формулы (LaTeX), параметры, стратегии, периоды
- `GET  /api/models/mfg/scenario-results?region_id=&period_id=&strategy_id=` — series S/E/I/R/H/C/D по датам

---

## 7. Модели — состояние интеграции

| Модель | Тип | Endpoints | Реальный код | Где взять реальный код |
|---|---|---|---|---|
| **Agent (Covasim)** | Agent-based, 100k агентов | `/api/models/agent/*` | ❌ mock | Ветка `backend-modeling-wip` — `app/modeling/seir.py::run_seir()` |
| **CGAN** | Conditional GAN | `/api/models/ml-forecast/*` (model_id=cgan) | ✅ daily forecast inference | Перенесено в `backend/app/modeling/cgan`; данные/веса в `data/cgan`. Работает для Санкт-Петербурга и `new_diagnoses` |
| **LSTM** | Deep Learning RNN | `/api/models/ml-forecast/*` (model_id=lstm) | ❌ mock | Нет в проекте — нужно получить |
| **SEIR-HCD (ML)** | Компартментная статистика | `/api/models/ml-forecast/*` (model_id=seir_hcd) | ❌ mock | Pickle `COVID19_forecasts.p` в `ORIGINAL/server.app.covid19-modeling-main/` (готовые офлайн-прогнозы) |
| **MFG-SEIR-HCD** | Mean Field Game + 7 ODE | `/api/models/mfg/*` | ✅ **РЕАЛЬНЫЕ ДАННЫЕ** из 16 CSV | Уже интегрировано в `mfg_scenarios` таблицу |

### MFG — что показывает фронт сейчас
- **Функционал J** (формула из (1) PDF) — отрендерен через KaTeX
- **7 ОДУ системы** — отрендерены
- **Начальные условия** — формула гауссовых распределений
- **Реальные коэффициенты** $a_1, \dots, a_6$ для каждого сценария (BasicScenario, Events, MasksWearing, TotalLoc)
- **Реальные начальные значения** $A_S, A_E, A_I, A_R, A_H, A_C, A_D$ для каждого из 4 периодов (взяты из PDF)
- **График** динамики S/E/I/R/H/C/D через Highcharts

PDF-источник: `Описание.pdf` (стр. 1-4).

---

## 8. Запуск и команды

### Первый запуск
```bash
cd CODE/ai_biolab_docker
cp .env.example .env
make up-build            # сборка + запуск
make logs-init           # увидеть как db-init засеял всё
make seed-check          # проверить регионы/timeseries/seir/mfg
# Открыть http://localhost:3000/modeling
```

### Адреса
- Frontend: http://localhost:3000
- API: http://localhost:8001
- Swagger: http://localhost:8001/docs
- PostgreSQL: `localhost:15433` (user `ai_biolab`, pass `ai_biolab`, db `ai_biolab`)

### Makefile — ключевые команды
```
make help              # список всех команд

# Жизненный цикл
make up                # запуск
make up-build          # запуск с пересборкой образов (после правок Python/JS)
make down              # остановка (БД сохраняется)
make clean             # ВСЁ снести вместе с данными (СБРАСЫВАЕТ БД)
make clean-pg-legacy   # снести старые PG-volume'ы (от PG16 или прежних попыток)

# Логи
make logs              # tail всего стека
make logs-api, logs-front, logs-db, logs-init

# Доступ
make psql              # psql внутри db (без пароля, через docker exec)
make psql-host         # psql с хоста через порт 15433 (берёт пароль из .env)
make sh-api, sh-front, sh-db  # bash внутри контейнера

# Сидеры
make seed              # все наши: regions + timeseries + seir_params
make seed-regions, seed-timeseries, seed-seir, seed-mfg, seed-mfg-replace
make reset-mfg         # очистить mfg_scenarios и переимпортировать (полезно после правок mfg/config.json)
make seed-check        # COUNT по всем таблицам

# Фронт
make front-reset       # пересоздать node_modules volume

# Healthcheck
make health            # curl /api/health
make init-db           # применить актуальную db/schema.sql к существующей БД
make cgan-smoke        # прямой CGAN inference внутри api-контейнера (3 траектории)
make cgan-api-smoke    # полный POST→polling→GET через localhost:8001
make cgan-db-check     # последние сохранённые ML/CGAN runs в PostgreSQL
```

### Типичные workflow'ы

#### «Поправил Python в backend/scripts или backend/app»
```bash
make up-build
```
(пересоберёт образ, db-init не перезапустится автоматически — старые данные останутся, новые сидеры выполнятся идемпотентно)

#### «Проверить перенос CGAN»
```bash
make up-build
make init-db
make cgan-smoke
make cgan-api-smoke
make cgan-db-check
```
`cgan-smoke` запускает модель напрямую внутри API-контейнера и пишет CSV в `backend/generated/cgan/`.
`cgan-api-smoke` проверяет полный пользовательский путь: POST run → polling статуса → GET результата.

#### «Поправил mock_data/mfg/config.json (описания, формулы, коэффициенты)»
```bash
docker compose exec api python scripts/import_mock_data_to_db.py
```
(перезальёт config в `app_config` — фронт получит новое сразу через `/api/models/mfg/config`)

#### «Добавил/изменил CSV в data_to_import/»
```bash
make seed-mfg            # инкрементально (новые файлы добавятся, существующие пропустятся)
make seed-mfg-replace    # принудительно заменить существующие
make reset-mfg           # очистить mfg_scenarios и переимпортировать
```

#### «Изменил CSV в data/regions/ или params в data/seir/»
```bash
make seed                # идемпотентно, дозальёт новое
```

#### «Изменил mfg/config.json (даты, периоды, стратегии)»
```bash
docker compose exec api python scripts/import_mock_data_to_db.py
make reset-mfg     # CSV перечитаются с новыми датами из config
```

---

## 9. Что готово

### Что работает
- ✅ Frontend перенесён полностью (все статические страницы, биографии, новости, конференции)
- ✅ Async POST→polling→GET pattern для всех 3 моделей (с моками)
- ✅ CGAN daily forecast: реальный inference по `generator_full_model.h5` для `spb/new_diagnoses`, сохранение результата в PostgreSQL и CSV
- ✅ MFG-вкладка: РЕАЛЬНЫЕ данные 16 сценариев из CSV, графики, формулы через KaTeX, описания
- ✅ Идемпотентные сидеры
- ✅ db-init контейнер автоматически создаёт схему и засевает данные
- ✅ Восстановление активного run'а после reload через localStorage
- ✅ Cancel расчётов, Idempotency-Key

### Что не работает / TODO

#### Реальные модели вместо моков (нужно интегрировать)
- **Covasim** в `run_agent`: переносить из ветки `backend-modeling-wip` репо `ai_biolab_docker`. Там есть `app/modeling/seir.py::run_seir()` + helpers + sarimax, переписанные из `dlya_kati.py`/`functions_total.py`. Известные баги документированы в `BACKEND_WIP.md` ветки.
- **CGAN modeling/validation precomputed**: daily forecast уже реальный, но вкладки «Моделирование» и «Валидация» для CGAN пока читают общие mock/precomputed JSON. Если нужны реальные склейки по всему ряду — сделать отдельный offline импорт в `ml_precomputed_results`.
- **LSTM**: нет кода — спросить у учёных.
- **SEIR-HCD ML**: pickle `COVID19_forecasts.p` в `ORIGINAL/server.app.covid19-modeling-main/`. Нужен скрипт-распаковщик (адаптация `convertCOVID19_f.py`).

#### Frontend WIP
- Старые axios-вызовы в страницах `Modeling.js`, `ModelingSEIR_HCD.js`, `Covid.js`, `Tub.js` всё ещё идут на `https://server.ai-biolab.ru/...` — фейлятся в Network tab. Нужно глобально заменить на наш API. Но новая страница `/modeling` (→ ModelingHub) работает.
- Возможно стоит выпилить старые `Modeling.js`, `ModelingSEIR_HCD.js`, `The_spread_of_epidemics.js` целиком — `App.js` уже редиректит на ModelingHub.

#### Backend WIP
- В `app/api/common.py` пока нет endpoint'а `/api/regions` для списка 77 регионов (но таблица заполнена). Когда понадобится списочный селектор регионов на фронте — добавить.

### Известные баги (исправленные)
- ✅ `STRATEGY_MAP` не содержал `maskswearing` (с `s`) — добавлено
- ✅ Regex `r"^period\\d+$"` (literal `\d`) — исправлено на `r"^period\d+$"`
- ✅ MFG-импорт не проставлял даты в series (CSV только S/E/I/R/H/C/D) — добавлена `enrich_series_with_dates()` по start_date из config

---

## 10. Git-стратегия

### Текущие ветки (в репозитории github.com/ilartstu/ai_biolab_docker)
- **`main`** — стабильная база до Этапа 2 (PG18 + сидеры). Сейчас будет полностью переписана файлами этого проекта.
- **`backend-modeling-wip`** — WIP-попытка переноса Covasim/SARIMAX. Сохранена для коллеги, который может продолжить интеграцию реальных моделей.

---

## 11. Контекст для понимания

- **Архитектура из ТЗ соблюдена** — слои Router/Service/Repository есть, просто названы `api/`, `core+providers/`, `db.py`.
- **Strategy Pattern** через `DataProvider(ABC)` — подменить источник данных (PG → Mongo → файлы) можно изменением одной строчки в `factory.py`.
- **Async-by-default** для всех расчётных endpoint'ов — POST не возвращает результат, только `run_id`. Это правильно для долгих ML-расчётов.
- **Mock-first development** — LSTM/SEIR-HCD ML пока возвращают синтетические JSON из БД; CGAN daily forecast уже заменён реальным inference.
- **MFG и CGAN daily forecast — реальные данные/расчёты.** MFG читает 16 CSV-сценариев, CGAN считает 5-дневный прогноз по перенесённому генератору.
- **Frontend на CRA 5.0.0 с замороженным lockfile** — npm dep-hell обходится через `npm ci`. Не переходить на Vite без необходимости.
- **PostgreSQL 18-alpine с mount `/var/lib/postgresql`** (не `/var/lib/postgresql/data` как в PG16!). При апгрейде смежных проектов помнить про новую структуру data dir.
