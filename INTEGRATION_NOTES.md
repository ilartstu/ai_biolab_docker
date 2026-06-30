# Интеграция агентной модели

## Новые компоненты

```text
backend/app/modeling/agent/covasim_runner.py
backend/scripts/run_agent_direct.py
backend/scripts/smoke_agent_api.py
agent_run_results в backend/db/schema.sql
```

## Путь выполнения

```text
frontend
  -> POST /api/models/agent/runs
  -> validation
  -> canonical request + SHA-256
  -> SELECT agent_run_results by request_hash
       -> hit: result_json из PostgreSQL
       -> miss: Covasim -> 8 рядов -> INSERT agent_run_results
  -> polling status
  -> GET results
  -> два Highcharts-графика
```

## Результаты

Накопительные:

```text
cum_infections, cum_critical, cum_recoveries, cum_deaths
```

Ежедневные:

```text
new_infections, new_critical, new_recoveries, new_deaths
```

## Совместимость

- существующие агентные HTTP-ручки не менялись;
- frontend-контракт не менялся;
- MFG продолжает читать импортированные сценарии из PostgreSQL;
- CGAN продолжает выполнять реальный TensorFlow inference;
- LSTM/SEIR-HCD заглушки сохранены как предусмотрено текущим этапом.
