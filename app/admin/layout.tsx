'use client'

import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='flex h-full w-full'>
      <Sidebar setSidebarOpen={() => { }} sidebarOpen={true} />
      <main className='p-5'>
        {props.children}
      </main>
    </div>
  )
}

export default Layout