// // Normal Senario
// class BankCard {
//     constructor(public bankId: number) {
//         this.bankId = 121221;
//     }
// }

// class IFICBank extends BankCard{
//     constructor(public name:string) {
//         super(1) // In this way we are get limited to using super() for every class that we are extends
//         this.name = name;
//     }
// }

// Solutions: For avoiding redundent super() call for class extension

function BankCard(constructor: Function) {
    constructor.prototype.bankId = Math.floor(Math.random() * 1000);
}

@BankCard
class IFICBank {
    constructor(public name: string) {
        this.name = name;
    }

}

const bank = new IFICBank('sefat_anam');

console.dir(bank['bankId'])