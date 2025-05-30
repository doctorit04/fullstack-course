// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);     // ข้อมูลที่โหลดได้
  const [loading, setLoading] = useState(true); // สถานะกำลังโหลด
  const [error, setError] = useState(null);     // เก็บข้อผิดพลาด

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      
      try {
        // ดึง token จาก localStorage
        const token = localStorage.getItem('token');

        axios.request({
        headers: {
            Authorization: 'Bearer '+token
        },
        method: "GET",
        url: url
        }).then(response => {
            // set the response data to state
            setData(response.data);
            setError(null);

            // log the response data to console
            console.log(response.data);
      });

      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // ป้องกัน memory leak
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;