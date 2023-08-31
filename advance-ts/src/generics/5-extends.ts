interface LengthWise{
    length:number;
}

const batchLogs =<T extends LengthWise>(args:T): T =>{
    console.log(args.length, args)
    return args;
}


// batchLogs(3) // shoudl throw error
batchLogs(['1','2','3']) // fine
batchLogs({name:'Ok', length:1}) // fine also we can bypass