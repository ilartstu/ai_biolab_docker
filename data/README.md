# /data

Сюда копируются исходные CSV/JSON из старого репозитория `server.app.covid19-modeling-main`
(например `Novosibirsk.csv`, `params_08_04_2022.json`, `msim_res.json`).

Монтируется в контейнер `api` как `/data:ro` — Python-модули в `app/modeling/`
читают эти файлы как fallback, пока данные не залиты в PostgreSQL.

Заливка в БД делается через сидер (см. `backend/app/scripts/seed_regions.py`,
будет добавлен позднее) или через `psql \COPY`.
