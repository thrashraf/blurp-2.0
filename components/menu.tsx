import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import Image from 'next/image'
import { parseMoney } from '@/lib/parseMoney'

type Props = {
  imageUrl: string
  price: number
  name: string
  onClick?: () => void
}

const Menu = (props: Props) => {
  return (
    <Card onClick={props.onClick} className='mx-auto max-h-[250px] max-w-[150px] rounded-[25px]'>
      <Image
        src={props.imageUrl}
        alt={props.name}
        width={150}
        height={150}
        priority={true}
        className='max-h-[150px] rounded-[25px] object-cover p-2'
      />
      <CardContent className='p-3'>
        <CardTitle className='text-md mb-2 max-w-[250px] truncate text-center' >{props.name}</CardTitle>
        <CardDescription className='rounded-[25px] bg-gray-300 py-2 text-center text-sm text-black'>{parseMoney(props.price)}</CardDescription>
      </CardContent>
    </Card>
  )
}
export default Menu