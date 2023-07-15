import React from 'react'
import { Icons } from './icons'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between p-3'>
      <div>
        <h1>The Paddock</h1>
        <p>Table: 1</p>
      </div>

      <div className='relative flex h-[50px] w-[50px] rounded-full bg-white'>
        <Icons.cart />
      </div>
    </nav>
  )
}

export default Navbar