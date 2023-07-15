import { create } from "zustand"

interface Store {
  storeId: string

  cartTotal: number
  cart: any[]
  cartItemsCount: number

  setStoreId: (storeId: string) => void

  setCartTotal: () => void
  setCart: (cart: any) => void
  setCartItemsCount: (cartItemsCount: number) => void
}

const useStore = create<Store>((set) => ({
  storeId: "",

  cartTotal: 0,
  cart: [],
  cartItemsCount: 0,

  setStoreId: (state) => set(() => ({ storeId: state })),

  setCartTotal: () => {
    const totalPrice = useStore.getState().cart.map((item: any) => {
      const price = item?.product_price * (item?.quantity ?? 1)
      const addOnsPrice =
        item.selectedAddons?.reduce(
          (acc: number, item: any) => acc + (item.price ?? 0),
          0
        ) ?? 0
      return (price + addOnsPrice).toFixed(2)
    })

    const total = totalPrice.reduce(
      (acc: number, item: any) => acc + parseFloat(item),
      0
    )

    set(() => ({ cartTotal: total }))
  },
  setCart(cart) {
    set((state) => ({ cart: [...state.cart, cart] }))
  },
  setCartItemsCount: (state) => set(() => ({ cartItemsCount: state })),
}))
export default useStore
