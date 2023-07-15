import React from 'react'
import { Input } from './ui/input'

type Props = {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = (props: Props) => {
  return (
    <Input />
  )
}

export default SearchBar