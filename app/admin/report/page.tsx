"use client"

import React, { useEffect, useState } from "react"
import {
  getDashboardData,
  ordersSocket,
  unSubscribeOrdersSocket,
} from "@/actions/dashboard"
import { useQuery } from "@tanstack/react-query"

import TopPurchased from "@/components/admin/Report/TopPurchased"

type Props = {}

const Page = (props: Props) => {
  const [vendorId, setVendorId] = useState<string | null>(
    localStorage?.getItem("vendor")
  )

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-dashboard"],
    queryFn: () => getDashboardData(vendorId ?? ""),
    enabled: !!vendorId,
  })

  useEffect(() => {
    ordersSocket()
    return () => {
      unSubscribeOrdersSocket()
    }
  }, [data])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between gap-5">
        <TopPurchased mode="Tag" data={data?.topSales} />
        <TopPurchased mode="Tag" data={data?.topSales} />
        <TopPurchased mode="Tag" data={data?.topSales} />
      </div>
    </div>
  )
}

export default Page
