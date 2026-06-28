# CGAN runtime assets

This directory contains the runtime assets copied from `CODE/covid19.cgan-main`
for the `ml-forecast` CGAN integration.

- `covid_ml_data_Spb.csv` is the prepared Saint Petersburg feature dataset used
  by the original inference script.
- `model/generator_full_model.h5` is loaded by the FastAPI backend for real
  CGAN inference.
- `model/discriminator_full_model.h5` is kept with the transferred model
  package for traceability, although online forecast inference uses only the
  generator.

The original source project remains unchanged and can be used as a reference.
