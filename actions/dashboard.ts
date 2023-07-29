import pb from "@/utils/pocketbase";
import { OrdersRecord, Collections } from "@/pocketbase-types"


export async function getDashboardData(vendorId: string) { 
  try {
    return pb.send('/api/dashboard', {
      method: 'POST',
      params: {
        vendorId
      }
    })
  } catch (error) {
    console.log(error, 'error')
  }
}

export async function ordersSocket() {
  try {
    return pb.realtime.subscribe(Collections.Orders, (e) => {
      console.log(e, 'orders socket')
      console.log('orders socket')
    })
  } catch (error) {
    console.log(error, 'error')
  }
}

export async function unSubscribeOrdersSocket() {
  try {
    return pb.realtime.unsubscribe(Collections.Orders)
  } catch (error) {
    console.log(error, 'error')
  }
}