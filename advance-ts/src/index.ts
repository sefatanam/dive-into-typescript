function log(...args) {

    console.log(args)
}
const methodMap = {
    "withdrawFromSaving": "savingAccount",
    "withdrawFromDesposit": "depositeAccount",
    "notEnoughMoney": "notEnoughMoney"
}
const MinimumAmountX = (minAmount: number) => {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalFn = descriptor.value;
        descriptor.value = function (withdrawAmount: number) {
            const shouldWithdraw = this[methodMap[propertyKey]] - withdrawAmount >= minAmount;
            if (shouldWithdraw) {
                originalFn.call(this, withdrawAmount)
            } else {
                this.notEnoughMoney()
            }
        }
        return descriptor;
    }
}


class EblBank {
    savingAccount = 100;
    depositeAccount = 100;

    @MinimumAmountX(10)
    withdrawFromSaving(withdrawAmount: number) {
        this.savingAccount = this.savingAccount - withdrawAmount;
        const obj = { "nowRemains ": this.savingAccount }
        return obj;
    }

    notEnoughMoney() {
        // log("You don't have enough money!")
    }
}

const eblBank = new EblBank()

// const res = eblBank.withdrawFromSaving(20);

// console.log(res)

log(eblBank.withdrawFromSaving(10)) // success, remain 90
log(eblBank.withdrawFromSaving(30)) // success, remain 60
log(eblBank.withdrawFromSaving(40)) // success, remain 20
log(eblBank.withdrawFromSaving(40)) // failed, remain 20
log(eblBank.withdrawFromSaving(40)) // failed, remain 20
log(eblBank.withdrawFromSaving(10)) // succes, remain 10

