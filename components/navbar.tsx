import React, { useCallback, useEffect } from 'react'
import { Icons } from './icons'
import useStore from '@/state/store'
import { useRouter } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter();
  const cart = useStore(state => state.cart)
  const cartItemsCount = useStore(state => state.cartItemsCount)
  const setCartItemsCount = useStore(state => state.setCartItemsCount)
  const getCartItemsCount = useCallback(() => setCartItemsCount(), [setCartItemsCount])

  useEffect(() => {
    getCartItemsCount()
  }, [getCartItemsCount, cart])

  return (
    <nav className='flex items-center justify-between rounded-lg bg-primary p-3 text-white' onClick={() => cartItemsCount > 0 && router.push('/checkout')}>
      <div>
        <h1>The Paddock</h1>
        <p>Table: 1</p>
      </div>

      <div className='relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white'>
        <span className='absolute -right-2 -top-2 m-auto rounded-full bg-red-500 px-2 py-1 text-xs font-bold'>{cartItemsCount}</span>
        <Icons.cart className='text-black' />
      </div>
    </nav>
  )
}

export default Navbar