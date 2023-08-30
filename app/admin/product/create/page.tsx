"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { CreateProduct } from "@/actions/products"
import { useMutation } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import UploadImage from "@/components/UploadImage"

type Props = {}

const Page = (props: Props) => {
  const router = useRouter()
  const {
    mutateAsync: createProduct,
    isLoading,
    isError,
  } = useMutation(CreateProduct)

  const [product, setProduct] = useState({
    product_name: "",
    product_price: 0,
    image_url: "",
    vendor_id: localStorage?.getItem("vendor"),
  })

  const createProductAction = async () => {
    try {
      await createProduct({
        product_name: product.product_name,
        product_price: product.product_price,
        image_url: product.image_url,
        vendor_id: product.vendor_id ?? "",
      }).then((res) => {
        router?.push("/admin/product")
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.message,
      })
    }
  }

  return (
    <div className="rounded-xl bg-white py-10">
      <form
        action={createProductAction}
        className="m-auto flex flex-col items-center"
      >
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
          <Button
            disabled={isLoading}
            type="submit"
            className=" mt-20 w-full bg-admin"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Page
