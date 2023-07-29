import { Card, CardContent } from '@/components/ui/card'
import { parseMoney } from '@/lib/parseMoney'
import React from 'react'

interface Data {
  product_name: string,
  product_price: number,
  total: number,
  product_id: string,
}

type Props = {
  data: Data[]
}

const TopSales = (props: Props) => {

  return (
    <Card className='max-h-[400px] w-full rounded-3xl'>
      <CardContent className='overflow-auto p-5'>
        <h1 className='font-bold'>Top Sales</h1>
        {props?.data?.map((item, index) => (
          <div className='my-5 flex justify-between'>
            <div>
              <h1>{item?.product_name}</h1>
              <p className='text-sm text-muted-foreground'>{item.total}</p>
            </div>

            <h1 className='text-sm font-semibold'>{parseMoney(item?.product_price * item?.total)}</h1>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopSales