import { BillPayMixin } from "./mixin";

export class BillPay {
    
    private amount = 0;
    static instance: BillPay;
    constructor() {
        if (BillPay.instance) {
            throw new Error("Billpay instance already running. Get Access by `getInstance` method.")
        }
    }

    static {
        this.instance = new BillPay()
    }

    static getInstance() {
        return this.instance;
    }

    get totalAmount(){
        return this.amount;
    }

    addAmount(amount: number){
        this.amount+=amount;
        // @ts-ignore
        this.notify()
    }
}

Object.assign(BillPay.prototype, BillPayMixin)