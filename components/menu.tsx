import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import Image from 'next/image'

type Props = {
  imageUrl: string
  price: number
  name: string
}

const Menu = (props: Props) => {
  return (
    <Card className='max-w-[300px] rounded-[25px]'>
      <Image
        src={props.imageUrl}
        alt={props.name}
        width={300}
        height={300}
      />
      <CardContent className='p-3'>
        <CardTitle className='text-md mb-2 text-center'>{props.name}</CardTitle>
        <CardDescription className='rounded-[25px] bg-gray-300 py-2 text-center text-sm text-black'>RM {props.price}</CardDescription>
      </CardContent>
    </Card>
  )
}
export default Menu