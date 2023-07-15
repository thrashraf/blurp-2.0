import React from 'react'

type Props = {
  children: React.ReactNode
}

const GridContainer = ({ children }: Props) => {
  return (
    <div className={`grid grid-cols-2 gap-5 sm:grid-cols-4`}>{children}</div>
  )
}

export default GridContainer