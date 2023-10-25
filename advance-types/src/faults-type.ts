type Custom = {
    age: number;
    name: string;
}

type Item = number | string | Custom;


function append<T>(items: Item[]) {
    items.push('hello world!')
}


const items: Item[] = [];
console.log(items)
append(items)
console.log(items)


const numbers: number[] = [1, 2, 3, 4]
append(numbers)
console.log(numbers)