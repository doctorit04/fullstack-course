import React from 'react'
import { Line } from 'react-chartjs-2';
import useFetch from '../../hooks/useFetch';

// import chart component จาก react-chartjs-2
import { Bar } from 'react-chartjs-2';
// import chart.js แบบ modular (ต้อง import chart elements ด้วย)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// ลงทะเบียน elements ของ Chart.js ที่ต้องใช้
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function LineChart({code}) {


  //const url = 'http://localhost:3000/api/damvolume/data/' + code;
  //const { data: volumeData} = useFetch(url);


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,4,5,6,7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,2,3,4,5,6,7],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <div>
     <Line options={options} data={data} />;
    </div>
  )
}
