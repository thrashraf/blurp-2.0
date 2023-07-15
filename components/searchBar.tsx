import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

type Props = {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  containerStyle?: string
  inputStyle?: string
}

const SearchBar = (props: Props) => {
  return (
    <div className={props?.containerStyle}>
      <Label htmlFor="input">{props.label}</Label>
      <Input id='input' className={props.inputStyle} placeholder={props.placeholder} />
    </div>
  )
}

export default SearchBar