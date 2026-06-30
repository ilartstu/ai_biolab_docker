# AI Biolab: React + FastAPI + PostgreSQL + реальные CGAN и Covasim

Сборка сохраняет старый React-сайт и актуальный orchestration backend. В ветку с
реальной CGAN добавлена реальная агентная модель Covasim и точный кэш расчётов в
PostgreSQL.

## Версия Python

Проект зафиксирован на **Python 3.11.x**. Backend-контейнер собирается из:

```dockerfile
FROM python:3.11-slim
```

Python 3.11 выбран из-за совместимости одновременно с `tensorflow==2.15.0` и
Covasim. Для команд `make cgan-assets` и `make agent-smoke` на Windows также
желательно установить локальный Python 3.11.

Актуальные основные зависимости находятся в `backend/requirements.txt`:

```text
numpy==1.26.4
pandas==2.2.3
scikit-learn==1.5.2
tensorflow==2.15.0
covasim==3.1.8
```

## Что реализовано в агентной модели

Параметры приходят из frontend без промежуточного YAML:

```text
region_id
pop_size
pop_infected
forecast_days
beta
interventions[].date
interventions[].beta_change
```

Backend преобразует даты интервенций в дни Covasim и использует
`cv.change_beta`.

В ответ возвращаются ровно необходимые временные ряды:

```text
cum_infections
cum_critical
cum_recoveries
cum_deaths
new_infections
new_critical
new_recoveries
new_deaths
```

Frontend уже делит их на два графика:

1. накопительные показатели;
2. новые события за день.

## Точный кэш PostgreSQL

Перед запуском Covasim backend нормализует параметры и считает SHA-256. В
идентичность расчёта входят:

```text
region_id
pop_size
pop_infected
forecast_days
beta
interventions, отсортированные по дате
start_day
rand_seed
model_version
```

`client_request_id` не входит в хэш. Если полностью такой же расчёт уже есть в
`agent_run_results`, Covasim повторно не запускается, а результат возвращается
из PostgreSQL с:

```json
{"cache_status": "hit"}
```

Похожие, но не идентичные параметры никогда не подменяются сохранённым
результатом.

## Ограничения входа

```text
pop_size:        1 000–1 000 000
pop_infected:    10–5 000 и не больше pop_size
forecast_days:   1–365
beta:            0.001–10
beta_change:     0.33–3
interventions:   не более 50, без повторяющихся дат
```

Дата интервенции должна находиться между `AGENT_START_DAY` и последним днём
выбранного периода моделирования.

## Что нужно установить

- Docker Desktop;
- GNU Make — проще всего через Git Bash, WSL или Chocolatey;
- Python 3.11 для загрузки CGAN-ассетов и API smoke-теста.

Проверка:

```bash
docker --version
docker compose version
make --version
python --version
```

На Windows через Python Launcher:

```bash
py -3.11 --version
```

## Первый запуск через Make

Распаковать архив и перейти в корень проекта:

```bash
cd ai_biolab_agent_covasim
```

При необходимости удалить **все** старые Docker-контейнеры, не удаляя volumes:

```bash
make remove-all-containers
```

Это удалит контейнеры всех Docker-проектов на компьютере. Если другие проекты
нужны, используй только:

```bash
make remove-project
```

Первый запуск:

```bash
make first-run
```

На Windows, если команда Python называется через Launcher:

```bash
make first-run PYTHON="py -3.11"
```

`make first-run` последовательно:

1. создаёт `.env`, если его нет;
2. скачивает исходный датасет и H5-модели CGAN из ветки `cgan`;
3. собирает backend с TensorFlow и Covasim;
4. запускает PostgreSQL;
5. создаёт таблицы;
6. импортирует рассчитанные CSV модели среднего поля с заменой старых записей;
7. запускает API и frontend.

Первая сборка может быть долгой: устанавливаются TensorFlow, Covasim и frontend-зависимости.

## Проверка запуска

```bash
make ps
make logs-init
make health
```

Адреса:

```text
Сайт:       http://localhost:3000
API:        http://localhost:8001
Swagger:    http://localhost:8001/docs
Health:     http://localhost:8001/api/health
PostgreSQL: localhost:15433
```

## Проверка реальной агентной модели и кэша

```bash
make agent-smoke
```

Smoke-тест делает два HTTP-запуска с одинаковыми параметрами, но разными
`client_request_id`. Первый запускает Covasim либо использует уже существующую
запись. Второй обязан вернуть точный PostgreSQL cache hit.

Прямой запуск Covasim внутри API-контейнера без HTTP:

```bash
make agent-direct
```

Просмотр сохранённых расчётов:

```bash
make agent-db-check
make agent-db-count
```

## Проверка CGAN

```bash
make cgan-smoke
```

Если ассеты были удалены:

```bash
make cgan-assets
```

Принудительно скачать заново:

```bash
make cgan-assets-force
```

## Проверка модели среднего поля

```bash
make mfg-check
```

CSV лежат в `data_to_import/`, при инициализации они импортируются в PostgreSQL.
Во время работы сайта backend читает сценарии из таблицы `mfg_scenarios`, а не
из CSV напрямую.

Переимпорт с заменой:

```bash
make mfg-reimport
```

## Обычная работа

```bash
make up
make down
make restart
make ps
make logs
make logs-api
make logs-front
```

После изменений кода:

```bash
make up-build
```

Остановка и удаление контейнеров проекта без удаления БД:

```bash
make remove-project
```

Полный сброс вместе с PostgreSQL volume:

```bash
make reset-all
```

`make reset-all` удаляет все сохранённые результаты и используется только
осознанно.
