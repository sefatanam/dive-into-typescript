
import { NumbersCollection } from './NumbersCollection';

export class Sorter {
    constructor(public collection: any[]) { }

    sort(): void {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {

                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
    }
}
