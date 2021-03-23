import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, 100, 1000, -5, 1, 2, 4, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection('adbca');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
