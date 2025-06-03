import { add } from "@repo/math/add"
import { subtract } from '@repo/math/subtract'
import { binarySearch } from '@repo/algo/libs/binary-search'

console.log(`Performing Addition from @repo/math lib => `, add(1, 2))
console.log(`Performing Substraction from @repo/math lib => `, subtract(5, -10))
console.log(`Performing Binary Search from @repo/algo lib => `, binarySearch([1, 2, 3, 4, 5], 3));
