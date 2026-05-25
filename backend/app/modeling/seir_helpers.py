"""SEIR-помощники. Адаптировано из ORIGINAL/server.app.covid19-modeling-main/functions_total.py.

Из оригинала ВЫРЕЗАНО:
- matplotlib-плоттинг (plot_smoothed_results, plot_reff, plot_prop_diagnosed, plot_interventions, plot_prognose)
- file-IO (msim.to_json(...) → возвращаем dict)
- bounds_of_per, prognose_check, scenarios — относится к калибровке, отложено

ОСТАВЛЕНО: smooth, smooth_pd, past_extr, run_model, run_msim_extract.
"""
from typing import Any

import covasim as cv
import numpy as np
import pandas as pd
import scipy as sp


STATS_TO_EXTRACT = [
    "new_diagnoses",
    "cum_diagnoses",
    "new_recoveries",
    "cum_recoveries",
    "new_deaths",
    "cum_deaths",
    "new_critical",
    "n_critical",
    "new_infections",
    "cum_infections",
]


def smooth(y, sigma: int = 3):
    """Гауссово сглаживание ряда (sigma=3 как в оригинале)."""
    return sp.ndimage.gaussian_filter1d(y, sigma=sigma)


def smooth_pd(df: pd.DataFrame) -> pd.DataFrame:
    for col in df.columns:
        df[col] = smooth(df[col])
    return df


def past_extr(df: pd.DataFrame, series: pd.Series, n: int, C: float = 1.1) -> pd.Series:
    """Заполнить NaN в начале ряда (для new_tests до момента когда стало известно)."""
    back = series[::-1]
    back.index = np.arange(back.shape[0])
    for i in range(back.isna().sum()):
        back = back.fillna(back.rolling(n).apply(lambda x: x.mean() * C ** -i).shift())
    back.index = df.index[::-1]
    return round(back)[::-1]


def run_model(
    p: list[dict],
    location: str,
    pop_location: int,
    start_day,
    end_day,
    b_days: list[int],
    b_changes: list[float],
    data: pd.DataFrame,
    school_days: list[str] | None = None,
    school_changes: list[float] | None = None,
):
    """Построить Covasim Sim с калибровочными параметрами + интервенциями.

    Адаптация run_model из functions_total.py. Из оригинала убрано:
    - analyzers (не используется в prognose)
    - sim.run() + sim.plot() в конце — это делает run_msim_extract
    """
    pop_size = 100e3
    pars = dict(
        pop_size=pop_size,
        pop_scale=pop_location / pop_size,
        pop_infected=p[0]["pop_infected"],
        pop_type="hybrid",
        beta=p[0]["beta"],
        start_day=start_day,
        end_day=end_day,
        location=location,
        verbose=0,
        rescale=True,
    )
    sim = cv.Sim(pars, datafile=data, use_waning=True)

    interventions = [
        cv.change_beta(days=b_days, changes=b_changes),
        cv.test_num(daily_tests=sim.data["new_tests"].dropna(), symp_test=p[0]["symp_test"]),
    ]
    if school_days is not None and school_changes is not None:
        interventions.append(cv.clip_edges(days=school_days, changes=school_changes, layers="s"))

    sim.update_pars(interventions=interventions)
    return sim


def run_msim_extract(sim, n_runs: int = 3, stats: list[str] | None = None) -> dict[str, Any]:
    """Запустить MultiSim и достать результаты как dict.

    Заменяет run_msim_conf из functions_total.py — вместо msim.to_json(file)
    возвращает структуру, готовую к сохранению в JSON-поле БД или передаче в API.
    """
    if stats is None:
        stats = STATS_TO_EXTRACT

    msim = cv.MultiSim(sim, n_runs=n_runs, verbose=0)
    msim.run()
    msim.reduce()

    dates = [str(d) for d in msim.results["date"]]

    series: dict[str, dict[str, list]] = {}
    for stat in stats:
        if stat not in msim.results:
            continue
        r = msim.results[stat]
        entry: dict[str, list] = {"values": np.asarray(r.values).tolist()}
        if hasattr(r, "low") and r.low is not None:
            entry["low"] = np.asarray(r.low).tolist()
        if hasattr(r, "high") and r.high is not None:
            entry["high"] = np.asarray(r.high).tolist()
        series[stat] = entry

    return {
        "dates": dates,
        "series": series,
        "n_runs": n_runs,
    }
