import {useCallback, useEffect, useRef, useState} from 'react';
import {
  apiErrorMessage,
  createIdempotencyKey,
  isTerminalRunStatus,
  modelingApi,
} from '../api/modelingApi';

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export function useAsyncModelRun({basePath, storageKey, idempotencyPrefix}) {
  const [run, setRun] = useState(null);
  const [status, setStatus] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const generationRef = useRef(0);
  const mountedRef = useRef(true);

  const clearStoredRun = useCallback(() => {
    if (storageKey) {
      sessionStorage.removeItem(storageKey);
    }
  }, [storageKey]);

  const monitorRun = useCallback(async (runInfo, generation) => {
    let currentStatus = runInfo.status;

    while (mountedRef.current && generation === generationRef.current) {
      if (currentStatus === 'completed') {
        try {
          const resultResponse = await modelingApi.get(runInfo.results_url);
          if (mountedRef.current && generation === generationRef.current) {
            setResult(resultResponse.data);
            setStatus((previous) => ({...previous, status: 'completed', progress: 100}));
            clearStoredRun();
          }
        } catch (requestError) {
          if (mountedRef.current && generation === generationRef.current) {
            setError(apiErrorMessage(requestError, 'Результат готов, но его не удалось загрузить'));
          }
        }
        return;
      }

      if (isTerminalRunStatus(currentStatus)) {
        clearStoredRun();
        return;
      }

      await sleep(1000);
      if (!mountedRef.current || generation !== generationRef.current) {
        return;
      }

      try {
        const statusResponse = await modelingApi.get(runInfo.status_url);
        currentStatus = statusResponse.data.status;
        setStatus(statusResponse.data);

        if (currentStatus === 'failed') {
          setError(
            statusResponse.data?.error?.message ||
            statusResponse.data?.message ||
            'Расчёт завершился с ошибкой'
          );
        }
      } catch (requestError) {
        setError(apiErrorMessage(requestError, 'Не удалось получить статус расчёта'));
        return;
      }
    }
  }, [clearStoredRun]);

  const start = useCallback(async (payload) => {
    const generation = generationRef.current + 1;
    generationRef.current = generation;
    setIsSubmitting(true);
    setError('');
    setResult(null);
    setStatus(null);

    try {
      const response = await modelingApi.post(`${basePath}/runs`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': createIdempotencyKey(idempotencyPrefix),
        },
      });

      const runInfo = response.data;
      setRun(runInfo);
      setStatus(runInfo);
      if (storageKey) {
        sessionStorage.setItem(storageKey, JSON.stringify(runInfo));
      }
      monitorRun(runInfo, generation);
      return runInfo;
    } catch (requestError) {
      setError(apiErrorMessage(requestError));
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, [basePath, idempotencyPrefix, monitorRun, storageKey]);

  const cancel = useCallback(async () => {
    if (!run?.run_id) {
      return;
    }

    try {
      const response = await modelingApi.post(`${basePath}/runs/${run.run_id}/cancel`, {
        reason: 'cancelled_by_frontend_user',
      });
      setStatus((previous) => ({...previous, ...response.data}));
    } catch (requestError) {
      setError(apiErrorMessage(requestError, 'Не удалось отменить расчёт'));
    }
  }, [basePath, run]);

  const reset = useCallback(() => {
    generationRef.current += 1;
    setRun(null);
    setStatus(null);
    setResult(null);
    setError('');
    clearStoredRun();
  }, [clearStoredRun]);

  useEffect(() => {
    mountedRef.current = true;
    if (storageKey) {
      const serialized = sessionStorage.getItem(storageKey);
      if (serialized) {
        try {
          const savedRun = JSON.parse(serialized);
          const generation = generationRef.current + 1;
          generationRef.current = generation;
          setRun(savedRun);
          setStatus(savedRun);
          monitorRun(savedRun, generation);
        } catch (storageError) {
          sessionStorage.removeItem(storageKey);
        }
      }
    }

    return () => {
      mountedRef.current = false;
      generationRef.current += 1;
    };
  }, [monitorRun, storageKey]);

  const active = ['received', 'queued', 'running', 'processing_results', 'cancel_requested']
    .includes(status?.status);

  return {
    run,
    status,
    result,
    error,
    active,
    isSubmitting,
    start,
    cancel,
    reset,
  };
}
