import React from 'react'
import Image from 'next/image'
import { Icons } from './icons'
import { Button } from './ui/button'

type Props = {
  imageUrl: string
  price: number
  name: string
  quantity: number
  addToCart?: () => void
  removeFromCart?: () => void
}

const HorizontalMenu = (props: Props) => {
  return (
    <div className='my-5 flex items-center justify-between'>
      <Image
        src={props?.imageUrl}
        alt={props.name}
        width={70}
        height={70}
      />
      <div className='flex w-[40%] flex-col justify-between'>
        <span className='text-sm'>{props.name}</span>
        <span className='text-sm'>RM {props.price}</span>
      </div>
      <div className='flex w-[20%] justify-between'>
        <Button className='h-6 w-6 rounded-full bg-gray-200 p-2' onClick={props.addToCart}>
          <Icons.plus className='h-2 w-2' />
        </Button>
        <span>{props?.quantity}</span>
        <Button className='h-6 w-6 rounded-full bg-gray-200 p-2' onClick={props.removeFromCart}>
          <Icons.minus className='h-2 w-2' />
        </Button>
      </div>
    </div>
  )
}

export default HorizontalMenu