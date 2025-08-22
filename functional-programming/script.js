

const mapUsingReduce = (array, callback) => {
  return array.reduce((accumulator, currentValue) => [...accumulator, callback(currentValue)], [])
}

const numbers = [1, 2, 3, 4, 5, 6]

const doubled = n => n * 2;

const result = mapUsingReduce(numbers, doubled)

console.log(result)

const mapUsingFilter = (array, callback) => {
  return array.reduce((accumulator, currentValue) =>
    callback(currentValue) ?
      [...accumulator, currentValue]
      : accumulator
    , [])
}

const increment = n => n + 1;

// Imparative Coding
const doubleIncrement = n => {
  const dub = doubled(n);
  const incremented = increment(dub)
  return incremented;
}

// declarative code
const doubledInc = n => increment(doubled(n))

const compose2 = (f, g) => x => f(g(x))

// Pro declarative code
const anotherDoubleInc = compose2(increment, doubled)

console.log(`With 5 : Double Increment function ${doubleIncrement(5)}; DoubleInc : ${doubledInc(5)} & with Compose2 ${anotherDoubleInc(5)}`)



const Compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)
const ComposeDoubleIncrement = Compose(increment, doubled)
console.log(`With compose Double increment ${ComposeDoubleIncrement(5)}`)




















