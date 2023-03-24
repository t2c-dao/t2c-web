import React from 'react'
import Header from '@/components/Utils/Header';
import DetailSeriesChart from '@/components/Dashboard/DetailSeries';
import DonutSeries from '@/components/Dashboard/DonutSeries';
import RadarSeries from '@/components/Dashboard/RadarSeries';

const Dashboard = () => {
  return (
    <div className='min-h-[100vh] w-full flex flex-col bg-[#111217] text-white items-center'>
      <div className='w-full h-max'>
        <Header />
      </div>

      <div className='w-full flex max-w-7xl items-center my-2 justify-around'>
        <div className='w-max h-[40vh] bg-white'>
          <DonutSeries />
        </div>
        <div className='bg-white h-[40vh] w-max'>
          <RadarSeries />
        </div>
      </div>

      <div className='w-full flex max-w-7xl items-center'>
        <div className='w-[70%] h-[45vh]'>
          <DetailSeriesChart />
        </div>
        <div className='w-[28%] flex justify-center flex-col'>
          <h1 className='text-lg'>This stacking detail series shows the flow of T2C Tokens across the recent 5 months</h1>

          <p className='text-sm my-2'>Select on a data point to know more about it:</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
