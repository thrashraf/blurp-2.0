"use client"

import React from "react"
import Image from "next/image"
import { Label } from "@radix-ui/react-label"

import useInput from "@/hooks/useInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

import { Login } from "@/actions/auth"
import { useMutation } from "@tanstack/react-query"
import { Icons } from "@/components/icons"
import { useToast } from "@/components/ui/use-toast"

const Page = () => {
  const { value: email, onChange: setEmail } = useInput()
  const { value: password, onChange: setPassword } = useInput()
  const router = useRouter();
  const { toast } = useToast();

  const { mutateAsync: login, isLoading, isError } = useMutation(Login)

  const loginAction = async () => {
    try {
      await login({ email, password })
        .then((res) => {
          console.log(res)
          localStorage.setItem("vendor", res ?? '')
          router?.push("/admin/dashboard")
        })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Invalid email or password.",
      })
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
              className={`${isError ? "border-red-500" : ""}`}
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
              className={`${isError ? "border-red-500" : ""}`}
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

          <Button type="submit" className="w-[80%] bg-admin" disabled={isLoading}>
            {isLoading && <Icons.loader className="mr-2 h-3 w-3 animate-spin" />} Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Page
