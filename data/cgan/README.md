# CGAN runtime assets

The real CGAN inference uses the prepared Saint Petersburg feature dataset and
`generator_full_model.h5` from the repository branch `cgan`.

The large runtime files are downloaded by:

```bash
make cgan-assets
```

The discriminator is retained for traceability; online inference uses only the generator.
