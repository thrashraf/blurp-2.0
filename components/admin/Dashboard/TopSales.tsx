import { Card, CardContent } from '@/components/ui/card'
import { parseMoney } from '@/lib/parseMoney'
import React from 'react'

type Props = {}

const TopSales = (props: Props) => {

  const topSales = [
    {
      name: 'Mineral water',
      quantity: 100,
      total: 100000
    },
    {
      name: 'Teh O Ais',
      quantity: 150,
      total: 150000
    }
  ]

  return (
    <Card className='max-h-[400px] w-full rounded-3xl'>
      <CardContent className='overflow-auto p-5'>
        <h1 className='font-bold'>Top Sales</h1>
        {topSales?.map((item, index) => (
          <div className='my-5 flex justify-between'>
            <div>
              <h1>{item?.name}</h1>
              <p className='text-sm text-muted-foreground'>{item.quantity}</p>
            </div>

            <h1 className='text-sm font-semibold'>{parseMoney(item?.total)}</h1>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopSales