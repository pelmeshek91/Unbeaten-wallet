import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ChartBarMobile({ list }) {
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
    grid: {
      top: 50,
      left: '10%',
      right: '10%',
      bottom: 0,
    },
    xAxis: {
      type: 'value',
      data: newList.column,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: newList.row,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        type: 'bar',
        barCategoryGap: '25',
        barWidth: '15',
        data: newList.column,
        itemStyle: {
          borderRadius: [0, 10, 10, 0],
          color: function (params) {
            if ((params.dataIndex + 1) % 3 === 1) {
              return {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
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
                x2: 1,
                y2: 0,
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
          formatter: function (params) {
            const data = newList.column[params.dataIndex];
            const category = newList.row[params.dataIndex];

            return `${category}          ${data} UAH`;
          },
        },
      },
    ],
  };
   const chartStyle = {
    minHeight: '280px',
    minWidth:'320px',
  };

  return <ReactEcharts option={option} style={chartStyle} />;
}

export default ChartBarMobile;
