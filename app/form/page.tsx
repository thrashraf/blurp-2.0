"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
import AppBar from "@/components/appBar"

export default function page() {
  return (
    <div>
      <AppBar />
      <Image src="/picture.svg" alt="SVG Image" width={300} height={200} />
      <Card className="mt-5 w-[350px] border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-sm">Enter your mobile number to proceed</CardTitle>
        </CardHeader>
        <CardContent className="border-0">
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
        <CardFooter className="flex justify-between border-0">
          <Button variant="default" className="w-full">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
