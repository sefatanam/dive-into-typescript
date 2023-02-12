//1. Generic on the type level
/* type MyGenericType<T> = {
    data:T
}
type Example1 = MyGenericType<{firstName:string, age:number}>;
type Example2 = MyGenericType<number> */

// parsing type in function arguments
/* 
const makeFetch = <TData>(url:string): Promise<TData> => {
    return fetch(url).then((response)=> response.json())
}

makeFetch<{firstName:string, age:number}>('api/users').then((res) => {
    let response = res;//
})
 */

// Interring types passed to a function

/* const addIdToObj = <T>(obj:T) => {
  return {
    ...obj,
    id: Date.now().toString(),
  };
};

const result = addIdToObj({ fistName: "Sefat Anam", age: 19 }); */


// Generic constraints
/* 
const getKeyWithHightValue = <TObj extends Record<string, number>>(obj): { key: keyof TObj, value: number } => {
    const keys = Object.keys(obj) as Array<keyof TObj>;
    let highestKey: keyof TObj = keys[0];
    let highestValue = obj[highestKey];
    for (const key of keys) {
        if (obj[key] > highestValue) {
            highestKey = key;
            highestValue=obj[key]
        }
    }
    return { key: highestKey, value: highestValue }
}


const result = getKeyWithHightValue({
    a: 5,
    b: 2,
    c: 3
})

console.log(result.key)
console.log(result.value) */

// As is okay
/* const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
    return Object.keys(obj) as Array<keyof TObj>
}

const result = typedObjectKeys({ name: 'sefat', age: 19 }) */

// The Zod
/* import { z } from 'zod'

const makeZodSafeFetch = <TData>(url: string, schema: z.Schema<TData>): Promise<TData> => {
    return fetch(url)
        .then((res) => res.json())
        .then((res) => schema.parse(res))
}

makeZodSafeFetch(
    'gituhb.com/users',
    z.object({
        firstName: z.string(),
        lastName: z.string(),
        id: z.string()
    })
).then((res) => {
    console.log(res)
}) */

/* Thats all, have a nice generic day */

/* Dont use return type unless https://youtu.be/nwSe95uFN8E*/