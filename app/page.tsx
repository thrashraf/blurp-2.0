'use client'

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import SearchBar from "@/components/searchBar"
import Menu from "@/components/menu"
import GridContainer from "@/components/gridContainer"
import pb from "@/utils/pocketbase"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useMemo } from "react"
import getImageLink from "@/utils/getImageLink"

const fetchMenus = async () => {
  const data = await pb.collection("Products").getFullList({
    expand: 'image_url'
  })

  const sanitizedData = data.map((menu) => ({
    id: menu.id,
    product_name: menu.product_name,
    product_price: menu.product_price,
    image_url: menu?.expand?.image_url?.map((image: any) => {
      return getImageLink(image)
    }
    ) ?? [],
  }))

  return sanitizedData
}

export default function IndexPage() {

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => fetchMenus(),
  });

  return (
    <>
      <Navbar />
      <SearchBar
        label="Food For You"
        containerStyle="my-5"
        inputStyle="px-2 py-5 my-2 rounded-lg bg-gray-100"
        placeholder="Search"
      />
      <GridContainer>
        {data?.map((menu) => (
          <Menu
            key={menu?.id}
            imageUrl={menu?.image_url[0]}
            name={menu?.product_name}
            price={menu?.product_price}
          />
        ))}
      </GridContainer>
    </>
  )
}
