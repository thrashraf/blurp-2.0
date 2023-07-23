'use client'

import DailySales from '@/components/admin/Dashboard/DailySales'
import ReportSalesGraph from '@/components/admin/Dashboard/ReportSalesGraph'
import TargetSales from '@/components/admin/Dashboard/TargetSales'
import TopSales from '@/components/admin/Dashboard/TopSales'
import TopSalesChart from '@/components/admin/Dashboard/TopSalesChart'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between gap-5'>
        <DailySales
          mode='Daily'
          percentage={50}
          isPositive={true}
          total={3000}
          date='10 June 02.00 AM - 11 June 01.59 AM'
        />
        <DailySales
          mode='Weekly'
          percentage={30}
          isPositive={false}
          total={332000}
          date='This Week'
        />
        <DailySales
          mode='Monthly'
          percentage={30}
          isPositive={false}
          total={3123000}
          date='June'
        />
      </div>
      <div className='flex justify-between gap-5'>
        <TargetSales
          target={600000}
          current={183958}
        />
        <ReportSalesGraph />
      </div>
      <div className='flex justify-between gap-5'>
        <TopSales />
        <TopSalesChart />
      </div>
    </div>
  )
}

export default page