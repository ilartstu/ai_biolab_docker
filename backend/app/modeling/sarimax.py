"""SARIMAX-функции. Адаптировано из ORIGINAL/server.app.covid19-modeling-main/SARIMAX.py.

Используется внутри SEIR (future_extr для экстраполяции new_tests),
а в будущем — для отдельного forecasts-роутера.
"""
from datetime import timedelta
from itertools import product
from typing import Iterable

import numpy as np
import pandas as pd
import scipy.stats as scs
import statsmodels.api as sm


def invboxcox(series, lmb):
    """Обратное преобразование Бокса-Кокса."""
    if lmb == 0:
        return np.exp(series)
    return np.exp(np.log(lmb * series + 1) / lmb)


def best_SARIMAX(series: pd.Series, d: int, D: int, n_past: int,
                 parameters_list: list | None = None,
                 args: dict | None = None):
    """Подобрать SARIMAX с минимальным AIC.

    Args:
        series: временной ряд
        d: порядок разности
        D: порядок сезонной разности
        n_past: последние n_past точек откладываются на тест
        parameters_list: [p, q, P, Q] для конкретной модели, иначе перебор
        args: доп. аргументы для sm.tsa.statespace.SARIMAX

    Returns:
        (best_model, best_params, best_aic)
    """
    if args is None:
        args = {}

    if parameters_list is None:
        ps = range(0, 7)
        qs = range(0, 7)
        Ps = [0, 1]
        Qs = [0, 1]
        param_grid: Iterable = list(product(ps, qs, Ps, Qs))
    else:
        param_grid = [parameters_list]

    best_aic = float("inf")
    best_model = None
    best_params = None

    for param in param_grid:
        try:
            model = sm.tsa.statespace.SARIMAX(
                series[:-n_past],
                order=(param[0], d, param[1]),
                seasonal_order=(param[2], D, param[3], 7),
                **args,
            ).fit(disp=-1)
        except Exception:
            continue
        if model.aic < best_aic:
            best_model = model
            best_params = param
            best_aic = model.aic

    if best_model is None:
        raise RuntimeError("best_SARIMAX: ни одна модель не сошлась")
    return best_model, best_params, best_aic


def get_predict(series: pd.Series, model, n_past: int, n_future: int, lmb):
    """Прогноз вперёд от модели SARIMAX, возвращает в исходном масштабе."""
    result = invboxcox(model.fittedvalues, lmb)
    forecast = invboxcox(
        model.predict(start=series.index.size - n_past,
                      end=series.index.size + n_future),
        lmb,
    )
    forecast.index = [series.index[-n_past] + timedelta(days=i)
                      for i in range(n_past + n_future + 1)]
    return pd.concat([result, forecast])


def future_extr_new_tests(df: pd.DataFrame, n_future: int, n_past: int = 2) -> pd.Series:
    """Экстраполировать new_tests на n_future дней вперёд через SARIMAX.

    Адаптация future_extr из functions_total.py — принимает DataFrame напрямую
    (вместо чтения CSV), возвращает только forecast-часть для последующего concat.
    """
    series = df["new_tests"].dropna()

    # Защита: SARIMAX нужно минимум ~14 точек (sezonal_order=7) + n_past.
    # Если данных мало (или все NaN ушли в dropna) — fallback на last-value extrapolation.
    if len(series) < 20:
        last_val = float(df["new_tests"].iloc[-1] if not df["new_tests"].empty else 0)
        return pd.Series([last_val] * (n_future + 1))

    date = len(series.index)

    lmb = None
    if series.min() <= 0:
        new_tests_box, lmb = scs.boxcox(series + abs(series.min()) + 1, lmbda=lmb)
    else:
        new_tests_box, lmb = scs.boxcox(series, lmbda=lmb)
    new_tests_box = pd.Series(new_tests_box, index=series.index)

    d, D = 1, 1
    parameters_list = [1, 2, 0, 1]
    model, _, _ = best_SARIMAX(new_tests_box, d, D, n_past, parameters_list)
    forecast_full = get_predict(series, model, n_past, n_future, lmb)
    return forecast_full[date:]
