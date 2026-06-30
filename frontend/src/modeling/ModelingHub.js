import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Accordion,
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
  Spinner,
  Tab,
  Table,
  Tabs,
} from 'react-bootstrap';
import NaviBarv2 from '../Components/NaviBarv2';
import NaviBarv2En from '../Components/NaviBarv2_En';
import Footer from '../Components/Footer';
import FooterEn from '../Components/Footer_En';
import {API_BASE_URL, apiErrorMessage, modelingApi} from '../api/modelingApi';
import {useAsyncModelRun} from './useAsyncModelRun';
import {TimeSeriesChart, toTimestamp} from './components/TimeSeriesChart';
import {BlockMath, InlineMath} from 'react-katex';
import 'katex/dist/katex.min.css';
import './ModelingHub.css';

// Хелпер: рендерит строку с inline-математикой, обрамлённой $...$
// Пример: "Параметры $\\alpha_E$, $\\omega_{imm}$ описывают…" → нормально отрендерится
function MathText({text}) {
  if (!text) return null;
  const parts = String(text).split('$');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 0
          ? <span key={i}>{part}</span>
          : <InlineMath key={i} math={part} />
      )}
    </>
  );
}

const ACTUAL_SERIES_COLOR = '#2f5bea';
const FORECAST_COLORS = ['#e5533d', '#198754', '#6f42c1'];
const COMPARTMENT_COLORS = {
  S: '#6c757d',
  E: '#fd7e14',
  I: '#dc3545',
  R: '#198754',
  H: '#0d6efd',
  C: '#6f42c1',
  D: '#212529',
};

const TEXT = {
  ru: {
    title: 'Моделирование распространения эпидемий',
    subtitle: 'Единый интерфейс для агентной модели, прогнозных моделей и модели среднего поля.',
    agent: 'Агентная модель',
    ml: 'SEIR-HCD / LSTM / CGAN',
    mfg: 'Модель среднего поля',
    loadingConfig: 'Загрузка конфигурации…',
    run: 'Запустить расчёт',
    cancel: 'Отменить',
    reset: 'Очистить результат',
    region: 'Регион',
    status: 'Статус расчёта',
    noResult: 'Результат появится после завершения расчёта.',
    daily: 'Ежедневный прогноз',
    modeling: 'Моделирование',
    validation: 'Валидация',
    load: 'Загрузить данные',
    compareAll: 'Сравнить все три модели',
    model: 'Модель',
    indicator: 'Показатель',
    contextDate: 'Дата контекста',
    historyAndForecast: 'История и прогноз',
    actual: 'Фактические данные',
    predicted: 'Модель',
    mean: 'Средний прогноз',
    lower: 'Нижняя граница 3σ',
    upper: 'Верхняя граница 3σ',
    parameters: 'Параметры',
    dataTable: 'Таблица данных',
    noData: 'Нет данных для выбранной комбинации.',
    scenario: 'Сценарий',
    period: 'Период',
    strategy: 'Стратегия',
    compartments: 'Отображаемые состояния',
    epidemicStates: 'Динамика состояний модели',
    cumulative: 'Накопленные показатели',
    newCases: 'Ежедневные показатели',
    population: 'Численность популяции',
    initiallyInfected: 'Начально инфицированных',
    forecastDays: 'Дней моделирования',
    beta: 'Контагиозность β',
    interventions: 'Интервенции',
    addIntervention: 'Добавить интервенцию',
    date: 'Дата',
    betaChange: 'Множитель β',
    remove: 'Удалить',
    waiting: 'Ожидание запуска',
    reproductionIndex: 'Репродуктивное число R₀',
    aboutModel: 'О модели',
    equations: 'Уравнения модели',
    modelParameters: 'Параметры модели',
    selectedStrategy: 'Выбранная стратегия',
    selectedPeriod: 'Период',
    coefficient: 'Коэффициент',
    expandDescription: 'Подробнее',
    collapseDescription: 'Свернуть',
  },
  en: {
    title: 'Epidemic spread modeling',
    subtitle: 'A unified interface for the agent-based model, forecasting models and the mean-field model.',
    agent: 'Agent-based model',
    ml: 'SEIR-HCD / LSTM / CGAN',
    mfg: 'Mean-field model',
    loadingConfig: 'Loading configuration…',
    run: 'Run simulation',
    cancel: 'Cancel',
    reset: 'Clear result',
    region: 'Region',
    status: 'Run status',
    noResult: 'The result will appear after the run is completed.',
    daily: 'Daily forecast',
    modeling: 'Modeling',
    validation: 'Validation',
    load: 'Load data',
    compareAll: 'Compare all three models',
    model: 'Model',
    indicator: 'Indicator',
    contextDate: 'Context date',
    historyAndForecast: 'History and forecast',
    actual: 'Actual data',
    predicted: 'Model',
    mean: 'Mean forecast',
    lower: 'Lower 3σ bound',
    upper: 'Upper 3σ bound',
    parameters: 'Parameters',
    dataTable: 'Data table',
    noData: 'No data for the selected combination.',
    scenario: 'Scenario',
    period: 'Period',
    strategy: 'Strategy',
    compartments: 'Displayed compartments',
    epidemicStates: 'Model compartment dynamics',
    cumulative: 'Cumulative indicators',
    newCases: 'Daily indicators',
    population: 'Population size',
    initiallyInfected: 'Initially infected',
    forecastDays: 'Simulation days',
    beta: 'Transmissibility β',
    interventions: 'Interventions',
    addIntervention: 'Add intervention',
    date: 'Date',
    betaChange: 'β multiplier',
    remove: 'Remove',
    waiting: 'Waiting to start',
    reproductionIndex: 'Reproduction number R₀',
    aboutModel: 'About the model',
    equations: 'Model equations',
    modelParameters: 'Model parameters',
    selectedStrategy: 'Selected strategy',
    selectedPeriod: 'Period',
    coefficient: 'Coefficient',
    expandDescription: 'Show more',
    collapseDescription: 'Collapse',
  },
};

const STATUS_LABELS = {
  ru: {
    received: 'Принято',
    queued: 'В очереди',
    running: 'Выполняется',
    processing_results: 'Обработка результата',
    completed: 'Завершено',
    failed: 'Ошибка',
    cancel_requested: 'Запрошена отмена',
    cancelled: 'Отменено',
    expired: 'Истекло',
  },
  en: {
    received: 'Received',
    queued: 'Queued',
    running: 'Running',
    processing_results: 'Processing result',
    completed: 'Completed',
    failed: 'Failed',
    cancel_requested: 'Cancellation requested',
    cancelled: 'Cancelled',
    expired: 'Expired',
  },
};

function ConfigLoading({text}) {
  return (
    <div className="model-loading-box">
      <Spinner animation="border" size="sm" className="me-2" />
      {text}
    </div>
  );
}

function RunStatus({language, text, status, error, active, onCancel, onReset}) {
  if (!status && !error) {
    return null;
  }

  const statusCode = status?.status;
  const progress = status?.progress ?? (statusCode === 'completed' ? 100 : 0);
  const variant = statusCode === 'completed'
    ? 'success'
    : statusCode === 'failed'
      ? 'danger'
      : statusCode === 'cancelled'
        ? 'secondary'
        : 'info';

  return (
    <Card className="model-status-card">
      <Card.Body>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div>
            <strong>{text.status}: </strong>
            {statusCode && <Badge bg={variant}>{STATUS_LABELS[language][statusCode] || statusCode}</Badge>}
            {status?.queue_position ? <span className="ms-2 text-muted">#{status.queue_position}</span> : null}
          </div>
          <div className="d-flex gap-2">
            {active && (
              <Button size="sm" variant="outline-danger" onClick={onCancel}>
                {text.cancel}
              </Button>
            )}
            {!active && status && (
              <Button size="sm" variant="outline-secondary" onClick={onReset}>
                {text.reset}
              </Button>
            )}
          </div>
        </div>
        {status && (
          <>
            <ProgressBar className="mt-3" now={Math.max(0, Math.min(100, progress || 0))} label={`${Math.round(progress || 0)}%`} />
            <div className="small text-muted mt-2">{status.message}</div>
          </>
        )}
        {error && <Alert variant="danger" className="mt-3 mb-0">{error}</Alert>}
      </Card.Body>
    </Card>
  );
}

function DataTable({rows, columns, language, maxRows}) {
  const visibleRows = typeof maxRows === 'number' ? rows.slice(0, maxRows) : rows;
  if (!rows?.length) {
    return null;
  }

  return (
    <div className="model-table-shell">
      <Table striped bordered hover size="sm" responsive className="mb-0 model-data-table">
        <thead>
          <tr>
            {columns.map((column) => <th key={column.key}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, index) => (
            <tr key={`${row.date || row.t || 'row'}-${index}`}>
              {columns.map((column) => (
                <td key={column.key}>
                  {typeof row[column.key] === 'number'
                    ? Number(row[column.key]).toLocaleString(language === 'en' ? 'en-US' : 'ru-RU', {maximumFractionDigits: 2})
                    : row[column.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {typeof maxRows === 'number' && rows.length > maxRows && (
        <div className="small text-muted p-2">
          {language === 'en' ? `Showing ${maxRows} of ${rows.length} rows` : `Показано ${maxRows} из ${rows.length} строк`}
        </div>
      )}
    </div>
  );
}

function AgentPanel({language, text}) {
  const [config, setConfig] = useState(null);
  const [configError, setConfigError] = useState('');
  const [form, setForm] = useState({
    region_id: '',
    pop_size: 100000,
    pop_infected: 10,
    forecast_days: 45,
    beta: 0.02,
  });
  const [interventions, setInterventions] = useState([]);

  const runController = useAsyncModelRun({
    basePath: '/api/models/agent',
    storageKey: 'ai-biolab-agent-active-run',
    idempotencyPrefix: 'agent',
  });

  useEffect(() => {
    let alive = true;
    modelingApi.get('/api/models/agent/config')
      .then(({data}) => {
        if (!alive) return;
        setConfig(data);
        setForm({
          region_id: data.defaults?.region_id || data.regions?.default_region_id || data.regions?.items?.[0]?.id || '',
          pop_size: data.defaults?.pop_size ?? 100000,
          pop_infected: data.defaults?.pop_infected ?? 10,
          forecast_days: data.defaults?.forecast_days ?? 45,
          beta: data.defaults?.beta ?? 0.02,
        });
        setInterventions(data.defaults?.interventions || []);
      })
      .catch((error) => alive && setConfigError(apiErrorMessage(error, 'Не удалось загрузить конфигурацию агентной модели')));
    return () => { alive = false; };
  }, []);

  const updateField = (event) => {
    const {name, value} = event.target;
    setForm((previous) => ({...previous, [name]: value}));
  };

  const addIntervention = () => {
    setInterventions((previous) => [...previous, {date: '', beta_change: 1}]);
  };

  const updateIntervention = (index, key, value) => {
    setInterventions((previous) => previous.map((item, itemIndex) => (
      itemIndex === index ? {...item, [key]: value} : item
    )));
  };

  const removeIntervention = (index) => {
    setInterventions((previous) => previous.filter((_, itemIndex) => itemIndex !== index));
  };

  const submit = async (event) => {
    event.preventDefault();
    await runController.start({
      client_request_id: `frontend-agent-${Date.now()}`,
      region_id: form.region_id,
      sim_params: {
        pop_size: Number(form.pop_size),
        pop_infected: Number(form.pop_infected),
        forecast_days: Number(form.forecast_days),
        beta: form.beta === '' ? null : Number(form.beta),
      },
      interventions: interventions
        .filter((item) => item.date)
        .map((item) => ({date: item.date, beta_change: Number(item.beta_change)})),
    });
  };

  const cumulativeSeries = useMemo(() => {
    const rows = runController.result?.series || [];
    const make = (key, name, color) => ({
      name,
      color,
      data: rows.map((row) => [toTimestamp(row.date), row[key]]).filter(([x, y]) => x !== null && y !== null),
    });
    return [
      make('cum_infections', language === 'en' ? 'Infections' : 'Заражения', '#dc3545'),
      make('cum_recoveries', language === 'en' ? 'Recoveries' : 'Выздоровления', '#198754'),
      make('cum_critical', language === 'en' ? 'Critical' : 'Критические', '#6f42c1'),
      make('cum_deaths', language === 'en' ? 'Deaths' : 'Смерти', '#212529'),
    ];
  }, [language, runController.result]);

  const dailySeries = useMemo(() => {
    const rows = runController.result?.series || [];
    const make = (key, name, color) => ({
      name,
      color,
      data: rows.map((row) => [toTimestamp(row.date), row[key]]).filter(([x, y]) => x !== null && y !== null),
    });
    return [
      make('new_infections', language === 'en' ? 'New infections' : 'Новые заражения', '#dc3545'),
      make('new_recoveries', language === 'en' ? 'New recoveries' : 'Новые выздоровления', '#198754'),
      make('new_critical', language === 'en' ? 'New critical' : 'Новые критические', '#6f42c1'),
      make('new_deaths', language === 'en' ? 'New deaths' : 'Новые смерти', '#212529'),
    ];
  }, [language, runController.result]);

  if (!config && !configError) {
    return <ConfigLoading text={text.loadingConfig} />;
  }

  return (
    <div>
      {configError && <Alert variant="danger">{configError}</Alert>}
      <Card className="model-control-card">
        <Card.Body>
          <Form onSubmit={submit}>
            <Row className="g-3">
              <Col md={6} lg={4}>
                <Form.Group>
                  <Form.Label>{text.region}</Form.Label>
                  <Form.Select name="region_id" value={form.region_id} onChange={updateField} required>
                    {(config?.regions?.items || []).map((region) => (
                      <option key={region.id} value={region.id}>{region.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={4}>
                <Form.Group>
                  <Form.Label>{text.population}</Form.Label>
                  <Form.Control type="number" name="pop_size" value={form.pop_size} onChange={updateField} min={1000} max={1000000} required />
                </Form.Group>
              </Col>
              <Col md={6} lg={4}>
                <Form.Group>
                  <Form.Label>{text.initiallyInfected}</Form.Label>
                  <Form.Control type="number" name="pop_infected" value={form.pop_infected} onChange={updateField} min={10} max={5000} required />
                </Form.Group>
              </Col>
              <Col md={6} lg={4}>
                <Form.Group>
                  <Form.Label>{text.forecastDays}</Form.Label>
                  <Form.Control type="number" name="forecast_days" value={form.forecast_days} onChange={updateField} min={1} max={365} required />
                </Form.Group>
              </Col>
              <Col md={6} lg={4}>
                <Form.Group>
                  <Form.Label>{text.beta}</Form.Label>
                  <Form.Control type="number" step="0.001" name="beta" value={form.beta} onChange={updateField} min={0.001} max={10} />
                </Form.Group>
              </Col>
            </Row>

            <div className="model-section-heading mt-4">{text.interventions}</div>
            {interventions.map((intervention, index) => (
              <Row className="g-2 align-items-end mb-2" key={`intervention-${index}`}>
                <Col md={5}>
                  <Form.Label>{text.date}</Form.Label>
                  <Form.Control
                    type="date"
                    value={intervention.date || ''}
                    onChange={(event) => updateIntervention(index, 'date', event.target.value)}
                  />
                </Col>
                <Col md={5}>
                  <Form.Label>{text.betaChange}</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    min="0.33"
                    max="3"
                    value={intervention.beta_change}
                    onChange={(event) => updateIntervention(index, 'beta_change', event.target.value)}
                  />
                </Col>
                <Col md={2}>
                  <Button variant="outline-danger" className="w-100" onClick={() => removeIntervention(index)}>
                    {text.remove}
                  </Button>
                </Col>
              </Row>
            ))}
            <Button variant="outline-secondary" size="sm" onClick={addIntervention} className="mt-1">
              {text.addIntervention}
            </Button>

            <div className="mt-4">
              <Button type="submit" disabled={runController.active || runController.isSubmitting || !config}>
                {runController.isSubmitting && <Spinner animation="border" size="sm" className="me-2" />}
                {text.run}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <RunStatus
        language={language}
        text={text}
        status={runController.status}
        error={runController.error}
        active={runController.active}
        onCancel={runController.cancel}
        onReset={runController.reset}
      />

      {runController.result ? (
        <div className="mt-4">
          <Row className="g-4">
            <Col xs={12}>
              <TimeSeriesChart title={text.cumulative} series={cumulativeSeries} yAxisTitle={language === 'en' ? 'People' : 'Человек'} language={language} />
            </Col>
            <Col xs={12}>
              <TimeSeriesChart title={text.newCases} series={dailySeries} yAxisTitle={language === 'en' ? 'People per day' : 'Человек в день'} language={language} />
            </Col>
          </Row>
          <Accordion className="mt-4">
            <Accordion.Item eventKey="agent-table">
              <Accordion.Header>{text.dataTable}</Accordion.Header>
              <Accordion.Body>
                <DataTable
                  language={language}
                  rows={runController.result.series || []}
                  columns={[
                    {key: 'date', label: text.date},
                    {key: 'cum_infections', label: language === 'en' ? 'Cumulative infections' : 'Накопленные заражения'},
                    {key: 'new_infections', label: language === 'en' ? 'New infections' : 'Новые заражения'},
                    {key: 'cum_recoveries', label: language === 'en' ? 'Cumulative recoveries' : 'Накопленные выздоровления'},
                    {key: 'cum_deaths', label: language === 'en' ? 'Cumulative deaths' : 'Накопленные смерти'},
                  ]}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : (
        !runController.active && <div className="model-result-placeholder mt-4">{text.noResult}</div>
      )}
    </div>
  );
}

function MlForecastPanel({language, text}) {
  const [config, setConfig] = useState(null);
  const [configError, setConfigError] = useState('');
  const [activeModel, setActiveModel] = useState('seir_hcd');
  const [view, setView] = useState('forecast');
  const [compareAll, setCompareAll] = useState(false);
  const [form, setForm] = useState({region_id: '', indicator_id: '', context_date: ''});
  const [precomputed, setPrecomputed] = useState(null);
  const [precomputedLoading, setPrecomputedLoading] = useState(false);
  const [precomputedError, setPrecomputedError] = useState('');

  const runController = useAsyncModelRun({
    basePath: '/api/models/ml-forecast',
    storageKey: 'ai-biolab-ml-active-run',
    idempotencyPrefix: 'ml',
  });

  useEffect(() => {
    let alive = true;
    modelingApi.get('/api/models/ml-forecast/config')
      .then(({data}) => {
        if (!alive) return;
        setConfig(data);
        const firstModel = data.models?.[0]?.id || 'seir_hcd';
        setActiveModel(firstModel);
        setForm({
          region_id: data.regions?.default_region_id || data.regions?.items?.[0]?.id || '',
          indicator_id: data.indicators?.[0]?.id || '',
          context_date: data.date_ranges?.prediction?.max_context_date || '',
        });
      })
      .catch((error) => alive && setConfigError(apiErrorMessage(error, 'Не удалось загрузить конфигурацию прогнозных моделей')));
    return () => { alive = false; };
  }, []);

  const updateField = (event) => {
    const {name, value} = event.target;
    setForm((previous) => ({...previous, [name]: value}));
  };

  const submitForecast = async (event) => {
    event.preventDefault();
    const modelIds = compareAll ? (config?.models || []).map((model) => model.id) : [activeModel];
    await runController.start({
      client_request_id: `frontend-ml-${Date.now()}`,
      region_id: form.region_id,
      context_date: form.context_date,
      model_ids: modelIds,
      indicator_id: form.indicator_id,
      mode: compareAll ? 'compare_models' : 'single_model',
      horizon_days: config?.forecast_settings?.horizon_days || 5,
      context_days: config?.forecast_settings?.context_days || 14,
    });
  };

  const loadPrecomputed = useCallback(async (targetView = view) => {
    if (!form.region_id || !form.indicator_id || !activeModel || targetView === 'forecast') return;
    setPrecomputedLoading(true);
    setPrecomputedError('');
    setPrecomputed(null);
    try {
      const response = await modelingApi.get(`/api/models/ml-forecast/${targetView}`, {
        params: {
          region_id: form.region_id,
          model_id: activeModel,
          indicator_id: form.indicator_id,
        },
      });
      setPrecomputed(response.data);
    } catch (error) {
      setPrecomputedError(apiErrorMessage(error, 'Не удалось загрузить готовые результаты'));
    } finally {
      setPrecomputedLoading(false);
    }
  }, [activeModel, form.indicator_id, form.region_id, view]);

  useEffect(() => {
    setPrecomputed(null);
    setPrecomputedError('');
    if (view !== 'forecast' && config) {
      loadPrecomputed(view);
    }
  }, [activeModel, config, form.indicator_id, form.region_id, loadPrecomputed, view]);

  const forecastSeries = useMemo(() => {
    const result = runController.result;
    if (!result) return [];
    const chartSeries = [];
    const historyPoints = (result.history || [])
      .map((row) => [toTimestamp(row.date), row.value])
      .filter(([x, y]) => x !== null && y !== null);
    const lastHistoryPoint = historyPoints.length ? historyPoints[historyPoints.length - 1] : null;

    if (result.history?.length) {
      chartSeries.push({
        name: text.actual,
        color: ACTUAL_SERIES_COLOR,
        lineWidth: 3,
        data: historyPoints,
      });
    }
    (result.models || []).forEach((model, index) => {
      const color = FORECAST_COLORS[index % FORECAST_COLORS.length];
      const meanPoints = model.forecast
        .map((row) => [toTimestamp(row.date), row.mean])
        .filter(([x, y]) => x !== null && y !== null);
      const rangePoints = model.forecast
        .map((row) => [toTimestamp(row.date), row.low_3sigma, row.high_3sigma])
        .filter(([x, low, high]) => x !== null && low !== null && high !== null);
      const connectedMeanPoints = lastHistoryPoint ? [lastHistoryPoint, ...meanPoints] : meanPoints;
      const connectedRangePoints = lastHistoryPoint
        ? [[lastHistoryPoint[0], lastHistoryPoint[1], lastHistoryPoint[1]], ...rangePoints]
        : rangePoints;

      if (connectedRangePoints.length > 1) {
        chartSeries.push({
          type: 'arearange',
          name: `${model.model_name}: ${text.lower} / ${text.upper}`,
          color,
          fillColor: `${color}33`,
          lineWidth: 0,
          zIndex: 0,
          data: connectedRangePoints,
        });
      }
      chartSeries.push({
        name: `${model.model_name}: ${text.mean}`,
        color,
        lineWidth: 3,
        zIndex: 2,
        data: connectedMeanPoints,
      });
    });
    return chartSeries;
  }, [runController.result, text.actual, text.lower, text.mean, text.upper]);

  const precomputedSeries = useMemo(() => {
    const rows = precomputed?.series || [];
    return [
      {
        name: text.actual,
        color: '#212529',
        data: rows.map((row) => [toTimestamp(row.date), row.actual]).filter(([x, y]) => x !== null && y !== null),
      },
      {
        name: text.predicted,
        color: '#0d6efd',
        lineWidth: 3,
        data: rows.map((row) => [toTimestamp(row.date), row.predicted]).filter(([x, y]) => x !== null && y !== null),
      },
    ];
  }, [precomputed, text.actual, text.predicted]);

  const r0Series = useMemo(() => {
    const rows = precomputed?.reproduction_index || [];
    return [{
      name: 'R₀',
      color: '#6f42c1',
      data: rows.map((row) => [toTimestamp(row.date), row.value ?? row.mean]).filter(([x, y]) => x !== null && y !== null),
    }];
  }, [precomputed]);

  if (!config && !configError) {
    return <ConfigLoading text={text.loadingConfig} />;
  }

  const modelName = config?.models?.find((model) => model.id === activeModel)?.name || activeModel;

  return (
    <div>
      {configError && <Alert variant="danger">{configError}</Alert>}
      <Card className="model-control-card">
        <Card.Body>
          <div className="model-section-heading mb-2">{text.model}</div>
          <Tabs activeKey={activeModel} onSelect={(key) => key && setActiveModel(key)} className="model-subtabs mb-4">
            {(config?.models || []).map((model) => (
              <Tab key={model.id} eventKey={model.id} title={model.name} />
            ))}
          </Tabs>

          <Row className="g-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>{text.region}</Form.Label>
                <Form.Select name="region_id" value={form.region_id} onChange={updateField}>
                  {(config?.regions?.items || []).map((region) => <option key={region.id} value={region.id}>{region.name}</option>)}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>{text.indicator}</Form.Label>
                <Form.Select name="indicator_id" value={form.indicator_id} onChange={updateField}>
                  {(config?.indicators || []).map((indicator) => <option key={indicator.id} value={indicator.id}>{indicator.name}</option>)}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>{text.contextDate}</Form.Label>
                <Form.Control
                  type="date"
                  name="context_date"
                  value={form.context_date}
                  min={config?.date_ranges?.prediction?.min_context_date}
                  max={config?.date_ranges?.prediction?.max_context_date}
                  onChange={updateField}
                />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Tabs activeKey={view} onSelect={(key) => key && setView(key)} className="model-view-tabs mt-4 mb-3">
        <Tab eventKey="forecast" title={text.daily} />
        <Tab eventKey="modeling" title={text.modeling} />
        <Tab eventKey="validation" title={text.validation} />
      </Tabs>

      {view === 'forecast' && (
        <>
          <Card className="model-control-card">
            <Card.Body>
              <Form onSubmit={submitForecast}>
                <Form.Check
                  type="switch"
                  id="compare-all-models"
                  label={text.compareAll}
                  checked={compareAll}
                  onChange={(event) => setCompareAll(event.target.checked)}
                  className="mb-3"
                />
                <Button type="submit" disabled={runController.active || runController.isSubmitting || !form.context_date}>
                  {runController.isSubmitting && <Spinner animation="border" size="sm" className="me-2" />}
                  {text.run}
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <RunStatus
            language={language}
            text={text}
            status={runController.status}
            error={runController.error}
            active={runController.active}
            onCancel={runController.cancel}
            onReset={runController.reset}
          />

          {runController.result ? (
            <div className="mt-4">
              <TimeSeriesChart
                title={text.historyAndForecast}
                subtitle={compareAll ? text.compareAll : modelName}
                series={forecastSeries}
                yAxisTitle={config?.indicators?.find((item) => item.id === form.indicator_id)?.name || ''}
                language={language}
              />
              {runController.result.artifacts?.forecast_csv?.url && (
                <div className="mt-3 d-flex flex-wrap align-items-center gap-2">
                  <Button
                    as="a"
                    variant="outline-primary"
                    href={`${API_BASE_URL}${runController.result.artifacts.forecast_csv.url}`}
                  >
                    CSV
                  </Button>
                  <span className="text-muted small">
                    {language === 'en' ? 'Saved to PostgreSQL and CSV.' : 'Сохранено в PostgreSQL и CSV.'}
                  </span>
                </div>
              )}
              <Accordion className="mt-4">
                <Accordion.Item eventKey="forecast-table">
                  <Accordion.Header>{text.dataTable}</Accordion.Header>
                  <Accordion.Body>
                    <DataTable
                      language={language}
                      rows={(runController.result.models || []).flatMap((model) => model.forecast.map((row) => ({model: model.model_name, ...row})))}
                      columns={[
                        {key: 'model', label: text.model},
                        {key: 'date', label: text.date},
                        {key: 'horizon', label: language === 'en' ? 'Horizon' : 'Горизонт'},
                        {key: 'mean', label: text.mean},
                        {key: 'low_3sigma', label: text.lower},
                        {key: 'high_3sigma', label: text.upper},
                      ]}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ) : (
            !runController.active && <div className="model-result-placeholder mt-4">{text.noResult}</div>
          )}
        </>
      )}

      {view !== 'forecast' && (
        <div>
          <div className="d-flex align-items-center gap-3 mb-3">
            <Button onClick={() => loadPrecomputed(view)} disabled={precomputedLoading}>
              {precomputedLoading && <Spinner animation="border" size="sm" className="me-2" />}
              {text.load}
            </Button>
            <span className="text-muted">{modelName}</span>
          </div>
          {precomputedError && <Alert variant="danger">{precomputedError}</Alert>}
          {precomputed && (
            <>
              <TimeSeriesChart
                title={view === 'modeling' ? text.modeling : text.validation}
                subtitle={modelName}
                series={precomputedSeries}
                language={language}
              />
              {r0Series[0].data.length > 0 && (
                <div className="mt-4">
                  <TimeSeriesChart title={text.reproductionIndex} series={r0Series} yAxisTitle="R₀" language={language} />
                </div>
              )}
              {(precomputed.model_parameters?.length > 0 || precomputed.model_parameters_forecast?.length > 0) && (
                <Accordion className="mt-4">
                  <Accordion.Item eventKey="ml-parameters">
                    <Accordion.Header>{text.parameters}</Accordion.Header>
                    <Accordion.Body>
                      <pre className="model-json-preview">{JSON.stringify(precomputed.model_parameters || precomputed.model_parameters_forecast, null, 2)}</pre>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function MfgPanel({language, text}) {
  const [config, setConfig] = useState(null);
  const [configError, setConfigError] = useState('');
  const [regionId, setRegionId] = useState('');
  const [periodId, setPeriodId] = useState('');
  const [strategyId, setStrategyId] = useState('');
  const [selectedCompartments, setSelectedCompartments] = useState(['I', 'H', 'C', 'D']);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;
    modelingApi.get('/api/models/mfg/config')
      .then(({data}) => {
        if (!alive) return;
        setConfig(data);
        const firstRegion = data.regions?.[0]?.id || '';
        const firstPeriod = data.periods?.[firstRegion]?.[0]?.id || '';
        const firstStrategy = data.strategies?.[0]?.id || '';
        setRegionId(firstRegion);
        setPeriodId(firstPeriod);
        setStrategyId(firstStrategy);
      })
      .catch((requestError) => alive && setConfigError(apiErrorMessage(requestError, 'Не удалось загрузить конфигурацию модели среднего поля')));
    return () => { alive = false; };
  }, []);

  const periods = useMemo(() => config?.periods?.[regionId] || [], [config, regionId]);

  const changeRegion = (event) => {
    const value = event.target.value;
    setRegionId(value);
    setPeriodId(config?.periods?.[value]?.[0]?.id || '');
    setResult(null);
    setError('');
  };

  const toggleCompartment = (metric) => {
    setSelectedCompartments((previous) => (
      previous.includes(metric)
        ? previous.filter((item) => item !== metric)
        : [...previous, metric]
    ));
  };

  const loadScenario = async (event) => {
    event?.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const response = await modelingApi.get('/api/models/mfg/scenario-results', {
        params: {region_id: regionId, period_id: periodId, strategy_id: strategyId},
      });
      setResult(response.data);
    } catch (requestError) {
      setError(apiErrorMessage(requestError, text.noData));
    } finally {
      setLoading(false);
    }
  };

  const chartSeries = useMemo(() => {
    const rows = result?.series || [];
    const selectedPeriod = periods.find((period) => period.id === periodId);
    const periodStart = selectedPeriod?.start_date ? toTimestamp(selectedPeriod.start_date) : null;
    const dayMilliseconds = 24 * 60 * 60 * 1000;
    return selectedCompartments.map((metric) => ({
      name: metric,
      color: COMPARTMENT_COLORS[metric],
      data: rows.map((row, index) => {
        const dateValue = row.date ? toTimestamp(row.date) : null;
        const offset = typeof row.t === 'number' ? row.t : index;
        const x = dateValue ?? (periodStart !== null ? periodStart + offset * dayMilliseconds : null);
        return [x, row[metric]];
      }).filter(([x, y]) => x !== null && y !== null && y !== undefined),
    }));
  }, [periodId, periods, result, selectedCompartments]);

  // Найти выбранные стратегию и период для отображения деталей
  const selectedStrategy = (config?.strategies || []).find((s) => s.id === strategyId);
  const selectedPeriod = periods.find((p) => p.id === periodId);

  if (!config && !configError) {
    return <ConfigLoading text={text.loadingConfig} />;
  }

  return (
    <div>
      {configError && <Alert variant="danger">{configError}</Alert>}

      {/* О модели — название + краткое описание + Accordion с формулами и таблицами */}
      {config?.model && (
        <Card className="model-info-card mb-3">
          <Card.Body>
            <Card.Title>{config.model.title || text.aboutModel}</Card.Title>
            {config.model.short_description && (
              <div className="text-muted mb-3">{config.model.short_description}</div>
            )}
            <Accordion>
              {config.model.description && (
                <Accordion.Item eventKey="model-description">
                  <Accordion.Header>{text.aboutModel}</Accordion.Header>
                  <Accordion.Body>
                    <p style={{textAlign: 'justify', whiteSpace: 'pre-line'}}>
                      <MathText text={config.model.description} />
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config.functional?.latex && (
                <Accordion.Item eventKey="model-functional">
                  <Accordion.Header>{config.functional.title || (language === 'en' ? 'Cost functional' : 'Функционал стоимости')}</Accordion.Header>
                  <Accordion.Body>
                    <div className="mb-3" style={{overflowX: 'auto'}}>
                      <BlockMath math={config.functional.latex} />
                    </div>
                    {config.functional.note && (
                      <div className="small text-muted">
                        <MathText text={config.functional.note} />
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config.equations?.latex?.length > 0 && (
                <Accordion.Item eventKey="model-equations">
                  <Accordion.Header>{config.equations.title || text.equations}</Accordion.Header>
                  <Accordion.Body>
                    <div style={{overflowX: 'auto'}}>
                      {config.equations.latex.map((eq, idx) => (
                        <div key={idx} className="mb-2"><BlockMath math={eq} /></div>
                      ))}
                    </div>
                    {config.equations.note && (
                      <div className="small text-muted mt-2">
                        <MathText text={config.equations.note} />
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config.initial_conditions?.latex?.length > 0 && (
                <Accordion.Item eventKey="model-initial">
                  <Accordion.Header>{config.initial_conditions.title || (language === 'en' ? 'Initial conditions' : 'Начальные условия')}</Accordion.Header>
                  <Accordion.Body>
                    <div style={{overflowX: 'auto'}}>
                      {config.initial_conditions.latex.map((eq, idx) => (
                        <div key={idx} className="mb-2"><BlockMath math={eq} /></div>
                      ))}
                    </div>
                    {config.initial_conditions.note && (
                      <div className="small text-muted mt-2">
                        <MathText text={config.initial_conditions.note} />
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config.parameters_info?.items?.length > 0 && (
                <Accordion.Item eventKey="model-parameters-info">
                  <Accordion.Header>{config.parameters_info.title || text.modelParameters}</Accordion.Header>
                  <Accordion.Body>
                    <Table size="sm" striped bordered>
                      <thead>
                        <tr>
                          <th style={{width: '20%'}}>{language === 'en' ? 'Symbol' : 'Обозначение'}</th>
                          <th style={{width: '28%'}}>{language === 'en' ? 'Name' : 'Название'}</th>
                          <th>{language === 'en' ? 'Description' : 'Описание'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {config.parameters_info.items.map((item, idx) => (
                          <tr key={idx}>
                            <td><InlineMath math={item.symbol} /></td>
                            <td>{item.name}</td>
                            <td><MathText text={item.description} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config.metrics?.length > 0 && (
                <Accordion.Item eventKey="model-compartments-info">
                  <Accordion.Header>{language === 'en' ? 'Compartments S/E/I/R/H/C/D' : 'Состояния S/E/I/R/H/C/D'}</Accordion.Header>
                  <Accordion.Body>
                    <Table size="sm" striped bordered>
                      <thead>
                        <tr>
                          <th style={{width: '10%'}}>ID</th>
                          <th style={{width: '32%'}}>{language === 'en' ? 'Full name' : 'Расшифровка'}</th>
                          <th>{language === 'en' ? 'Description' : 'Описание'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {config.metrics.map((metric) => (
                          <tr key={metric.id}>
                            <td><strong style={{color: metric.color || '#000', fontSize: '1.1em'}}>{metric.id}</strong></td>
                            <td>{metric.full_name || metric.label}</td>
                            <td><MathText text={metric.description} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config.strategies?.length > 0 && (
                <Accordion.Item eventKey="model-strategies-info">
                  <Accordion.Header>{language === 'en' ? 'Strategies and coefficients of J' : 'Стратегии и коэффициенты функционала'}</Accordion.Header>
                  <Accordion.Body>
                    <Table size="sm" striped bordered responsive>
                      <thead>
                        <tr>
                          <th>{text.strategy}</th>
                          <th><InlineMath math="a_1" /></th>
                          <th><InlineMath math="a_2" /></th>
                          <th><InlineMath math="a_3" /></th>
                          <th><InlineMath math="a_4" /></th>
                          <th><InlineMath math="a_5" /></th>
                          <th><InlineMath math="a_6" /></th>
                          <th style={{minWidth: '200px'}}>{language === 'en' ? 'Description' : 'Описание'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {config.strategies.map((strategy) => (
                          <tr key={strategy.id}>
                            <td>
                              <strong>{strategy.name}</strong>
                              {strategy.source_name && <div className="small text-muted">{strategy.source_name}</div>}
                            </td>
                            <td><code>{strategy.coefficients?.a_1 ?? '—'}</code></td>
                            <td><code>{strategy.coefficients?.a_2 ?? '—'}</code></td>
                            <td><code>{strategy.coefficients?.a_3 ?? '—'}</code></td>
                            <td><code>{strategy.coefficients?.a_4 ?? '—'}</code></td>
                            <td><code>{strategy.coefficients?.a_5 ?? '—'}</code></td>
                            <td><code>{strategy.coefficients?.a_6 ?? '—'}</code></td>
                            <td><MathText text={strategy.description} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              )}
            </Accordion>
          </Card.Body>
        </Card>
      )}

      <Card className="model-control-card">
        <Card.Body>
          <Form onSubmit={loadScenario}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{text.region}</Form.Label>
                  <Form.Select value={regionId} onChange={changeRegion} required>
                    {(config?.regions || []).map((region) => <option key={region.id} value={region.id}>{region.name}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{text.period}</Form.Label>
                  <Form.Select value={periodId} onChange={(event) => setPeriodId(event.target.value)} required>
                    {periods.map((period) => <option key={period.id} value={period.id}>{period.name}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{text.strategy}</Form.Label>
                  <Form.Select value={strategyId} onChange={(event) => setStrategyId(event.target.value)} required>
                    {(config?.strategies || []).map((strategy) => <option key={strategy.id} value={strategy.id}>{strategy.name}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Детали выбранной стратегии и периода — показываются под селектами */}
            {(selectedStrategy || selectedPeriod) && (
              <Row className="g-3 mt-2">
                {selectedPeriod && (
                  <Col md={6}>
                    <div className="p-3" style={{background: '#f8f9fa', borderRadius: '6px', borderLeft: '3px solid #0d6efd'}}>
                      <div className="small text-muted">{text.selectedPeriod}</div>
                      <div><strong>{selectedPeriod.name}</strong></div>
                      {selectedPeriod.start_date && (
                        <div className="small">{selectedPeriod.start_date} — {selectedPeriod.end_date}</div>
                      )}
                      {selectedPeriod.description && (
                        <div className="small text-muted mt-1">
                          <MathText text={selectedPeriod.description} />
                        </div>
                      )}
                      {selectedPeriod.initial_values && (
                        <div className="mt-2">
                          <div className="small fw-bold">{language === 'en' ? 'Initial values (people)' : 'Начальные значения (чел.)'}:</div>
                          <div className="small d-flex flex-wrap" style={{gap: '8px 14px'}}>
                            {Object.entries(selectedPeriod.initial_values).map(([key, value]) => (
                              <span key={key}>
                                <InlineMath math={key} /> = <strong>{value.toLocaleString('ru-RU')}</strong>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                )}
                {selectedStrategy && (
                  <Col md={6}>
                    <div className="p-3" style={{background: '#f8f9fa', borderRadius: '6px', borderLeft: '3px solid #198754'}}>
                      <div className="small text-muted">{text.selectedStrategy}</div>
                      <div><strong>{selectedStrategy.name}</strong></div>
                      {selectedStrategy.description && (
                        <div className="small text-muted mt-1">
                          <MathText text={selectedStrategy.description} />
                        </div>
                      )}
                      {selectedStrategy.coefficients && (
                        <div className="mt-2">
                          <div className="small fw-bold">{selectedStrategy.coefficient_label || (language === 'en' ? 'Coefficients of J' : 'Коэффициенты функционала J')}:</div>
                          <div className="small d-flex flex-wrap" style={{gap: '8px 14px'}}>
                            {Object.entries(selectedStrategy.coefficients).map(([key, value]) => (
                              <span key={key}>
                                <InlineMath math={key} /> = <strong>{value}</strong>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                )}
              </Row>
            )}

            <div className="model-section-heading mt-4 mb-2">{text.compartments}</div>
            <div className="model-checkbox-grid">
              {(config?.metrics || []).map((metric) => (
                <Form.Check
                  key={metric.id}
                  type="checkbox"
                  id={`metric-${metric.id}`}
                  label={
                    <span title={metric.description || ''} style={{cursor: 'help'}}>
                      <strong style={{color: metric.color || '#000'}}>{metric.id}</strong>
                      {metric.label && metric.label !== metric.id && <span className="text-muted"> — {metric.label.replace(/^[A-Z] — /, '')}</span>}
                    </span>
                  }
                  checked={selectedCompartments.includes(metric.id)}
                  onChange={() => toggleCompartment(metric.id)}
                />
              ))}
            </div>
            <div className="small text-muted mt-1">
              {language === 'en' ? 'Hover over the state name to see its description.' : 'Наведите курсор на букву состояния — увидите расшифровку.'}
            </div>

            <Button type="submit" className="mt-4" disabled={loading || !periodId || !strategyId}>
              {loading && <Spinner animation="border" size="sm" className="me-2" />}
              {text.load}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {result && (
        <div className="mt-4">
          <TimeSeriesChart
            title={text.epidemicStates}
            subtitle={`${selectedPeriod?.name || periodId} · ${selectedStrategy?.name || strategyId}`}
            series={chartSeries}
            yAxisTitle={language === 'en' ? 'People' : 'Человек'}
            language={language}
          />

          <Accordion className="mt-4">
            <Accordion.Item eventKey="mfg-table">
              <Accordion.Header>{text.dataTable}</Accordion.Header>
              <Accordion.Body>
                <DataTable
                  language={language}
                  rows={result.series || []}
                  columns={[
                    {key: 'date', label: text.date},
                    {key: 'S', label: 'S'},
                    {key: 'E', label: 'E'},
                    {key: 'I', label: 'I'},
                    {key: 'R', label: 'R'},
                    {key: 'H', label: 'H'},
                    {key: 'C', label: 'C'},
                    {key: 'D', label: 'D'},
                  ]}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default function ModelingHub({language = 'ru'}) {
  const text = TEXT[language] || TEXT.ru;
  const NavbarComponent = language === 'en' ? NaviBarv2En : NaviBarv2;
  const FooterComponent = language === 'en' ? FooterEn : Footer;

  return (
    <div className="modeling-page bg-light">
      <NavbarComponent />
      <main className="modeling-main">
        <Container>
          <div className="modeling-hero">
            <h1>{text.title}</h1>
            <p>{text.subtitle}</p>
          </div>

          <Tabs defaultActiveKey="agent" className="model-main-tabs mb-4" mountOnEnter unmountOnExit={false}>
            <Tab eventKey="agent" title={text.agent}>
              <AgentPanel language={language} text={text} />
            </Tab>
            <Tab eventKey="ml" title={text.ml}>
              <MlForecastPanel language={language} text={text} />
            </Tab>
            <Tab eventKey="mfg" title={text.mfg}>
              <MfgPanel language={language} text={text} />
            </Tab>
          </Tabs>
        </Container>
      </main>
      <FooterComponent />
    </div>
  );
}