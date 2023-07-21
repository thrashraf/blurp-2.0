"use client"

import React from "react"
import { usePathname } from "next/navigation"

import Sidebar from "@/components/admin/Sidebar"

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const pathname = usePathname()

  if (pathname.startsWith("/admin/login")) {
    return <div className="flex h-screen w-full">{props.children}</div>
  }
  return (
    <div className="flex min-h-screen w-full bg-[#F6F7FB]">
      <Sidebar setSidebarOpen={() => { }} sidebarOpen={true}>
        {props.children}
      </Sidebar>
    </div>
  )
}

export default Layout
