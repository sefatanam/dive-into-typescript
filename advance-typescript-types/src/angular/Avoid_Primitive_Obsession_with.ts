//Avoid Primitive Obsession with

// const getUserPosts = (userId: string) => {
//   // Logic that queries for users
// }
// const documentId = 'doc-xyz-123'; // also a string
// // TypeScript sees no issue here, but it's a nasty bug!
// getUserPosts(documentId);

// we can prevent this behaviour by creating a brand type, which block such invalid
// assignments unless an explicit type cast is perform.

type Brand<TData, TLabel extends string> = TData & { __brand: TLabel }

type UserId = Brand<string, 'UserId'>


const getUserPosts = (userId: UserId) => {
  // Logic that queries for users
}
const documentId = 'doc-xyz-123' as UserId; //
// To create a UserId, you must explicitly cast it (ideally within a validation function):

// Now TypeScript throws an error 💢, preventing the nasty bug.
// Error: Argument of type 'string' is not assignable to parameter of type 'UserId'.
getUserPosts(documentId);
