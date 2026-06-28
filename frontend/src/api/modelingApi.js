import axios from 'axios';

const rawBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';
export const API_BASE_URL = rawBaseUrl.replace(/\/$/, '');

export const modelingApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
  timeout: 30000,
});

function randomId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

modelingApi.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  if (!config.headers['X-Request-ID']) {
    config.headers['X-Request-ID'] = randomId();
  }
  return config;
});

export function createIdempotencyKey(prefix = 'run') {
  return `${prefix}-${randomId()}`;
}

export function apiErrorMessage(error, fallback = 'Не удалось выполнить запрос к серверу') {
  const body = error?.response?.data;
  return (
    body?.detail?.error?.message ||
    body?.error?.message ||
    body?.detail?.message ||
    body?.detail ||
    error?.message ||
    fallback
  );
}

export function isTerminalRunStatus(status) {
  return ['completed', 'failed', 'cancelled', 'expired'].includes(status);
}
