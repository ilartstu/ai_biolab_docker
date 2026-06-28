import React, {useMemo, useRef} from 'react';
import {Button} from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DEFAULT_HEIGHT = 420;

export function toTimestamp(value) {
  if (typeof value === 'number') {
    return value;
  }
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function TimeSeriesChart({
  title,
  subtitle,
  series,
  yAxisTitle,
  height = DEFAULT_HEIGHT,
  emptyText = 'Нет данных для отображения',
  language = 'ru',
}) {
  const chartRef = useRef(null);
  const hasData = series?.some((item) => Array.isArray(item.data) && item.data.length > 0);

  const options = useMemo(() => ({
    chart: {
      type: 'line',
      height,
      animation: false,
      zoomType: 'x',
      panning: false,
      spacingTop: 18,
      spacingRight: 18,
      spacingBottom: 18,
      spacingLeft: 18,
    },
    title: {
      text: title || '',
      align: 'left',
      style: {fontSize: '18px', fontWeight: '600'},
    },
    subtitle: {
      text: subtitle || '',
      align: 'left',
    },
    credits: {enabled: false},
    accessibility: {enabled: false},
    xAxis: {
      type: 'datetime',
      crosshair: true,
      minRange: 24 * 60 * 60 * 1000,
      title: {text: language === 'en' ? 'Date' : 'Дата'},
    },
    yAxis: {
      title: {text: yAxisTitle || ''},
      startOnTick: false,
      endOnTick: false,
    },
    tooltip: {
      shared: true,
      xDateFormat: '%d.%m.%Y',
      valueDecimals: 2,
    },
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
    },
    plotOptions: {
      series: {
        animation: false,
        turboThreshold: 0,
        marker: {enabled: false},
        states: {
          inactive: {opacity: 1},
        },
      },
    },
    exporting: {enabled: false},
    series: series || [],
    responsive: {
      rules: [{
        condition: {maxWidth: 700},
        chartOptions: {
          chart: {height: Math.min(height, 360)},
          legend: {itemStyle: {fontSize: '11px'}},
        },
      }],
    },
    lang: {
      resetZoom: language === 'en' ? 'Reset zoom' : 'Сбросить масштаб',
      resetZoomTitle: language === 'en' ? 'Reset zoom' : 'Вернуть исходный масштаб',
      noData: emptyText,
    },
  }), [emptyText, height, language, series, subtitle, title, yAxisTitle]);

  if (!hasData) {
    return <div className="model-chart-empty">{emptyText}</div>;
  }

  return (
    <div className="model-chart-shell">
      <div className="model-chart-toolbar">
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={() => chartRef.current?.chart?.zoomOut()}
        >
          {language === 'en' ? 'Reset zoom' : 'Сбросить масштаб'}
        </Button>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
        containerProps={{className: 'model-highcharts-container'}}
      />
    </div>
  );
}
