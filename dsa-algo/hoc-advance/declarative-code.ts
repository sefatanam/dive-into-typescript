// const numbers = [1,2,3,4,5]
// const doubly = numbers.map((number)=>number *2)


// console.log(numbers ===  doubly)
// console.log("Numbers", numbers)
// console.log("Doubly", doubly)


// const fruits = ['apple', 'banana', 'Citrus']
// const aFruits = fruits.filter((fruit)=> !fruit.includes('a'))
// console.log(aFruits)


// const coins = [1, 2, 3, 4];
// const calculateAmount = (total: number, coin: number) => total + coin;
// const totalAmount = coins.reduce(calculateAmount, 0)

// console.log(totalAmount)



// Custom `map` using `reduce` short version
// const mapUsingReduce = (array: number[], mapFunction: any) => {
//     return array.reduce(
//         (accumulator: number[], current) => [...accumulator, mapFunction(current)],
//         []
//     );
// };

// Custom `map` using `reduce` long version
const mapUsingReduce = (array: number[], mapFunction: any) => {
    return array.reduce(
        (accumulator: number[], current) => {
            const mapFunctionResult = mapFunction(current);
            accumulator.push(mapFunctionResult)
            return accumulator;
        },
        []
    );
};


// Custom `filter` using `reduce` short version
// const filterUsingReduce = (array: number[], filterFunction: any) => {
//     return array.reduce(
//         (accumulator: number[], current) => filterFunction(current) ? [...accumulator, current] : accumulator,
//         []
//     );
// };


// Custom `filter` using `reduce` long version

// const filterUsingReduce = (array: number[], filterFunction: any) => {
//     return array.reduce(
//         (accumulator: number[], current) => {
//             const shouldContain = filterFunction(current);
//             return shouldContain ? [...accumulator, current] : accumulator;
//         },
//         []
//     );
// };
// const numbers = [1, 2, 3, 4, 5,6]
// const filteredNumbers = filterUsingReduce(numbers, (number: number) => number % 2===0)
// console.log(filteredNumbers)


// in math => h(x)
//         => (f o g)(x)
//         => f(g(x))
// const compose = (f: Function, g: Function) => (x: number) => f(g(x));

// const increment = (n: number) => n + 1;
// const double = (n: number) => n * 2;

// const doubleThenIncremnt = compose(increment, double)
// console.log(doubleThenIncremnt(5))


// Magic start from here


const increment = (n: number) => n + 1;
const double = (n: number) => n * 2;
const square = (n: number) => n * n;

const compose = (...fns: Function[]) => (x: number) => fns.reduceRight((y, f) => f(y), x)


const incrementDoubleThenSquare = compose(square, double, increment)
console.log(incrementDoubleThenSquare(2))



const pipe = (...fns: Function[]) => (n: number) => fns.reduce((y: number, f) => f(y), n)


const trace = (msg: string) => (n: number) => {
    console.log(msg, n)
    return n;
}


const incrementDoubleThenSquareWithPipe = pipe(
    trace("Initial Value =>"),
    increment,
    trace("Before Double =>"),
    double,
    trace("Before Square =>"),
    square,
    trace("After Squar =>"),
)

console.log(incrementDoubleThenSquareWithPipe(2))

const customReduce = <T>(
    fn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
    initialValue: T
) => (array: T[]) => array.reduce(fn, initialValue);


const customMap = <T, U>(fn: (value: T, index: number, array: T[]) => U) => (arr: T[]) => arr.map(fn)



const numbers = [1,2,3,4,5,6]
const res = customMap( (item: number)=> item * 2 )(numbers)
console.log(res)
