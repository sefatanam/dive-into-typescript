// Functional Javascript FEM Course
// 01:16:27 28/09/2025
const add = (x, y) => x + y;
const multiplyBy = (x, target) => target * x;

/* // Hello World !
const toPair = func => ([x, y]) => func(x, y);
const fromPair = func => (x, y) => func([x, y]);
const flip = func => (y, x) => func(x, y);
const result = toPair(add)([2, 1])
const result = fromPair(toPair(add))(2, 1)
const result = flip(add)(4,1)
*/


// This is curry
const c = f => x => y => f(x, y)

/* // Curry Hands On
const curriedAdd = c(add)
const increment = curriedAdd(2)
const result = increment(5)
console.log(result)
*/

// Matha gorom oiyya gese mia
/*
const incrementThenMultiply = ([t, i, m]) =>
  (c(multiplyBy)(m)(c(add)(i)(t)))

const result = incrementThenMultiply([5, 1, 6])

console.log(result)
*/

const curry = f => x => y => f(x, y)
const modulo = curry((x, y) => y % x)
const isOdd = modulo(2)
const isEven = !isOdd(6)

console.log(isEven)


