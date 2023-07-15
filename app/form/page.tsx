"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function page() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>Enter your mobile number to proceed</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Please enter your name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Number Phone</Label>
              <Input id="name" placeholder="+60" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="w-full">
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
