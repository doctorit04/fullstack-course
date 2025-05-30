import React, { useEffect, useState } from 'react'
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
  Legend,
  PointElement,
  LineElement
} from 'chart.js';


// ลงทะเบียน elements ของ Chart.js ที่ต้องใช้
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);


export default function LineChart({code}) {


  //useState({}); // สร้าง state สำหรับเก็บข้อมูลที่ดึงมาจาก API
  //const [data, setData] = useState({}); // สร้าง state สำหรับเก็บข้อมูลที่ดึงมาจาก API
  //const [loading, setLoading] = useState(true); // สร้าง state สำหรับเช็คสถานะการโหลดข้อมูล
  //const [error, setError] = useState(null); // สร้าง state สำหรับเก็บ error หากมี
  //const [code, setCode] = useState('N1'); // สร้าง state สำหรับเก็บ code เขื่อน
  const [volumeData, setVolumeData] = useState([]); // สร้าง state สำหรับเก็บข้อมูลปริมาณน้ำ
  //const [labels, setLabels] = useState([]); // สร้าง state สำหรับเก็บ labels ของกราฟ
  //const [datasets, setDatasets] = useState([]); // สร้าง state สำหรับเก็บ datasets ของกราฟ
  // const [url, setUrl] = useState('http://localhost:3000/api/damvolume/data/' + code); // สร้าง state สำหรับเก็บ URL ของ API



  // ใช้ useFetch เพื่อดึงข้อมูลจาก API

  useEffect(() => {
     console.log('LineChart component mounted with code:', code);


  }, [code]);
  // console.log('LineChart component code:', code);

  console.log('LineChart code:', code);
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
      data: [11,22,33,44,55,66,77],
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
