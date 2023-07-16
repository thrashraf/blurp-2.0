import Image from "next/image"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CheckCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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

export default function Page() {
  return (
    <div className="flex justify-center pt-8">
      <Card className="w-[350px]">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertDescription>Unsuccessful do the payment</AlertDescription>
        </Alert>

        <Alert className="border-green-400 bg-green-50 text-green-700">
          <CheckCircle className="h-7 w-4" style={{ color: "green" }} />
          Successful do the payment
        </Alert>

        <CardHeader>
          <CardTitle className="pt-7">Total Payment: RM50.00</CardTitle>
        </CardHeader>

        <form>
          <div className="grid w-full items-center gap-4"></div>
        </form>

        <CardFooter>
          <Button className="w-full ">Pay Later at Cashier</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
