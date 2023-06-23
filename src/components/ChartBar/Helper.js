
//   const option = {
//     color: ['#3398DB'],
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow',
//       },
//     },
//     grid: {},
//     xAxis: [
//       {
//         type: 'category',
//         data: chartData.map(data => data.name),
//         axisTick: {
//           alignWithLabel: true,
//         },
//         axisLabel: {
//           color: '#C7CCDC',
//           interval: 0,
//         },
//       },
//     ],
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         show: false,
//         color: 'rgba(199, 204, 220, 1)',
//       },
//     },
//     series: [
//       {
//         name: 'Category',
//         type: 'bar',
//         barCategoryGap: '25',
//         data: chartData.map(data => data.value),
//         itemStyle: {
//           borderRadius: [8, 8, 0, 0],
//           color: function (params) {
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
//                 x2: 0,
//                 y2: 1,
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
//         label: {
//           show: true,
//           position: 'top',
//           color: 'rgba(199, 204, 220, 1)',
//           formatter: '{c} UAH',
//         },
//         barWidth: 38,
//       },
//     ],
//   };

//   const chartStyle = {
//     background:
//       'linear-gradient(150deg, #383847 0%, rgba(56, 56, 71, 0.29) 100%)',
//     borderRadius: '30px',
//   };

//   return <ReactEcharts option={option} style={chartStyle} />;
// };

// export default ChartBar;
