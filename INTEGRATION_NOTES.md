# Карта интеграции

## Удалено

- старый backend из исходного архива;
- старые вызовы моделирования из `Modeling.js`;
- зависимость нового раздела моделирования от `https://server.ai-biolab.ru`.

## Сохранено

- все статические страницы старого сайта;
- новости, публикации, изображения, логотипы и навигация;
- старые URL страниц, включая `/the_spread_of_epidemics`.

## Добавлено во frontend

```text
src/api/modelingApi.js
src/modeling/useAsyncModelRun.js
src/modeling/ModelingHub.js
src/modeling/ModelingHub.css
src/modeling/components/TimeSeriesChart.js
```

## Добавлено для CGAN

```text
backend/app/modeling/cgan/          # перенос preprocessing + inference из covid19.cgan-main без FastAPI
data/cgan/covid_ml_data_Spb.csv     # подготовленный датасет Санкт-Петербурга
data/cgan/model/*.h5                # generator/discriminator из исходного проекта
backend/generated/cgan/             # CSV-артефакты запусков
ml_forecast_run_results             # таблица PostgreSQL для сохранённых run results/artifacts
```

CGAN подключён в существующий `POST /api/models/ml-forecast/runs` при `model_id=cgan`.
LSTM и SEIR-HCD в этой вкладке пока остаются mock/precomputed.

## Соответствие вкладок API

### Агентная модель

```text
GET  /api/models/agent/config
POST /api/models/agent/runs
GET  /api/models/agent/runs/{run_id}/status
GET  /api/models/agent/runs/{run_id}/results
POST /api/models/agent/runs/{run_id}/cancel
```

### SEIR-HCD / LSTM / CGAN

```text
GET  /api/models/ml-forecast/config
POST /api/models/ml-forecast/runs
GET  /api/models/ml-forecast/runs/{run_id}/status
GET  /api/models/ml-forecast/runs/{run_id}/results
GET  /api/models/ml-forecast/runs/{run_id}/artifacts/forecast_csv
POST /api/models/ml-forecast/runs/{run_id}/cancel
GET  /api/models/ml-forecast/modeling
GET  /api/models/ml-forecast/validation
```

### Модель среднего поля

```text
GET /api/models/mfg/config
GET /api/models/mfg/scenario-results
```
