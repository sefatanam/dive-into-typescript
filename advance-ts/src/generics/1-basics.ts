export const obj ={
    home :'/home',
    dashboard : '/dashboard',
    contract :'/contract'
} as const;

export type RouteKey = typeof obj;
export type RoutePath = typeof obj[keyof typeof obj];

export const setPath =(url: RoutePath)=>{
    return url;
}

// setPath('/') // this will throw error
// setPath('/contract') // this will not throw error and provide auto complete
//
//

const arr = [1,2,3,4,5];
arr.push(1+1)
arr.push(1+2)
arr.push(1+3)
arr.push(1+4)
arr.push(1+5)
arr.push(1+6)
arr.push(1+7)
arr.push(1+8)
arr.push(1+9)
arr.push(1+10)
arr.push(1+11)
