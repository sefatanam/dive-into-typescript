
function uppercase(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
        get: function () {
            return 'Name is => ' + descriptor.get.call(this).toUpperCase();
        },
        set: function () {
            return ''
        }
    }
}


class BankHolder {
    constructor(public name: string, public address: string) {
        this.name = name;
        this.address = address;
    }

    @uppercase
    get getName() {
        // Problem was : With changes any functionality modify getName() fn so that it can now produce uppercase name
        return this.name;
    }
}




const bankHolder = new BankHolder('sefat_anam', 'Dhaka')

console.log(bankHolder.getName)