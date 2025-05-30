import React from 'react'
import LineChart from '../components/charts/LineChart'

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className='row'>
        <div className='col-sm-6'> 
          <h3>N1 เขื่อนภูมิพล</h3>
          <div className='card'>
            <div className='card-body'>
              <LineChart code="N1" />
            </div>
          </div>
        </div>
        <div className='col-sm-6'> 
           <h3>N2 เขื่อนสิริกิติ์</h3>
          <div className='card'>
            <div className='card-body'>
              <LineChart code="N2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
