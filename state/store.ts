import { create } from "zustand"

interface Store {
  storeId: string

  cartTotal: number
  cart: any[]
  cartItemsCount: number

  setStoreId: (storeId: string) => void

  setCartTotal: () => void
  setCart: (cart: any) => void
  removeCart: (cart: any) => void
  setCartItemsCount: () => void
  clearCart: () => void
}

const useStore = create<Store>((set) => ({
  storeId: "",

  cartTotal: 0,
  cart: [],
  cartItemsCount: 0,

  setStoreId: (state) => set(() => ({ storeId: state })),

  setCartTotal: () => {
    const totalPrice = useStore.getState().cart.map((item: any) => {
      const price = item?.product_price * item?.quantity ?? 0
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
    const isCartInCart = useStore.getState().cart.find(
      (item: any) => item.id === cart.id
    )
    if (isCartInCart) {
      const newCart = useStore.getState().cart.map((item: any) => {
        if (item.id === cart.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      set(() => ({ cart: newCart }))
    } else {
      set((state) => ({ cart: [...state.cart, {...cart, quantity: 1}] }))
    }
  },
  removeCart(cart) { 
    if (cart.quantity > 1) {
      const newCart = useStore.getState().cart.map((item: any) => {
        if (item.id === cart.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      set(() => ({ cart: newCart }))
    }
    else {
      const newCart = useStore.getState().cart.filter(
        (item: any) => item.id !== cart.id
      )
      set(() => ({ cart: newCart }))
    }
  },
  setCartItemsCount: () => {
    const cartItemsCount = useStore.getState().cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    )
    set(() => ({ cartItemsCount: cartItemsCount }))
  },
  clearCart: () => set(() => ({ cart: [] })),
}))
export default useStore
