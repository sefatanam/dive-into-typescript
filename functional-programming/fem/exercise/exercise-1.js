import { curry as c, filter, map, reduce, test } from "ramda";

const split = c((delimeter, string) => string.split(delimeter))

// Noise
// const words = function(str){
//   return split(' ', str)
// }

// Clear
const words = split(' ')

const wordsResult = words("her hello world")
console.log("Exercise 1:", wordsResult)



// Task: use map to map a new words fn that not only works on 1 string, but an array of strings.

// const sentences = xs => map(words, xs)
const sentences = c(map(words))
const sentencesResult = sentences(["hey hi how are you", "i'm good"])
console.log("Exercise 1a:", sentencesResult)


// Task: Filer q

// const filterQs = function (xs) {
//   return filter(function (x) {
//     return test(/q/ig, x);
//   }, xs)
// }

const filterQs = filter(test(/q/ig))

const filterQsResult = filterQs(['quick', 'cover'])
console.log('Exercise 2:', filterQsResult)


// Task: Use the helper function to _keepHightest to refactor max

const _keepHightest = (x, y) => x >= y ? x : y;

// const max = function (xs) {
//   return reduce(function (acc, x) {
//     return _keepHightest(acc, x)
//   }, 0, xs)
// }

// Simplest form
const max = reduce(_keepHightest,0)

const maxResult = max([310, 323, 333, 212, 231])
console.log('Exercise 3:', maxResult)


