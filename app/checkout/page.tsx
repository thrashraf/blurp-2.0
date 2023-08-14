"use client"

import React, { useCallback, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import useStore from "@/state/store"

import { Button } from "@/components/ui/button"
import AppBar from "@/components/appBar"
import HorizontalMenu from "@/components/horizontalMenu"
import { parseMoney } from "@/lib/parseMoney"

export default function Page() {
  const router = useRouter()

  const cart = useStore((state) => state.cart)
  const cartTotal = useStore((state) => state.cartTotal)
  const cartItemsCount = useStore((state) => state.cartItemsCount)

  const setCartTotal = useStore((state) => state.setCartTotal)
  const setCart = useStore((state) => state.setCart)
  const removeCart = useStore((state) => state.removeCart)
  const setCartItemsCount = useStore((state) => state.setCartItemsCount)
  const clearCart = useStore((state) => state.clearCart)

  const getCartItemsCount = useCallback(
    () => setCartItemsCount(),
    [setCartItemsCount]
  )
  const addToCart = useCallback(
    (item: any) => {
      setCart(item)
    },
    [setCart]
  )

  useEffect(() => {
    setCartTotal()
    getCartItemsCount()
  }, [setCartTotal, cart, getCartItemsCount])

  return (
    <div>
      <AppBar
        rightComponent={
          <Button
            className="bg-transparent text-lg text-primary"
            onClick={() => {
              clearCart()
              router.push("/")
            }}
          >
            Clear
          </Button>
        }
      />
      <div className="mt-10">
        <h1 className="text-2xl font-semibold">
          {cartItemsCount ?? 0} Items in the cart for
        </h1>
        <h1 className="text-2xl font-semibold">{parseMoney(cartTotal)}</h1>
      </div>

      <div className="mt-10 w-full border-b-[1px] border-b-gray-300 pb-2 text-gray-400">
        <span>Cart</span>
      </div>

      <div className="mt-5">
        {cart?.map((item: any) => (
          <HorizontalMenu
            key={item?.id}
            imageUrl={item?.image_url}
            name={item?.product_name}
            price={item?.product_price}
            quantity={item?.quantity}
            addToCart={() => addToCart(item)}
            removeFromCart={() => removeCart(item)}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 shadow-container-top-xl">
        <Button className="my-3 w-full text-white">Online banking</Button>
        <Button className="w-full text-white" onClick={() => router.push('/form')}>Pay at cashier</Button>
      </div>
    </div>
  )
}
