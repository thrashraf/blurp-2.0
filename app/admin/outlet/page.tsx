import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
]

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" grid h-56 grid-cols-2 content-normal gap-4">
      <div>
        {" "}
        <Card className="h-[422px] w-[461px] text-center ">
          <CardHeader>
            <CardTitle> The Paddock</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div>
        {" "}
        <Card className="h-[422px] w-[461px]">
          <CardHeader>
            <CardTitle> Contact </CardTitle>
            <div className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3">
              <div className="col-span-2">Business hours</div>
              <div className="col-span-2">Not Set </div>
              <div>Phone</div>
              <div>Not Set</div>
            </div>

            <CardTitle> Address </CardTitle>
            <div className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3">
              <div className="col-span-2">
                Lot No, 1 Jln SS 8/6, Sungai Way Free Trade Industrial Zone,
                47300, Petaling Jaya, Selangor Malaysia
              </div>
              <div className="col-span-2">Not Set </div>
              <div>Asia/ Kuala Lumpur (+08:00)</div>
              <div>Malaysian Ringgit (MYR) (RM)</div>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Card className="h-[300px] w-[1270px] text-center ">
          <CardHeader>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto"></div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
              </div>
              <div className="mt-8 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="ring-opacity-5/5 overflow-hidden shadow ring-1 ring-transparent md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Title
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Role
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {people.map((person) => (
                            <tr key={person.email}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {person.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.title}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.email}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.role}
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  Edit
                                  <span className="sr-only">
                                    , {person.name}
                                  </span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default page
