import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartBarExpenses() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Products', 'Alcohol', 'Entertain', 'Health', 'Technique'],
      datasets: [
        {
          
          data: [1200, 120, 350, 1250, 600],
          borderColor: 'transparent',
          borderRadius: '8px 8px 0px 0px',
          backgroundColor: 'linear-gradient(180deg, #60C470 0%, #383C46 100%)',
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
        },
        },
        maintainAspectRatio: false,
      responsive: true,
    });
  });

    return <>
      <Bar data={chartData} options={chartOptions}/>
  </>;
}

export default ChartBarExpenses;
