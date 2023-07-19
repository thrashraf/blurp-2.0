"use server"

import pb from "@/utils/pocketbase"

export async function GetProducts() {
  try {
    return pb.collection("Products").getFullList({
      expand: "image_url,addons_id",
    })
  } catch (error) {
    console.log(error)
  }
}
