export function objectName(args: { name?: string; address?: string; }) {
    console.log(args.name + "-" ?? 'Name : Not Provided, ', args.address ?? 'Address : Not Provided')
}
