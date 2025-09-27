
const curry = f => x => y => f(x, y)
const modulo = curry((x, y) => y % x)
const isOdd = modulo(2) // basically translate tp -> const modulo = curry((2,y)=> y%2)


const filter = curry((f, arr) => arr.filter(f))
const getOdds = filter(isOdd)
const getEvens = filter(x => !isOdd(x))
const numbers = [1, 2, 3, 4, 5]

const result = getEvens(numbers)

console.log(result)
