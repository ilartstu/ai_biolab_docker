from __future__ import annotations

from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
from typing import Any, Callable

import numpy as np
import pandas as pd

from app.modeling.cgan import constants as C
from app.modeling.cgan.data_processing import SpbDataProcessing

ProgressCallback = Callable[[float, str], None]


class CGANInputError(ValueError):
    pass


@dataclass
class CGANForecaster:
    data_dir: Path
    output_dir: Path
    n_trajectories: int = C.N_TRAJECTORIES

    _generator: Any = None

    def _data_file(self) -> Path:
        return self.data_dir / C.COVID_ML_DATA_FILE

    def _generator_file(self) -> Path:
        return self.data_dir / "model" / C.GENERATOR_MODEL_NAME

    def _load_generator(self):
        if self._generator is not None:
            return self._generator

        import tensorflow as tf
        from tensorflow.keras.models import load_model

        gpu_devices = tf.config.experimental.list_physical_devices("GPU")
        if gpu_devices:
            tf.config.experimental.set_memory_growth(gpu_devices[0], True)

        self._generator = load_model(self._generator_file(), compile=False)
        return self._generator

    @staticmethod
    def _normalize_noise(noise):
        import tensorflow as tf

        return tf.divide(
            tf.subtract(noise, tf.reduce_min(noise)),
            tf.subtract(tf.reduce_max(noise), tf.reduce_min(noise)),
        )

    @staticmethod
    def _as_float(value: Any) -> float | None:
        if value is None or pd.isna(value):
            return None
        return float(value)

    def _validate_request(self, region_id: str, indicator_id: str, horizon_days: int, context_days: int) -> None:
        if region_id != "spb":
            raise CGANInputError("CGAN is currently trained only for region_id='spb' (Saint Petersburg).")
        if indicator_id != "new_diagnoses":
            raise CGANInputError("CGAN currently supports only indicator_id='new_diagnoses'.")
        if horizon_days != C.NSAMPLE_FORWARD:
            raise CGANInputError(f"CGAN horizon_days must be {C.NSAMPLE_FORWARD}.")
        if context_days != C.NSAMPLE:
            raise CGANInputError(f"CGAN context_days must be {C.NSAMPLE}.")

    def predict(
        self,
        *,
        context_date: str | date,
        region_id: str,
        indicator_id: str,
        horizon_days: int = C.NSAMPLE_FORWARD,
        context_days: int = C.NSAMPLE,
        run_id: str | None = None,
        n_trajectories: int | None = None,
        progress_callback: ProgressCallback | None = None,
    ) -> dict[str, Any]:
        self._validate_request(region_id, indicator_id, horizon_days, context_days)
        ntraj = int(n_trajectories or self.n_trajectories)

        if progress_callback:
            progress_callback(18, "CGAN: подготовка 14-дневного контекста.")

        targets_days = C.target_days(horizon_days)
        target_vars = C.target_vars(C.TARGETS, C.SMA_WINDOW, horizon_days)
        target_vars_flatten = C.target_vars_flatten(C.TARGETS, C.SMA_WINDOW, horizon_days)

        prepared = SpbDataProcessing.prepare_context_window(
            str(self._data_file()),
            C.SELECTED_FEATURES,
            C.FEATURES_TO_NORMALIZE,
            target_vars,
            target_vars_flatten,
            C.START_TRAIN,
            context_days,
            horizon_days,
            context_date,
        )

        if progress_callback:
            progress_callback(28, "CGAN: загрузка generator_full_model.h5.")

        generator = self._load_generator()

        if progress_callback:
            progress_callback(36, f"CGAN: расчёт {ntraj} траекторий.")

        import tensorflow as tf

        predicted: list[np.ndarray] = []
        progress_step = max(1, ntraj // 10)
        for trajectory_idx in range(ntraj):
            noise = self._normalize_noise(tf.random.normal([1, C.NOISE_DIM]))
            y_predicted = generator.predict([prepared.context, noise], verbose=0)
            predicted.append(y_predicted[0])

            if progress_callback and ((trajectory_idx + 1) % progress_step == 0 or trajectory_idx + 1 == ntraj):
                fraction = (trajectory_idx + 1) / ntraj
                progress_callback(36 + fraction * 39, f"CGAN: готово {trajectory_idx + 1} из {ntraj} траекторий.")

        predicted_scaled = np.array(predicted)

        if progress_callback:
            progress_callback(78, "CGAN: обратное преобразование прогноза.")

        forecast_values = SpbDataProcessing.inverse_one_context_prediction(
            prepared,
            predicted_scaled,
            C.TARGETS,
            targets_days,
            C.SMA_WINDOW,
        )

        mean_values = np.mean(forecast_values, axis=0)
        std_values = np.std(forecast_values, axis=0)

        raw_indicator = C.RAW_INDICATOR_BY_TARGET[C.TARGETS[0]]
        forecast_rows = []
        for idx, horizon in enumerate(targets_days):
            forecast_date = prepared.context_date.date() + timedelta(days=horizon)
            actual = None
            actual_raw = None
            if pd.Timestamp(forecast_date) in prepared.data.index:
                actual = self._as_float(prepared.data.loc[pd.Timestamp(forecast_date), C.TARGETS[0]])
                actual_raw = self._as_float(prepared.data.loc[pd.Timestamp(forecast_date), raw_indicator])

            mean = float(mean_values[idx])
            std = float(std_values[idx])
            forecast_rows.append({
                "horizon": horizon,
                "date": forecast_date.isoformat(),
                "mean": mean,
                "std": std,
                "low_3sigma": mean - 3 * std,
                "high_3sigma": mean + 3 * std,
                "actual": actual,
                "actual_raw": actual_raw,
            })

        history_slice = prepared.data.loc[:prepared.context_date].tail(context_days)
        history_rows = [
            {
                "date": idx.date().isoformat(),
                "value": self._as_float(row[C.TARGETS[0]]),
                "actual_raw": self._as_float(row[raw_indicator]),
            }
            for idx, row in history_slice.iterrows()
        ]

        artifact = self._write_forecast_csv(run_id, prepared.context_date.date(), history_rows, forecast_rows)

        return {
            "model_id": "cgan",
            "model_name": "CGAN",
            "history": history_rows,
            "forecast": forecast_rows,
            "artifact": artifact,
            "diagnostics": {
                "source": "ported_from_covid19.cgan-main",
                "data_file": str(self._data_file()),
                "generator_model": str(self._generator_file()),
                "target": C.TARGETS[0],
                "raw_indicator": raw_indicator,
                "context_date": prepared.context_date.date().isoformat(),
                "context_days": context_days,
                "horizon_days": horizon_days,
                "n_trajectories": ntraj,
                "input_shape": list(prepared.context.shape),
            },
        }

    def _write_forecast_csv(
        self,
        run_id: str | None,
        context_date: date,
        history_rows: list[dict[str, Any]],
        forecast_rows: list[dict[str, Any]],
    ) -> dict[str, Any]:
        self.output_dir.mkdir(parents=True, exist_ok=True)
        stem = run_id or f"cgan_{context_date.isoformat()}"
        path = self.output_dir / f"{stem}_forecast.csv"

        rows = []
        for row in history_rows:
            rows.append({
                "row_type": "history",
                "date": row["date"],
                "horizon": None,
                "value": row["value"],
                "mean": None,
                "std": None,
                "low_3sigma": None,
                "high_3sigma": None,
                "actual": row["value"],
                "actual_raw": row.get("actual_raw"),
            })
        for row in forecast_rows:
            rows.append({
                "row_type": "forecast",
                "date": row["date"],
                "horizon": row["horizon"],
                "value": None,
                "mean": row["mean"],
                "std": row["std"],
                "low_3sigma": row["low_3sigma"],
                "high_3sigma": row["high_3sigma"],
                "actual": row.get("actual"),
                "actual_raw": row.get("actual_raw"),
            })

        pd.DataFrame(rows).to_csv(path, index=False)
        return {
            "type": "text/csv",
            "path": str(path),
            "rows": len(rows),
        }
