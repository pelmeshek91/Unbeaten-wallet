



// import React, { useEffect, useState } from 'react';
// import ReactEcharts from 'echarts-for-react';
// import axios from 'axios';


// axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

// export const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };


// /* AUTH */

// export const registerUser = async user => {
//   const { data } = await axios.post('/auth/register', user);
//   return data;
// };
// export const loginUser = async (
//   user = {
//     email: '',
//     password: '',
//   }
// ) => {
//   const { data } = await axios.post('/auth/login', user);
//   setAuthHeader(data.accessToken);
//   return data;
// };

// function ChartBar() {
//   const [chartData, setChartData] = useState([]);

 
//   const fetchData = async () => {
//     try {
//       const { data } = await axios.get('/transaction/period-data');
//       const { total, incomesData } = data.expenses;
//       const chartData = Object.entries(incomesData).map(([category, { total }]) => ({
//         name: category,
//         value: total,
//       }));
//       setChartData(chartData);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };
//  useEffect(() => {
//     fetchData();
//   }, []);

//   const option = {
//     color: ['#3398DB'],
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     grid: {},
//     xAxis: [
//       {
//         type: 'category',
//         data: chartData.map(item => item.name),
//         axisTick: {
//           alignWithLabel: true
//         },
//         axisLabel: {
//           color: '#C7CCDC', 
//           interval: 0, 
//           rotate: 25
//         }
//       }
//     ],
//     yAxis: {
//       show: false 
//     },
//     series: [
//       {
//         name: 'none',
//         type: 'bar',
//         barWidth: '60%',
//         data: chartData.map(item => item.value),
//         itemStyle: {
//           borderRadius: [8, 8, 0, 0],
//           color: function(params) {
//             
//             if ((params.dataIndex + 1) % 3 === 1) {
//               return {
//                 type: 'linear',
//                 x: 0,
//                 y: 0,
//                 x2: 0,
//                 y2: 1,
//                 colorStops: [
//                   {
//                     offset: 0,
//                     color: '#60C470'
//                   },
//                   {
//                     offset: 1,
//                     color: '#383C46'
//                   }
//                 ]
//               };
//             } else {
//               return {
//                 type: 'linear',
//                 x: 0,
//                 y: 0,
//                 x2: 0,
//                 y2: 1,
//                 colorStops: [
//                   {
//                     offset: 0,
//                     color: '#5B5B6D'
//                   },
//                   {
//                     offset: 1,
//                     color: '#373745'
//                   }
//                 ]
//               };
//             }
//           }
//         }
//       }
//     ]
//   };

//   return <ReactEcharts option={option} />;
// }

// export default ChartBar;

import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ChartBar() {
  const option = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {},
    xAxis: [
      {
        type: 'category',
        data: ['Products', 'Helth', 'Sport', 'Auto', 'Other', 'Kitchen', 'Gifts'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: '#C7CCDC', // Змінюємо колір тексту по осі x
          interval: 0, // Показуємо всі підписи по осі x
          rotate: 45 // Поворот тексту на 45 градусів
        }
      }
    ],
    yAxis: {
      show: false // Прибираємо відображення по осі y
    },
    series: [
      {
        name: 'none',
        type: 'bar',
        barWidth: '60%',
        data: [360, 340, 200, 334, 390, 330, 220],
        itemStyle: {
          borderRadius: [8, 8, 0, 0], // Додаємо border-radius
          color: function(params) {
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
                    color: '#60C470'
                  },
                  {
                    offset: 1,
                    color: '#383C46'
                  }
                ]
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
                    color: '#5B5B6D'
                  },
                  {
                    offset: 1,
                    color: '#373745'
                  }
                ]
              };
            }
          }
        }
      }
    ]
  };

  return <ReactEcharts option={option} />;
}

export default ChartBar;
