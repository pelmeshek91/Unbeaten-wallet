import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ChartBar({ list }) {
  const row = [];
  const column = [];

  for (const key in list) {
    if (key !== 'total') {
      row.push(key);
      column.push(list[key]);
    }
  }

  const option = {
    color: ['#3398DB'],
    tooltip: {
      show: false,
    },
    grid: { left: 50, right: 50, bottom: 0, containLabel: true },
    xAxis: [
      {
        type: 'category',
        data: row,
        axisTick: {
          alignWithLabel: true,
          align: 'center',
        },
        axisLabel: {
          color: '#C7CCDC',
          interval: 0,
          align: 'center',
        },
      },
    ],

    yAxis: [
      {
        type: 'value',
        minInterval: 100,
        maxInterval: 1000,
        axisLabel: {
          show: false,
          color: 'rgba(199, 204, 220, 1)',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(71, 71, 89, 1)',
            type: 'solid',
          },
        },
      },
    ],
    series: [
      {
        name: 'Name',
        type: 'bar',
        barCategoryGap: '25',
        barWidth: '38',
        data: column,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: function (params) {
            if ((params.dataIndex + 1) % 3 === 1) {
              return {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#60C470',
                  },
                  {
                    offset: 1,
                    color: '#383C46',
                  },
                ],
              };
            } else {
              return {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#5B5B6D',
                  },
                  {
                    offset: 1,
                    color: '#373745',
                  },
                ],
              };
            }
          },
        },
        label: {
          show: true,
          position: 'top',
          color: 'rgba(199, 204, 220, 1)',
          formatter: '{c} UAH',
        },
      },
    ],
  };
  const chartStyle = {
    height: '600px',
  };

  return <ReactEcharts option={option} style={chartStyle} />;
}

export default ChartBar;
