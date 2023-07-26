"use client"

import React, { useCallback, useMemo, useState } from "react"
import Link from "next/link"
import { GetProducts } from "@/actions/products"
import getImageLink from "@/utils/getImageLink"
import pb from "@/utils/pocketbase"
import { useQuery } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import Menu from "@/components/menu"

type Props = {}

const Page = (props: Props) => {
  const [vendorId, setVendorId] = useState<string | null>(
    localStorage?.getItem("vendor")
  )

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () =>
      pb.collection("Products").getFullList({
        $autoCancel: false,
        expand: "image_url,addons_id",
        filter: `(vendor_id="${vendorId}")`,
      }),
    enabled: !!vendorId,
  })

  const sanitizedData = useCallback(() => {
    if (!data) return []

    return data.map((menu) => ({
      id: menu.id,
      product_name: menu.product_name,
      product_price: menu.product_price,
      image_url: getImageLink(menu?.expand?.image_url as any),
      addons: menu?.expand?.addons_id ?? [],
    }))
  }, [data])

  const productsData = useMemo(() => sanitizedData(), [sanitizedData])

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <Button variant={"admin"}>
          <Link href={"/admin/product/create"}>Create Product</Link>
        </Button>
      </div>

      <div className="my-14 grid grid-cols-5 gap-5">
        {productsData?.map((menu) => (
          <Menu
            key={menu?.id}
            imageUrl={menu?.image_url}
            name={menu?.product_name}
            price={menu?.product_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
