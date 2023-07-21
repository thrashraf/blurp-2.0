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
    <div className="rounded-xl bg-white py-10">
      <form action={() => console.log(product)} className="m-auto flex flex-col items-center">
        <UploadImage
          setFiles={(file: string) => {
            setProduct({
              ...product,
              image_url: file,
            })
          }}
        />

        <div className="my-10 flex w-full items-center justify-between">
          <div className="w-full px-8">
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
              className="w-full"
            />
          </div>
          <div className="w-full px-8">
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
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full px-8">
          <Button type="submit" className=" mt-20 w-full bg-admin">
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Page
