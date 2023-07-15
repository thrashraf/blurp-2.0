import React from 'react'
import { Icons } from './icons'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between rounded-lg bg-primary p-3 text-white'>
      <div>
        <h1>The Paddock</h1>
        <p>Table: 1</p>
      </div>

      <div className='relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white'>
        <span className='absolute -right-2 -top-2 m-auto rounded-full bg-red-500 px-2 py-1 text-xs font-bold'>5</span>
        <Icons.cart />
      </div>
    </nav>
  )
}

export default Navbar