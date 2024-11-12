/*

// Source : https://dev.to/macsikora/advanced-typescript-exercises-answer-1-59ge
type X = Promise<string>
type Y = Promise<{ field: number }>

type ResultX = Transform<X>; // ResultX type equals string
type ResultY = Transform<Y>; // ResultY type equals { field: number }

type Transform<A> = A extends Promise<infer Inner> ? Inner : never;

type Result = Transform<Promise<string>>;

*/

/*
// Source :https://dev.to/macsikora/advanced-typescript-exercises-answer-2-2ihh

type User = {
    id: number;
    kind: string;
};

function makeCustomer<T extends User>(u: T): T {
    // Below error, why?
    return {
        ...u, // without spreading this error will happens
        id: u.id,
        kind: 'customer'
    }
}*/

const person = {
    name: "Sefat",
    age: 12
} as const;

interface User {
    name:string;
    age:number;
}

type SolidName<T extends Readonly<User>> = { [k in T['name']]:string }

type InferNames = SolidName<typeof person>;

type Int = {
  sefat: string
}

const firstUser : InferNames ={'Sefat':'Anam'}
