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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {},
    xAxis: [
      {
        type: 'category',
        data: row,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: '#C7CCDC', // Змінюємо колір тексту по осі x
          interval: 0, // Показуємо всі підписи по осі x
          rotate: 45, // Поворот тексту на 45 градусів
        },
      },
    ],
    yAxis: {
      show: false, // Прибираємо відображення по осі y
    },
    series: [
      {
        name: 'none',
        type: 'bar',
        barWidth: '60%',
        data: column,
        itemStyle: {
          borderRadius: [8, 8, 0, 0], // Додаємо border-radius
          color: function (params) {
            // Змінюємо колір кожного третього стовбця
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
      },
    ],
  };

  return <ReactEcharts option={option} />;
}

export default ChartBar;
