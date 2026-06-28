# Backend

Это актуальный FastAPI orchestration backend проекта. Он используется корневым `docker-compose.yml` и работает с PostgreSQL.

Запускать весь проект рекомендуется из корня:

```powershell
docker compose up -d --build
```

Скрипты:

```text
scripts/init_db.py
scripts/import_mock_data_to_db.py
scripts/import_mfg_scenarios_to_db.py
```

API-контракты не зависят от старого frontend. Новый раздел frontend обращается к этим ручкам напрямую.
