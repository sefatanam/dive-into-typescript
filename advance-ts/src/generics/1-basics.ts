const obj ={
    home :'/home',
    dashboard : '/dashboard',
    contract :'/contract'
} as const

type RouteKey = typeof obj;
type RoutePath = typeof obj[keyof typeof obj]

const setPath =(url: RoutePath)=>{
    return url;
}

// setPath('/') // this will throw error
// setPath('/contract') // this will not throw error and provide auto complete