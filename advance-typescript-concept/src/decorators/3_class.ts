
// // Example with class extends
// class BankCard {
//     constructor(public cardId: number) {
//         this.cardId = 10000022;
//     }
// }

// class IFICBank extends BankCard {

//     constructor(public name: string) {
//         super(10002);
//         this.name = name;
//     }
// }

// Example with decorators
/* 
function DBankCard(constructor: Function) {
    constructor.prototype.cardId = Math.floor(Math.random() * 100);
}

@DBankCard
class EBLBank {
    constructor(public name: string) {
        this.name = name;
    }
}

let result = new EBLBank("Sefat");
 */