import React from 'react'

type Props = {
  children: React.ReactNode
  column: number
  gap: number
}

const GridContainer = ({ children, column, gap }: Props) => {
  return (
    <div className={`grid-cols-${column} grid gap-${gap}`}>{children}</div>
  )
}

export default GridContainer