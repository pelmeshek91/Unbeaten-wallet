import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ChartBarIncome({ list }) {
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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: 25,
      right: 25,
      bottom: 0,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: row,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: '#C7CCDC',
          interval: 0,
          rotate: 35,
        },
      },
    ],
    yAxis: {
      show: false,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#C7CCDC',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: 'none',
        type: 'bar',
        barWidth: 38,
        data: column,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: function (params) {
            if ((params.dataIndex + 1) % 2 === 1) {
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
      },
    ],
  };

  return <ReactEcharts option={option} />;
}

export default ChartBarIncome;
