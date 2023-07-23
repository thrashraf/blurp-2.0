import { Icons } from '@/components/icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { parseMoney } from '@/lib/parseMoney'
import React from 'react'

type Props = {
  mode: 'Daily' | 'Weekly' | 'Monthly',
  percentage: number,
  isPositive: boolean,
  total: number,
  date: string
}

const DailySales = (props: Props) => {

  const colorMode = props.isPositive ? 'text-green-400' : 'text-red-400'

  return (
    <Card className='w-full rounded-3xl'>
      <CardContent className='pt-6'>
        <div className='mb-5 flex justify-between'>
          <CardTitle>{props.mode} Sale</CardTitle>
          <div className={`flex w-10 items-center justify-between ${colorMode}`}>
            {props.isPositive ? <Icons.MoveUp /> : <Icons.MoveDown />}
            <CardDescription className={`${colorMode}`}>
              {props.percentage}%
            </CardDescription>
          </div>
        </div>
        <CardTitle>
          {parseMoney(props.total)}
        </CardTitle>

        <CardDescription>
          {props.date}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default DailySales