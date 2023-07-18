"use client"

import React from "react"
import Image from "next/image"
import { Label } from "@radix-ui/react-label"

import useInput from "@/hooks/useInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

import { Login } from "./action"

const Page = () => {
  const { value: email, onChange: setEmail } = useInput()
  const { value: password, onChange: setPassword } = useInput()
  const router = useRouter();

  const loginAction = async () => {
    try {
      await Login({ email, password })
        .then((res) => {
          console.log(res)
        })
    } catch (error: any) {
      console.log(error?.message)
    }
  }

  return (
    <div className="h-screen w-full overflow-y-hidden">
      <div className="flex h-full w-full">
        <div className="h-full w-1/2">
          <Image
            src="/login.png"
            alt="login"
            width={1000}
            height={1000}
            objectFit="cover"
            priority={true}
          />
        </div>
        <form
          action={loginAction}
          className="flex h-screen w-1/2 flex-col items-center justify-center"
        >
          <div className="mb-10 w-[80%]">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              required={true}
              id="email"
              value={email}
              onChange={setEmail}
            />
          </div>
          <div className="mb-20 w-[80%]">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              required={true}
              id="password"
              value={password}
              onChange={setPassword}
            />
          </div>

          <div className="mb-10 flex w-[80%] items-center justify-center">
            <Label htmlFor="keep" className="mr-2">
              Remember me
            </Label>
            <Checkbox
              id="keep"
              className="border-admin data-[state=checked]:bg-admin"
            />
          </div>

          <Button type="submit" className="w-[80%] bg-admin">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Page
