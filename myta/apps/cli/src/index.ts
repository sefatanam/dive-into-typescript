// import { add } from "@repo/math/add"
// import { subtract } from '@repo/math/subtract'
// import { binarySearch } from '@repo/algo';
import { Measure } from '@repo/decorators';


class User {
  constructor(public name: string, public age: number) { }

  @Measure
  getName(args: { withWrapper: boolean, binding?: string }) {
    return `${this.name}`
  }
}

const user = new User('John Doe', 30);
console.log(user.getName({ withWrapper: true, binding: 'nope' }));

// console.log(`Performing Addition from @repo/math lib => `, add(1, 2))
// console.log(`Performing Substraction from @repo/math lib => `, subtract(5, -10))
// console.log(`Performing Binary Search from @repo/algo lib => `, binarySearch([1, 2, 3, 4, 5], 3));
