'use client'

import Navbar from "@/components/navbar"
import SearchBar from "@/components/searchBar"
import Menu from "@/components/menu"
import GridContainer from "@/components/gridContainer"
import { useQuery } from "@tanstack/react-query"
import getImageLink from "@/utils/getImageLink"
import { BottomDrawer } from "@/components/bottomDrawer"
import { useState } from "react"
import { GetProducts } from "@/actions/products"
import useInput from "@/hooks/useInput"

export default function IndexPage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [product, setProduct] = useState({});
  const [vendorId, setVendorId] = useState<string | null>(localStorage?.getItem("vendor") ?? null)
  const { value: search, onChange: setSearch } = useInput();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => GetProducts(vendorId ?? ''),
    enabled: !!vendorId
  });

  const sanitizedData = data?.map((menu: any) => ({
    id: menu.id,
    product_name: menu.product_name,
    product_price: menu.product_price,
    image_url: getImageLink(menu?.expand?.image_url as any),
    addons: menu?.expand?.addons_id ?? []
  }))

  return (
    <>
      <Navbar />
      <SearchBar
        label="Food For You"
        containerStyle="my-5"
        inputStyle="px-2 py-5 my-2 rounded-lg bg-gray-100"
        placeholder="Search"
        value={search}
        onChange={setSearch}
      />
      <GridContainer>
        {sanitizedData?.map((menu: any) => (
          <Menu
            key={menu?.id}
            imageUrl={menu?.image_url}
            name={menu?.product_name}
            price={menu?.product_price}
            onClick={() => {
              setProduct(menu)
              setOpenDrawer(true)
            }}
          />
        ))}
      </GridContainer>
      <BottomDrawer
        open={openDrawer}
        onOpenChange={() => setOpenDrawer(false)}
        product={product}
      />
    </>
  )
}
