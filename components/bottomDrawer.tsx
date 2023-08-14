import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Checkbox } from "./ui/checkbox"
import useStore from "@/state/store"
import { use, useState } from "react"
import { parseMoney } from "@/lib/parseMoney"

type Props = {
  open: boolean
  onOpenChange?: (open: boolean) => void
  product: any
}

export function BottomDrawer(props: Props) {
  const { product } = props
  const [selectedAddons, setSelectedAddons] = useState<any[]>([]);
  const selectedProduct = {
    ...product,
    selectedAddons: selectedAddons
  }

  const manageAddons = (addon: any) => {
    const index = selectedAddons.findIndex(
      (item: any) => item?.id === addon?.id
    );
    if (index === -1) {
      setSelectedAddons((prevSelectedAddons: any) => [...prevSelectedAddons, addon]);
    } else {
      setSelectedAddons((prevSelectedAddons: any[]) =>
        prevSelectedAddons.filter((item) => item?.id !== addon?.id)
      );
    }
  };

  const addToCart = useStore(state => state.setCart)

  return (
    <Sheet open={props.open} onOpenChange={props.onOpenChange} >
      <SheetContent side={'bottom'} className="rounded-t-[25px]">
        <SheetHeader className="flex-row items-center justify-between">
          <SheetTitle className="max-w-[50%] break-all text-start">{product?.product_name}</SheetTitle>
          <SheetTitle>{parseMoney(product.product_price)}</SheetTitle>
        </SheetHeader>
        <div className="mt-3">
          {product?.addons?.length > 0 && (
            <>
              <p className="mb-5 text-sm">Add on</p>
              {product?.addons?.map((addon: any) => (
                <div key={addon?.id} className="flex items-center justify-between border-t-[1px] border-gray-200 px-2 py-5">
                  <div className="flex items-center">
                    <Checkbox className="mr-5" onClick={() => manageAddons(addon)} />
                    <p>{addon?.name}</p>
                  </div>
                  <p className="text-green-400">+{addon?.price}</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-3">
          <p className="mb-5 text-sm">Remarks</p>
          <textarea className="mb-2 w-full rounded-lg bg-gray-100 px-2 py-5" placeholder="Add remarks" />
        </div>
        <SheetFooter className="mt-3 flex-row items-center justify-between">
          <Button className="mr-1 w-1/4 rounded-xl bg-secondary py-6 text-black">Cancel</Button>
          <Button className="ml-1 w-3/4 rounded-xl py-6" onClick={() => addToCart(selectedProduct)}>Add to cart</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
