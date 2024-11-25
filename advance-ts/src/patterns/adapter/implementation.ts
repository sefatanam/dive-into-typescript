

interface Payment {
    pay(amount: number):void;
}

// remain same as before
class PaypalPayment {
    payWithPaypal(email: string, amount: number) {
        console.log(`Paid : ${amount} using Paypal account ${email}`)
    }
}

// remain same as before
class StripePayment {
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

class StripeAdapter implements Payment {
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

