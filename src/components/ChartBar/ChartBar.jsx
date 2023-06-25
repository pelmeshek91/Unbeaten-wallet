import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ChartBar({ list }) {
  const newList =
    list &&
    Object.entries(list)
      .filter(([key, value]) => key !== 'total')
      .sort((a, b) => b[1] - a[1])
      .reduce(
        (acc, currentValue) => ({
          row: [...acc.row, currentValue[0]],
          column: [...acc.column, currentValue[1]],
        }),

        {
          row: [],
          column: [],
        }
      );

  const option = {
    color: ['#3398DB'],
    tooltip: {
      show: false,
    },
    grid: { left: 50, right: 50, bottom: 0, containLabel: true },
    xAxis: [
      {
        type: 'category',
        data: newList?.row,
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
        minInterval: 0,
        maxInterval: 100,
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
        data: newList?.column,
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
    width:'750px',
  };

  return <ReactEcharts option={option} style={chartStyle} />;
}

export default ChartBar;
