from __future__ import annotations

from datetime import datetime

COVID_ML_DATA_FILE = "covid_ml_data_Spb.csv"
GENERATOR_MODEL_NAME = "generator_full_model.h5"
DISCRIMINATOR_MODEL_NAME = "discriminator_full_model.h5"
N_TRAJECTORIES = 100
NOISE_DIM = 100
NSAMPLE = 14
NSAMPLE_FORWARD = 5
START_TRAIN = datetime(2020, 9, 15)
SPLIT_DATE = datetime(2022, 7, 1)
SMA_WINDOW = 7
TARGETS = ["new_diagnoses_tsa"]
RAW_INDICATOR_BY_TARGET = {"new_diagnoses_tsa": "new_diagnoses"}

SELECTED_FEATURES = [
    "new_diagnoses_ema",
    "new_cases_world_minus_china",
    "new_diagnoses__new_tests_ema",
    "new_diagnoses_ema_log_3d",
    "new_diagnoses_ema_log_7d",
    "new_diagnoses_ema_log_10d",
    "new_diagnoses__new_tests_ema_log_3d",
    "new_diagnoses__new_tests_ema_log_7d",
    "new_diagnoses__new_tests_ema_log_10d",
    "hospitalized_log_3d",
    "hospitalized_log_7d",
    "hospitalized_log_10d",
    "new_deaths_ema_log_21d",
    "new_cases_world_minus_china_log_7d",
    "new_cases_world_minus_china_log_14d",
    "new_cases_world_minus_china_log_21d",
    "new_cases_world_minus_china_log_28d",
    "new_cases_world_minus_china_log_42d",
    "IgG_ema",
    "yandex_index",
]
FEATURES_TO_NORMALIZE = [
    "new_diagnoses_ema",
    "new_cases_world_minus_china",
    "new_diagnoses__new_tests_ema",
]


def target_days(nsample_forward: int = NSAMPLE_FORWARD) -> list[int]:
    return list(range(1, nsample_forward + 1))


def target_vars(
    targets: list[str] | None = None,
    sma_window: int = SMA_WINDOW,
    nsample_forward: int = NSAMPLE_FORWARD,
) -> list[list[str]]:
    model_targets = targets or TARGETS
    days = target_days(nsample_forward)
    return [
        [f"target_{target}_log_diff_sma{sma_window}_ch_{day}d" for day in days]
        for target in model_targets
    ]


def target_vars_flatten(
    targets: list[str] | None = None,
    sma_window: int = SMA_WINDOW,
    nsample_forward: int = NSAMPLE_FORWARD,
) -> list[str]:
    return [
        item
        for group in target_vars(targets, sma_window, nsample_forward)
        for item in group
    ]
