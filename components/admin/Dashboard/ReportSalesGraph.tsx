import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react'

type Props = {}

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Saturday',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sunday',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
          data={data}
          margin={{
            top: 40,
            right: 60,
            bottom: 20,
            left: 60
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" stroke='#9BA4B5' fontSize={10} axisLine={false} />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="natural" dataKey="pv" stroke="#9BA4B5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ReportSalesGraph