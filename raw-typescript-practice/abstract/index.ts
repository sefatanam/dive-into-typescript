import { NumbersCollection } from "./NumbersCollection";


const nc = new NumbersCollection([10, 3, -5, 0]);

nc.sort();

console.log(nc.data);
