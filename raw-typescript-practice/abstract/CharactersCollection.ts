import { Sorter2 } from './Sorter';
export class CharactersCollection extends Sorter2 {
    constructor(public data: string) {
        super();
    }
    get length(): number {
        return this.data.length;
    }
    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
}
