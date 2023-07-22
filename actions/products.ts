"use client"

import pb from "@/utils/pocketbase"

interface Product {
  product_name: string,
  product_price: number,
  image_url: string,
  vendor_id: string,
}

export async function GetProducts(vendor_id: string) {
  try {
    return pb.collection("Products").getFullList({
      $autoCancel: false,
      expand: "image_url,addons_id",
      filter: `(vendor_id="${vendor_id}")`,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function CreateProduct(props: Product) {
  try {
    return pb.collection("Products").create({
      ...props
    })
  } catch (error) {
    console.log(error)
  }
}