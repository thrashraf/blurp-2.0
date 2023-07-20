"use server"

import pb from "@/utils/pocketbase"

interface Product {
  product_name: string,
  product_price: number,
  image_url: string,
}

export async function GetProducts() {
  try {
    return pb.collection("Products").getFullList({
      expand: "image_url,addons_id",
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