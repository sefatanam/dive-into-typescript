
function uppercase(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalDescriptor = descriptor;
    return {
        get: function () {
            return originalDescriptor.get.call(this).toUpperCase()
        },
        set: function (name: string) {
            return originalDescriptor.set.call(this, name)
        }
    };
}

function replaceNumber(_: Object, __: string, descriptor: PropertyDescriptor) {
    const originalDescriptor = descriptor;
    return {
        get: function (): string {
            return originalDescriptor.get.call(this).replace(/\d/g, "*") 
        }
    }
}


class BankHolder {
    constructor(private bankAccount: string) {
        this.bankAccount = bankAccount;
    }

    @uppercase
    @replaceNumber
    get bankAccountNo() {
        return this.bankAccount;
    }
}


const bankHolder = new BankHolder('sefat6767767676anam');
console.log(bankHolder.bankAccountNo);
