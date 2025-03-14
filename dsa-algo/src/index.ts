import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
const numbersCollection = new NumbersCollection([3, 2, 1]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection('adbca');
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.add(0);

// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.sort();
linkedList.print();
