
function uppercase(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {

    return {
        get: function () {
            return descriptor.get.call(this).toUpperCase();
        },
        set: function (name: string) {
            return descriptor.set.call(this, name)
        }
    };
}


class BankHolder {
    constructor(public name: string) {
        this.name = name;
    }

    @uppercase
    get getAccountName() {
        return this.name;
    }
}


const bankHolder = new BankHolder('dskfkalsd');
console.log(bankHolder.getAccountName);
