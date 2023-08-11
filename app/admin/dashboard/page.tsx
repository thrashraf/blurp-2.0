'use client'

import { getDashboardData, ordersSocket, unSubscribeOrdersSocket } from '@/actions/dashboard'
import DailySales from '@/components/admin/Dashboard/DailySales'
import ReportSalesGraph from '@/components/admin/Dashboard/ReportSalesGraph'
import TargetSales from '@/components/admin/Dashboard/TargetSales'
import TopSales from '@/components/admin/Dashboard/TopSales'
import TopSalesChart from '@/components/admin/Dashboard/TopSalesChart'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {

  const [vendorId, setVendorId] = useState<string | null>(null)

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-dashboard"],
    queryFn: () => getDashboardData(vendorId ?? ''),
    enabled: !!vendorId
  });

  useEffect(() => {
    ordersSocket()
    return () => {
      unSubscribeOrdersSocket()
    }
  }, [data])

  useEffect(() => {
    setVendorId(localStorage?.getItem("vendor"))
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between gap-5'>
        <DailySales
          mode='Daily'
          percentage={data?.daily?.percentage}
          isPositive={data?.daily?.isPositive}
          total={data?.daily?.total}
          date={data?.daily?.date}
        />
        <DailySales
          mode='Weekly'
          percentage={data?.weekly?.percentage}
          isPositive={data?.weekly?.isPositive}
          total={data?.weekly?.total}
          date={data?.weekly?.date}
        />
        <DailySales
          mode='Monthly'
          percentage={data?.monthly?.percentage}
          isPositive={data?.monthly?.isPositive}
          total={data?.monthly?.total}
          date={data?.monthly?.date}
        />
      </div>
      <div className='flex justify-between gap-5'>
        <TargetSales
          target={data?.target?.target}
          current={data?.target?.current}
        />
        <ReportSalesGraph data={data?.sales} />
      </div>
      <div className='flex justify-between gap-5'>
        <TopSales data={data?.topSales} />
        <TopSalesChart data={data?.topSales} />
      </div>
    </div>
  )
}

export default Page