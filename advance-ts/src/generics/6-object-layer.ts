const gep = {
    name: 'hi',
    address:{
        name:'bye'
    },
    contactNo:123
}

const getProps =<T, K  extends keyof T, I extends keyof T[K]>(obj: T, key:K, key2?:I)=>{
    return obj[key][key2]
}

// console.log(getProps(gep, 'key')) // shoudl throw error
console.log(getProps(gep, 'address','name')) // shoudl throw error  