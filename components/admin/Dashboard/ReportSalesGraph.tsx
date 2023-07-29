import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react'

interface Data {
  day: string,
  sales: number
}

type Props = {
  data: Data[]
}

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportSalesGraph = (props: Props) => {
  return (
    <Card className='w-full rounded-3xl p-3'>
      <div className='flex justify-between'>
        <p>Sales Report</p>

        <div>
          <Button variant='ghost' className='mr-2 text-sm'>Weekly</Button>
          <Button variant='ghost' className='mr-2 text-sm'>Monthly</Button>
        </div>
      </div>
      <ResponsiveContainer width='99%' height={185}>
        <LineChart
          height={185}
          width={600}
          data={props.data}
          margin={{
            top: 40,
            right: 60,
            bottom: 20,
            left: 60
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="day" stroke='#9BA4B5' fontSize={10} axisLine={false} />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="natural" dataKey="sales" stroke="#9BA4B5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ReportSalesGraph