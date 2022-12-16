const object1 = {
    a: 1,
    b: 2,
    c: 3
}

const object2 = {
    name: "Sefat",
    address: "Dhaka",
    contactNo:"423142313"
}

/* // Bad Practice + not safe
Object.keys(object1).forEach((key) => {
    console.log(object1[key])
}) */


const objectKeys = <T extends object>(obj: T) : (keyof T)[] => {
    return Object.keys(obj) as (keyof T)[]
} 

objectKeys(object1).forEach((key) => {
    console.log(object1[key])
})
objectKeys(object2).forEach((key) => {
    console.log(object1[key])
})