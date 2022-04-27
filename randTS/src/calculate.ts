import { easyMath, hardMath, ieasyMath } from "./math";



export class calculate implements ieasyMath {

    constructor(public firstNumber: number, public secondNumber: number, public thirdNumber: number) { }
    get divided(): number {
        return this.firstNumber / this.secondNumber;
    }
    get sum(): number {
        return this.firstNumber + this.secondNumber;
    }
    get multiple(): number {
        return this.firstNumber * this.secondNumber;
    }
    multipleOfThreeNumber(): number {
        return this.firstNumber * this.secondNumber * this.thirdNumber;
    }
}