"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import UploadImage from "@/components/UploadImage"

type Props = {}

const Page = (props: Props) => {
  const [product, setProduct] = useState({
    product_name: "",
    product_price: 0,
    image_url: "",
    vendor_id: localStorage?.getItem("vendor"),
  })

  return (
    <div className="mt-10 h-full">
      <form action={() => console.log(product)} className="m-auto flex h-full max-w-[60%] flex-col items-center">
        <UploadImage
          setFiles={(file: string) => {
            setProduct({
              ...product,
              image_url: file,
            })
          }}
        />

        <div className="my-10 w-full px-8">
          <Label htmlFor="name">Product Name</Label>
          <Input
            required={true}
            id="name"
            value={product.product_name}
            onChange={(e) => {
              setProduct({
                ...product,
                product_name: e.target.value,
              })
            }}
          />
        </div>
        <div className="mb-10 w-full px-8">
          <Label htmlFor="price">Product Price</Label>
          <Input
            required={true}
            id="price"
            type="number"
            value={product.product_price}
            onChange={(e) => {
              setProduct({
                ...product,
                product_price: +e?.target.value,
              })
            }}
          />
        </div>

        <Button type="submit" className="my-20 w-[90%] bg-admin px-8">
          Create
        </Button>
      </form>
    </div>
  )
}

export default Page
