import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import SearchBar from "@/components/searchBar"
import Menu from "@/components/menu"
import GridContainer from "@/components/gridContainer"

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <SearchBar
        label="Food For You"
        containerStyle="my-5"
        inputStyle="px-2 py-5 my-2 rounded-lg bg-gray-100"
        placeholder="Search"
      />
      <GridContainer column={2} gap={5}>
        <Menu imageUrl="" price={800} name="Burger" />
        <Menu imageUrl="" price={800} name="Burger" />
        <Menu imageUrl="" price={800} name="Burger" />
        <Menu imageUrl="" price={800} name="Burger" />
        <Menu imageUrl="" price={800} name="Burger" />
        <Menu imageUrl="" price={800} name="Burger" />
      </GridContainer>
    </>
  )
}
