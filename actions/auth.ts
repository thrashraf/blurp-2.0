"use server"

import { cookies } from "next/headers"
import pb from "@/utils/pocketbase"

type LoginProps = {
  email: string
  password: string
}

export async function Login(props: LoginProps) {
  let userRecord;

  try {
    await pb
      .collection("users")
      .authWithPassword(props.email, props.password)
      .then((res: any) => {
        if (res?.token) {
          cookies().set({
            name: "token",
            value: res.token,
            httpOnly: true,
            path: "/admin/*",
            secure: true,
            maxAge: 60 * 60 * 24 * 14,
          })
          userRecord = res.record.vendor
        }
      })
    
      return userRecord
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function setCookies(token: string) { 
  return cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 14,
  })
}

export async function Logout() { 
  try {
    //? Clear the token cookie
    cookies().set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: true,
      maxAge: 0,
    })

    return pb.authStore.clear();
  } catch (error) {
    console.log(error)
  }
}
