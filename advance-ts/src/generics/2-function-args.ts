
/**
 * Answer
 * @param arr 
 * @param fn 
 * @returns 
 */
const map =<T, O>(arr:T[], fn:(item: T)=>O): O[]=>{
    return arr.map(fn)
}

type Member = {name:string}

const strNumbers =['1','2','3']
const members =[{
    name:'A',
    age:12
},{
    name:'B',
    age:16
}]

const getName =(member: any): Member=>{
    return member['name']
}

// Question
/* const map =(arr:any[],fn:any)=>{
    return arr.map(fn)
} */
const output1 = map(strNumbers, (item)=>parseInt(item))
const output2 = map(members, (item)=>getName(item))