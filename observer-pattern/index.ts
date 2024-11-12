import { BillPay } from "./class";
const billPay = BillPay.getInstance()
// @ts-ignore
billPay.listen(()=> console.log(billPay.totalAmount))

billPay.addAmount(10)
billPay.addAmount(10)
billPay.addAmount(10)
billPay.addAmount(10)

