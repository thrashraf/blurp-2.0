'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { parseMoney } from '@/lib/parseMoney'
import React from 'react'

type Props = {
  target: number,
  current: number
}

const TargetSales = (props: Props) => {

  const percentage = (props.current / props.target) * 100

  return (
    <Card className="flex w-full max-w-[400px] flex-col items-center justify-center rounded-2xl">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Target Sales
        </h3>
        <p className="text-sm text-muted-foreground">
          {parseMoney(props.current)} / {parseMoney(props.target)}
        </p>
        <div className='mt-10'>
          <Progress value={percentage} className='mt-6 rounded-sm' />
        </div>
      </div>
    </Card>
  )
}

export default TargetSales