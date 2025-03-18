

interface Boxt<T> {
    contents: T[];
}


interface Apple {
    name:string;
    price : number;
}

interface Cat{
    name:string;
}

const t1 : Boxt<Apple> ={
    contents:[{
        name:'t3',
        price:12
    }]
}

const t2 : Boxt<Cat> = {
    contents:[
        {name:'Cat'}
    ]
}

t1.contents
t2.contents