const data = {
    labels: [
        'Organization 1',
        'Organization 2',
        'Organization 3'
    ],
    datasets: [{
        label: 'Token Distribution',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



import React from 'react'

const DonutSeries = () => {
  return (
      <Doughnut data={data} />
  )
}

export default DonutSeries