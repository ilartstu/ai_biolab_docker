# Modeling

Слой не зависит от FastAPI: чистые функции / классы, которые принимают параметры
(Pydantic dataclasses, dict) и возвращают результаты.

**Что сюда переедет из старого репозитория** (`CODE/ORIGINAL/server.app.covid19-modeling-main/`):

| Старый файл | Назначение | Куда здесь |
|---|---|---|
| `dlya_kati.py` | Запуск Covasim SEIR-симуляции (region, population, n_future, init_inf) | `seir.py::run_seir` |
| `calibration_total.py` | Калибровка SEIR-модели через Optuna | `seir.py::calibrate` |
| `functions_total.py` | Вспомогательные функции (графики, агрегаты) | разнести по hp-модулям |
| `SARIMAX.py` | SARIMAX-прогнозы | `sarimax.py::forecast` |
| `func.py` | Утилиты для SARIMAX (Бокс-Кокс и т.д.) | `sarimax.py` приватные |
| `convertCOVID19_f.py` | Чтение `COVID19_forecasts.p` и конвертация в CSV | `sarimax.py::load_pickle_forecasts` |
| `params_08_04_2022.json` | Параметры калибровки SEIR | загрузить в БД (table `seir_params`) |
| `msim_res.json` (3.5 MB) | Предрасчитанные результаты MultiSim | seed скрипт → таблица |

Зависимости (когда будут переноситься): `covasim`, `optuna`, `sciris`, `pandas`,
`numpy`, `statsmodels`, `matplotlib`. Добавить в `requirements.txt`.
