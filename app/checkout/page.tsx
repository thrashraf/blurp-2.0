"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export default function page() {
  return (
    <div className="flex-col items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Add Egg
      </label>
      
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Take Away
      </label>
      <Textarea placeholder="Type your message here." />
      <Button variant="outline">Cancel</Button>
      <Button variant="outline">Checkout</Button>
    </div>
  )
}
