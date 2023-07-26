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

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" grid h-56 grid-cols-2 content-normal gap-4">
      <div>
        {" "}
        <Card className="h-[422px] w-[461px]">
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
    </div>
  )
}

export default page
