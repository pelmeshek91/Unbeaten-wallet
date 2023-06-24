// import React from 'react';
// import ReactEcharts from 'echarts-for-react';

// function ChartBar({ list }) {
//   const row = [];
//   const column = [];

//   for (const key in list) {
//     if (key !== 'total') {
//       row.push(key);
//       column.push({ value: list[key], category: key });
//     }
//   }

//   const option = {
//     grid: {
//       top: 50,
//       left: '10%',
//       right: '10%',
//       bottom: 0,
//     },
//     xAxis: {
//       type: 'value',
//       data: row.reverse(),
//       axisLine: {
//         show: false,
//       },
//       axisTick: {
//         show: false, 
//       },
//       axisLabel: {
//         show: false, 
//       },
//       splitLine: {
//         show: false, 
//       },
//     },
//     yAxis: {
//       type: 'category',
//       data: row,
//       axisLine: {
//         show: false, 
//       },
//       axisTick: {
//         show: false, 
//       },
//       axisLabel: {
//         show: false, 
//       },
//       splitLine: {
//         show: false, 
//       },
//     },
//     series: [
//       {
//         type: 'bar',
//         barCategoryGap: '25',
//         barWidth: '15',
//         data: column.reverse().map((item) => item.value),
//         itemStyle: {
//           borderRadius: [0, 10, 10, 0],
//           color: function (params) {
//             if ((params.dataIndex + 1) % 3 === 1) {
//               return {
//                 type: 'linear',
//                 x: 0,
//                 y: 0,
//                 x2: 1,
//                 y2: 0,
//                 colorStops: [
//                   {
//                     offset: 0,
//                     color: '#60C470',
//                   },
//                   {
//                     offset: 1,
//                     color: '#383C46',
//                   },
//                 ],
//               };
//             } else {
//               return {
//                 type: 'linear',
//                 x: 0,
//                 y: 0,
//                 x2: 1,
//                 y2: 0,
//                 colorStops: [
//                   {
//                     offset: 0,
//                     color: '#5B5B6D',
//                   },
//                   {
//                     offset: 1,
//                     color: '#373745',
//                   },
//                 ],
//               };
//             }
//           },
//         },
//      label: {
//   show: true,
//   position: 'top',
//   color: 'rgba(199, 204, 220, 1)',
//   formatter: function (params) {
//     const data = column[params.dataIndex];
//     const category = data.category;
//     const value = data.value;
//     return `${category}            ${value} UAH`;
//   },
// },

//       },
//     ],
//   };

//   return <ReactEcharts option={option} />;
// }

// export default ChartBar;
