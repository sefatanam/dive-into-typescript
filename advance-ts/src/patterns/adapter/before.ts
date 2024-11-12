// Without Adapter pattern

class PaypalPayment {
    payWithPaypal(email: string, amount: number) {
        console.log(`Paid : ${amount} using Paypal account ${email}`)
    }
}

class StripePayment {
    payWithStripe(token: string, amount: number) {
        console.log(`Paid : ${amount} using Paypal account ${token}`)
    }
}

class CheckoutService {
    private paypalService: PaypalPayment;
    private stripeService: StripePayment;

    constructor() {
        this.paypalService = new PaypalPayment()
        this.paypalService = new PaypalPayment()
    }


    checkoutWithPayPal(email: string, amount: number) {
        this.paypalService.payWithPaypal(email, amount)
    }

    checkoutWithStripe(token: string, amount: number) {
        this.stripeService.payWithStripe(token, amount)
    }

}

const checkoutService = new CheckoutService();

checkoutService.checkoutWithPayPal('user@email.com', 100)
checkoutService.checkoutWithStripe('asbgliodfbg234masd', 100)