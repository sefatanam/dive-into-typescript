const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: 'cool',
        d: false
    }
}

const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(
    obj      : Obj,
    firstKey : FirstKey,
    secondKey: SecondKey
) => {
    return {}
}


const result = getDeepValue(obj, 'bar', "c");

