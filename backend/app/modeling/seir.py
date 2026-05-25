"""Точка входа SEIR-моделирования.

Адаптировано из ORIGINAL/server.app.covid19-modeling-main/dlya_kati.py:
вместо чтения sys.argv + CSV из URL + записи JSON-файла — принимает чистые
данные (timeseries из БД + параметры из БД) и возвращает результат как dict.

Зависит только от: app.modeling.sarimax, app.modeling.seir_helpers, covasim,
pandas, numpy. НЕ импортирует FastAPI/SQLAlchemy.
"""
from datetime import date as date_t, timedelta
from typing import Any

import covasim as cv
import pandas as pd

from app.modeling.sarimax import future_extr_new_tests
from app.modeling.seir_helpers import (
    past_extr,
    run_model,
    run_msim_extract,
    smooth,
    smooth_pd,
)


# Школьные даты (закрытие/открытие) — оставляем как в оригинале, потом вынесем в БД
SCHOOL_DAYS = ["2020-03-18", "2020-09-01", "2020-10-24", "2021-01-11"]
SCHOOL_CHANGES = [0, 1, 0, 0.5]


def _timeseries_rows_to_df(rows: list[dict]) -> pd.DataFrame:
    """Привести строки из таблицы timeseries к DataFrame с индексом по дате.

    Ожидает: каждая строка — dict с ключом 'date' (date или ISO-строка) +
    числовыми полями (new_diagnoses, new_tests, etc.).
    """
    df = pd.DataFrame(rows)
    if df.empty:
        raise ValueError("Нет временного ряда для региона")
    df["date"] = pd.to_datetime(df["date"])
    df = df.set_index("date").sort_index()
    # NULL'ы из БД приходят как None → pandas делает dtype=object, на котором
    # scipy.ndimage.gaussian_filter1d падает с "array type dtype('O') not supported".
    # pd.to_numeric с errors='coerce' приводит None → NaN и меняет dtype на float.
    for col in df.columns:
        df[col] = pd.to_numeric(df[col], errors="coerce")
    return df


def _params_to_beta_lists(params: list[dict]) -> tuple[list[int], list[float]]:
    """Из params_NN_NN_YYYY.json вытащить b_days и b_changes (как в dlya_kati)."""
    b_days, b_changes = [], []
    for i in range(len(params)):
        b_days.append(int(params[i][f"beta_day_{i + 1}"]))
        b_changes.append(float(params[i][f"beta_change_{i + 1}"]))
    return b_days, b_changes


def run_seir(
    region_slug: str,
    location: str,
    population: int,
    n_future_days: int,
    initial_infected: int,  # сохраняется для метаданных; в оригинале тоже не использовался моделью
    timeseries_rows: list[dict],
    seir_params: list[dict],
) -> dict[str, Any]:
    """Запустить SEIR-прогноз через Covasim.

    Зеркало dlya_kati.py, но без sys.argv/IO. Вход — чистые данные, выход — dict.

    Returns:
        {
            "region_slug": ...,
            "location": ...,
            "start_day": "2020-03-12",
            "end_day": "2022-06-30",
            "n_future_days": 45,
            "dates": [...],                # ISO-даты прогноза
            "series": {
                "new_diagnoses": {"values": [...], "low": [...], "high": [...]},
                ...
            },
            "n_runs": 3,
        }
    """
    # 1) Превратить ряды БД в DataFrame
    df_raw = _timeseries_rows_to_df(timeseries_rows)

    # Covasim ждёт колонки new_diagnoses/new_deaths/new_tests/etc. в df.
    # Оставим только колонки, которые имеют смысл (с числами).
    keep_cols = [c for c in ["new_diagnoses", "cum_diagnoses", "new_recoveries",
                              "cum_recoveries", "new_deaths", "cum_deaths",
                              "new_tests", "cum_tests"] if c in df_raw.columns]
    df1 = df_raw[keep_cols].copy()

    # 2) Заполнить NaN в new_tests (past_extr — для прошлого), сгладить
    if "new_tests" in df1.columns:
        na_count = int(df1["new_tests"].isna().sum())
        if na_count > 0:
            df1["new_tests"] = past_extr(df1, df1["new_tests"], n=na_count)
        # past_extr — best-effort: если NaN слишком много для rolling-окна,
        # часть останется. Подстраховка: bfill (взять первое известное значение
        # для всех ранних NaN), затем 0 если совсем нет данных.
        df1["new_tests"] = df1["new_tests"].bfill().fillna(0)

    # scipy.ndimage.gaussian_filter1d не работает с NaN — отравляет всю колонку.
    # Зануляем оставшиеся NaN в КАЖДОЙ числовой колонке перед сглаживанием.
    df1 = df1.fillna(0)
    df1 = smooth_pd(df1)
    df1["date"] = df1.index

    # 3) Границы моделирования
    start_day = cv.date(df1.index[0].to_pydatetime().date())
    last_day = cv.date(df1.index[-1].to_pydatetime().date())

    # 4) Калибровочные параметры → списки b_days, b_changes
    b_days, b_changes = _params_to_beta_lists(seir_params)

    # 5) Прогноз new_tests вперёд на n_future_days через SARIMAX
    if "new_tests" in df1.columns:
        forecast = future_extr_new_tests(df1, n_future=n_future_days)
        forecast = pd.Series(
            smooth(forecast),
            index=[df1.index[-1] + timedelta(days=i) for i in range(1, n_future_days + 2)],
        )
        forecast.name = "new_tests"
        forecast_df = forecast.to_frame()
        forecast_data = pd.concat([df1, forecast_df])
    else:
        forecast_data = df1.copy()
    forecast_data["date"] = forecast_data.index

    # 6) Построить Covasim Sim
    sim = run_model(
        p=seir_params,
        location=location,
        pop_location=population,
        start_day=start_day,
        end_day=cv.date(forecast_data.index[-1]),
        b_days=b_days,
        b_changes=b_changes,
        data=forecast_data,
        school_days=SCHOOL_DAYS,
        school_changes=SCHOOL_CHANGES,
    )

    # 7) Запустить MultiSim (n_runs=3 как в оригинале), извлечь результаты
    extracted = run_msim_extract(sim, n_runs=3)

    return {
        "region_slug": region_slug,
        "location": location,
        "population": population,
        "initial_infected": initial_infected,
        "n_future_days": n_future_days,
        "start_day": str(start_day),
        "end_day": str(forecast_data.index[-1].date()),
        **extracted,
    }
