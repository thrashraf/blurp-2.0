import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const people = [
  {
    name: "Aiman",
    title: "Boss Besar",
    email: "aiman@gmail.com",
    role: "Member",
  },
  {
    name: "Hassan ",
    title: "Kuli/Cuci Pinggan",
    email: "hassan@gmail.com",
    role: "Member",
  },
  {
    name: "Acap",
    title: "Tokey Mamak",
    email: "acap@gmail.com",
    role: "Member",
  },
  {
    name: "Abu",
    title: "Cheff",
    email: "abu@gmail.com",
    role: "Member",
  },
  {
    name: "Aishah",
    title: "Waiter",
    email: "aishah@gmail.com",
    role: "Member",
  },
  // More people...
]

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" grid h-56 grid-cols-2 content-normal gap-4">
      <div>
        <Card className="h-[500px] w-[1270px] text-center ">
          <CardHeader>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto"></div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add user
                </button>
              </div>
              <div className="mt-8 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
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
