import { Sortable, Sorter, Sorter2 } from "./Sorter";
export class NumbersCollection extends Sorter2 {
    constructor(public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[leftIndex + 1] = leftHand;
    }
}
