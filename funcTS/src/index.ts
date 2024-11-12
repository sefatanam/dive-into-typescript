const createCounter = ()=>{
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}


const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();

let manipulate = counter2();
manipulate = manipulate + 42;

console.log("Counter 1 =>",counter1());
console.log("Counter 2 =>", counter2());
console.log("Manipulate =>", manipulate);
