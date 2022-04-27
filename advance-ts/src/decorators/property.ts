

function propertyInformation(target: Object, propertyKey: string) {
    let value: string = this[propertyKey];

    const get = function () {
        console.log(`${propertyKey} value : ${value}`);
        return value;
    }

    const set = function (newValue: string) {
        console.log(`new ${propertyKey} value : ${newValue}`);
        return value = newValue;
    }

    Object.defineProperty(target, propertyKey, { set, get });
}


class Bank {
    name = '';
    @propertyInformation
    pin = 'ybde';
    constructor(name: string, pin: string) {
        this.name = name;
        this.pin = pin;
    }
}

const bank = new Bank("IFIC Bank", '12344');
bank.pin = '2423'
console.log(bank);
