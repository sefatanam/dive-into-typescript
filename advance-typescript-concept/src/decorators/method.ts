
const methodToAccountMap = {
    "withdrawFromSavingAccount": "savingsAccount",
    "withdrawFromDepositAccount": "depositAccount"
}


const minimumAmount = (amount: number) => {


    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {

        const originalFn = descriptor.value;
        descriptor.value = function (...args: any) {

            if (this[methodToAccountMap[propertyKey]] - args[0] > amount) {
                console.log(`${methodToAccountMap[propertyKey]} : Success !`);
                originalFn.call(this, args);
            } else {
                console.log(`${methodToAccountMap[propertyKey]} : Not Enough Money`);
            }
        }

        return descriptor;

    }
}

class CBank {
    savingsAccount = 100;
    depositAccount = 100;

    // minimum have to 500 tk
    @minimumAmount(50)
    withdrawFromSavingAccount(ammount: number) {
        this.savingsAccount = this.savingsAccount - ammount;
        return { "Now:": this.savingsAccount };
    }


    // minimu have to 200 tk
    @minimumAmount(10)
    withdrawFromDepositAccount(ammount: number) {
        this.depositAccount = this.depositAccount - ammount;
        return { "Now": this.depositAccount }
    }
}


const cBank = new CBank();

cBank.withdrawFromSavingAccount(10);
cBank.withdrawFromSavingAccount(10);
cBank.withdrawFromSavingAccount(10);
cBank.withdrawFromSavingAccount(100);



