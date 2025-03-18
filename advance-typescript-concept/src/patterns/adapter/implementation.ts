import { obj } from "../../generics/1-basics";


interface Payment {
  pay(amount: number): void;
}


var t: Payment = {
  pay(amount: number) {
    console.log(amount)
  }
}

t.pay(100)
console.log(t)

let t = {
  obj
}

// remain same as before
class PaypalPayment {
  payWithPaypal(email: string, amount: number) {
    console.log(`Paid : ${amount} using Paypal account ${email}`)
  }
}

// remain same as before
class StripePayment {
  title: string;
  payWithStripe(token: string, amount: number) {
    console.log(`Paid : ${amount} using Paypal account ${token}`)
  }
}


class PaypalAdapter implements Payment {
  constructor(private email: string, private paypalPayment: PaypalPayment) { }

  pay(amount: number) {
    this.paypalPayment.payWithPaypal(this.email, amount)
  }
}

export class StripeAdapter implements Payment {
  constructor(private token: string, private stripePayment: StripePayment) { }

  pay(amount: number) {
    this.stripePayment.payWithStripe(this.token, amount)
  }
}

class CheckoutService {
  constructor(private payment: Payment) { }

  checkout(amount: number) {
    this.payment.pay(amount)
  }
}

const checkoutService = new CheckoutService(new PaypalAdapter('user@email.com', new PaypalPayment()))


checkoutService.checkout(100)
