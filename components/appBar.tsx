import React from 'react'
import { Icons } from './icons'
import { useRouter } from 'next/navigation'

type Props = {
  rightComponent?: React.ReactNode
}

const AppBar = (props: Props) => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between'>
      <Icons.cheveronLeft className='h-10 w-10 rounded-full p-3 shadow-xl ' onClick={() => router.back()} />
      {props.rightComponent}
    </div>
  )
}

export default AppBar