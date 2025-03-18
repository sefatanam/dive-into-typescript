
export interface Sortable {
  length: number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}
export class Sorter {
  constructor(public collection: Sortable) { }
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

export abstract class Sorter2 {

  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftInde: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
