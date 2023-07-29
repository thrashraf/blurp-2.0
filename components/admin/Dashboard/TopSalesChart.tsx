import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Data {
  product_name: string,
  product_price: number,
  total: number,
  product_id: string,
}

type Props = {
  data: Data[]
}

const TopSalesChart = (props: Props) => {

  const colors = ['#2B2730', '#393646', '#7F8487', '#B2B2B2', '#EAEAEA', '#FF8042'];

  return (
    <Card className='h-[400px] w-full rounded-3xl p-4'>
      <h1>Top Products By Sales</h1>
      <div className='flex h-[400px] w-[450px] justify-between'>
        <ResponsiveContainer width="70%" height="99%">
          <PieChart width={300} height={400}>
            <Pie
              dataKey="total"
              isAnimationActive={true}
              data={props.data}
              outerRadius={150}
              fill="#8884d8"
              nameKey={'product_name'}
            >
              {props.data?.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className='flex w-[25%] flex-col justify-center'>
          {props.data?.map((item, index) => (
            <div className='my-2 flex w-[100px] justify-between'>
              <div className={`h-5 w-5`} style={{ backgroundColor: colors[index % colors.length] }} />
              <p className='... w-[60%] truncate text-[12px]'>{item.product_name}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default TopSalesChart