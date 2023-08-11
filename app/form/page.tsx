"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { placeOrder } from "@/actions/orders"
import { OrdersOrderStatusOptions } from "@/pocketbase-types"
import useStore from "@/state/store"
import { useMutation } from "@tanstack/react-query"

import useInput from "@/hooks/useInput"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AppBar from "@/components/appBar"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  const { value: name, onChange: setName } = useInput()
  const { value: number, onChange: setNumber } = useInput()
  const [vendor, setVendor] = useState<string | null>(
    null
  )

  const cart = useStore((state) => state.cart)
  const cartTotal = useStore((state) => state.cartTotal)
  const cartItemsCount = useStore((state) => state.cartItemsCount)
  const { mutateAsync: order, isLoading, isError } = useMutation(placeOrder, {
    onSuccess: () => {
      router.replace('/form/success-order')
    },
    onError: () => {
      console.log("error")
    }
  })

  const createOrder = async () => {
    if (vendor === null) return;

    const ordersDetail = cart?.map((item: any) => ({
      quantity: item?.quantity,
      product_id: item?.id
    })
    )

    try {
      await order({
        name,
        phone_number: number,
        order_status: OrdersOrderStatusOptions.pending,
        total_price: cartTotal,
        product_id: cart?.map((item: any) => item?.id),
        vendor_id: vendor ?? "",
        addons_id: cart?.map((item: any) => item?.addons_id),
        orders_detail: ordersDetail
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    setVendor(localStorage?.getItem("vendor"))
  }, [])

  return (
    <form action={createOrder}>
      <AppBar />
      <Image src="/picture.svg" alt="SVG Image" width={300} height={200} />
      <Card className="mt-5 w-[350px] border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-sm">
            Enter your mobile number to proceed
          </CardTitle>
        </CardHeader>
        <CardContent className="border-0">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Please enter your name"
                  value={name}
                  onChange={setName}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Number Phone</Label>
                <Input
                  id="name"
                  placeholder="+60"
                  value={number}
                  onChange={setNumber}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between border-0">
          <Button type="submit" variant="default" className="w-full">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
