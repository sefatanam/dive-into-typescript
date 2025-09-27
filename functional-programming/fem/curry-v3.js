import { curry } from 'ramda';


const replace = curry((regex, replacement, str) =>
  str.replace(regex, replacement));


const replaceVowels = replace(/[AEIOU]/ig, '🥲')
const result = replaceVowels("Hey, How are you?")
console.log(result)
