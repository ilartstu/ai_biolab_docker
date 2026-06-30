from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime
from typing import Any

import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from ta.trend import SMAIndicator


class DataProcessing:
    @staticmethod
    def fill_empty_values(data, columns):
        for column in columns:
            if data[column].isnull().values.any():
                data[column] = data[column].interpolate(method="polynomial", order=1)
                data[column] = data[column].ffill()
                data[column] = data[column].bfill()
        return data


@dataclass
class CGANPreparedContext:
    data: pd.DataFrame
    ml_data: pd.DataFrame
    ml_data_transformed: pd.DataFrame
    residual_features: list[str]
    context_date: pd.Timestamp
    context: np.ndarray
    target_vars: list[list[str]]
    target_vars_flatten: list[str]
    scaler: MinMaxScaler


class SpbDataProcessing(DataProcessing):
    """Preprocessing ported from the original Saint Petersburg CGAN project."""

    mm_scaler = MinMaxScaler()
    data = None
    ml_data = None
    ml_data_transformed = None
    residual_features = None

    @staticmethod
    def _prepare_rnn_dataset(
        X_residual_features,
        X_features_to_normalize,
        basis_Y,
        features_to_normalize,
        look_back,
    ):
        datares = []
        for start in range(X_residual_features.shape[0] - look_back + 1):
            res_part = X_residual_features[start:start + look_back]
            if features_to_normalize != []:
                norm_part = X_features_to_normalize[start:start + look_back]
                norm_part = pd.DataFrame(
                    data=MinMaxScaler().fit_transform(norm_part),
                    index=norm_part.index,
                    columns=norm_part.columns,
                )
                res_part = res_part.join(norm_part)
            datares.append(res_part.values)
        X = np.atleast_3d(np.array(datares))
        X = pd.Series(data=list(X), index=X_residual_features.index[look_back - 1:])
        y = basis_Y[look_back - 1:]
        y = pd.Series(data=list(y.values), index=y.index)
        return X, y

    @staticmethod
    def prepare_spb_rnn_dataset(
        covid_ml_data_file,
        selected_features,
        features_to_normalize,
        target_vars,
        target_vars_flatten,
        start_train,
        nsample,
        nsample_forward,
    ):
        data = pd.read_csv(
            covid_ml_data_file,
            index_col="Date",
            parse_dates=True,
            na_values=["nan"],
        )
        residual_features = [
            item for item in selected_features if item not in features_to_normalize
        ]
        ml_data = data[selected_features + target_vars_flatten]
        ml_data = ml_data.loc[start_train:]
        ml_data = ml_data[:-nsample_forward]
        ml_data_transformed = pd.DataFrame(
            data=SpbDataProcessing.mm_scaler.fit_transform(
                ml_data[residual_features + target_vars_flatten]
            ),
            index=ml_data.index,
            columns=ml_data[residual_features + target_vars_flatten].columns,
        )
        ml_data_transformed = ml_data_transformed.join(ml_data[features_to_normalize])
        X, y = SpbDataProcessing._prepare_rnn_dataset(
            ml_data_transformed[residual_features],
            ml_data_transformed[features_to_normalize],
            ml_data_transformed[target_vars[0]],
            features_to_normalize,
            nsample,
        )
        SpbDataProcessing.data = data
        SpbDataProcessing.ml_data_transformed = ml_data_transformed
        SpbDataProcessing.residual_features = residual_features
        SpbDataProcessing.ml_data = ml_data
        return X, y

    @staticmethod
    def prepare_context_window(
        covid_ml_data_file: str,
        selected_features: list[str],
        features_to_normalize: list[str],
        target_vars: list[list[str]],
        target_vars_flatten: list[str],
        start_train: datetime,
        nsample: int,
        nsample_forward: int,
        context_date: str | date,
    ) -> CGANPreparedContext:
        data = pd.read_csv(
            covid_ml_data_file,
            index_col="Date",
            parse_dates=True,
            na_values=["nan"],
        ).sort_index()
        context_ts = pd.Timestamp(context_date)
        if context_ts not in data.index:
            min_date = data.index.min().date().isoformat()
            max_date = data.index.max().date().isoformat()
            raise ValueError(
                "CGAN context_date must be present in prepared SPb data "
                f"({min_date}..{max_date})."
            )
        residual_features = [
            item for item in selected_features if item not in features_to_normalize
        ]
        fit_columns = residual_features + target_vars_flatten
        ml_data = data[selected_features + target_vars_flatten].loc[start_train:]
        scaler_basis = ml_data.iloc[:-nsample_forward][fit_columns]
        scaler = MinMaxScaler()
        scaler.fit(scaler_basis)
        transformed_fit_columns = pd.DataFrame(
            data=scaler.transform(ml_data[fit_columns]),
            index=ml_data.index,
            columns=fit_columns,
        )
        ml_data_transformed = transformed_fit_columns.join(ml_data[features_to_normalize])
        context_basis = ml_data_transformed.loc[:context_ts]
        if context_basis.shape[0] < nsample:
            raise ValueError(
                f"CGAN needs at least {nsample} context days from "
                f"{start_train.date().isoformat()}."
            )
        res_part = context_basis[residual_features].tail(nsample)
        if features_to_normalize != []:
            norm_part = ml_data[features_to_normalize].loc[res_part.index]
            norm_part = pd.DataFrame(
                data=MinMaxScaler().fit_transform(norm_part),
                index=norm_part.index,
                columns=norm_part.columns,
            )
            res_part = res_part.join(norm_part)
        if res_part.isnull().values.any():
            missing = res_part.columns[res_part.isnull().any()].tolist()
            raise ValueError(f"CGAN context window contains NaN values: {missing}")
        SpbDataProcessing.data = data
        SpbDataProcessing.ml_data_transformed = ml_data_transformed
        SpbDataProcessing.residual_features = residual_features
        SpbDataProcessing.ml_data = ml_data
        SpbDataProcessing.mm_scaler = scaler
        return CGANPreparedContext(
            data=data,
            ml_data=ml_data,
            ml_data_transformed=ml_data_transformed,
            residual_features=residual_features,
            context_date=context_ts,
            context=np.atleast_3d(np.array([res_part.values])),
            target_vars=target_vars,
            target_vars_flatten=target_vars_flatten,
            scaler=scaler,
        )

    @staticmethod
    def pred_inverse_transform(targets, target_vars, all_y, all_y_predicted, NTraj):
        y_pred_transformed = [None] * len(targets)
        for i in range(len(targets)):
            y_pred_transformed[i] = {}
            ml_copy = (
                SpbDataProcessing.ml_data_transformed[
                    SpbDataProcessing.residual_features
                ].loc[all_y[i].index[0]:all_y[i].index[-1]]
            )
            for j in range(len(targets)):
                ml_copy[target_vars[j]] = all_y[j].values
            y_pred_transformed[i]["true"] = pd.DataFrame(
                data=SpbDataProcessing.mm_scaler.inverse_transform(ml_copy),
                index=ml_copy.index,
                columns=ml_copy.columns,
            )[target_vars[i]]
            y_pred_transformed[i]["pred"] = []
            for ntraj in range(NTraj):
                ml_copy = (
                    SpbDataProcessing.ml_data_transformed[
                        SpbDataProcessing.residual_features
                    ].loc[all_y[i].index[0]:all_y[i].index[-1]]
                )
                for j in range(len(targets)):
                    ml_copy[target_vars[j]] = all_y_predicted[j][ntraj]
                inv_df = pd.DataFrame(
                    data=SpbDataProcessing.mm_scaler.inverse_transform(ml_copy),
                    index=ml_copy.index,
                    columns=ml_copy.columns,
                )[target_vars[i]]
                y_pred_transformed[i]["pred"].append(inv_df)
        return y_pred_transformed

    @staticmethod
    def transform_from_stationary(
        y_pred_transformed,
        targets,
        targets_days,
        sma_window,
        nsample_forward,
        NTraj,
    ):
        forecasts = [None] * len(targets)
        for i in range(len(targets)):
            forecasts[i] = []
            for ntraj in range(NTraj):
                source = y_pred_transformed[i]["pred"][ntraj]
                frc = pd.DataFrame(
                    data=np.zeros([source.shape[0], source.shape[1]]),
                    index=source.index,
                    columns=[f"{targets[i]}_{j}d" for j in targets_days],
                )
                target_sma = SMAIndicator(
                    close=SpbDataProcessing.data[targets[i]],
                    window=sma_window,
                ).sma_indicator()
                for idx in range(source.shape[0]):
                    for target_var in range(nsample_forward):
                        frc.iloc[idx, target_var] = np.exp(
                            source.iloc[idx, target_var]
                            + np.log(target_sma.loc[source.index[idx]] + 1)
                        ) - 1
                forecasts[i].append(frc.values)
        return forecasts

    @staticmethod
    def inverse_one_context_prediction(
        prepared: CGANPreparedContext,
        predicted_scaled: np.ndarray,
        targets: list[str],
        targets_days: list[int],
        sma_window: int,
    ) -> np.ndarray:
        target_var_names = prepared.target_vars[0]
        base_row = prepared.ml_data_transformed[prepared.residual_features].loc[
            [prepared.context_date]
        ]
        rows: list[dict[str, Any]] = []
        for trajectory in predicted_scaled:
            row = base_row.iloc[0].to_dict()
            for column, value in zip(target_var_names, trajectory, strict=True):
                row[column] = float(value)
            rows.append(row)
        inverse_basis = pd.DataFrame(
            rows,
            columns=prepared.residual_features + target_var_names,
        )
        inverse_target = pd.DataFrame(
            data=prepared.scaler.inverse_transform(inverse_basis),
            columns=inverse_basis.columns,
        )[target_var_names]
        target_sma = SMAIndicator(
            close=prepared.data[targets[0]],
            window=sma_window,
        ).sma_indicator()
        sma_value = target_sma.loc[prepared.context_date]
        forecast_values = np.zeros(
            (predicted_scaled.shape[0], len(targets_days))
        )
        for row_idx in range(inverse_target.shape[0]):
            for target_idx, _day in enumerate(targets_days):
                forecast_values[row_idx, target_idx] = np.exp(
                    inverse_target.iloc[row_idx, target_idx]
                    + np.log(sma_value + 1)
                ) - 1
        return forecast_values
