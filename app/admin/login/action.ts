"use server"

import { cookies } from "next/headers"
import pb from "@/utils/pocketbase"

type LoginProps = {
  email: string
  password: string
}

export async function Login(props: LoginProps) {
  let userRecord;

  await pb
    .collection("users")
    .authWithPassword(props.email, props.password)
    .then((res: any) => {
      if (res?.token) {
        cookies().set({
          name: "token",
          value: res.token,
          httpOnly: true,
          path: "/admin",
          secure: true,
          maxAge: 60 * 60 * 24 * 14,
        })

        userRecord = res.record.vendor
      }
    })
    .catch((err: any) => {
      throw new Error(err)
    })
  
  return userRecord
}
