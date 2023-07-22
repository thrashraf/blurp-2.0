'use client'

import { Collections, OrdersRecord } from "@/pocketbase-types"
import pb from "@/utils/pocketbase"

export async function placeOrder(props: OrdersRecord) {
  try {
    return pb.collection(Collections.Orders).create({
      ...props
    })
  } catch (error) {
    console.log(error)
  }
}