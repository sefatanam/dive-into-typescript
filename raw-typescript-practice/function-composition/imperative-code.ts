
const filterEvens = (numbers: number[]) => {
    let index = 0;
    while (index < numbers.length) {
        if (numbers[index] % 2 !== 0) {
            numbers.splice(index, 1)
        } else {
            index++
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7]
filterEvens(numbers)
console.log("After filter=>",numbers)
