interface JsonUser{
    id: number;
    firstname:string;
    lastname:string;
    email:string;
}

async function getUser(): Promise<Array<JsonUser>> {
    const result = await fetch('https://dummyjson.com/users/1')
    return result.json()
}

type User = Awaited<ReturnType<typeof getUser>>
