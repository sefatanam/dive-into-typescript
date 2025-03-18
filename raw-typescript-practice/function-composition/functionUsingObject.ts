
/** 
 * * args object definition is {name, address}
 *  @param args 
 *  TODO : Use function definition , it makes easier to understand for developers 
 * ! Don't use direct params
 */
export function objectName(args: { name?: string; address?: string; }) {
    console.log(args.name + "-" ?? 'Name : Not Provided, ', args.address ?? 'Address : Not Provided')
}
