// https://4markdown.com/exhaustiveness-checking-and-discriminant-property-the-complete-guide/?ref=angularspace.com
type State = {
  loading: boolean;
  error: string | null;
  data: User | null;
}

const data: State = {
  loading: true,
  error: "",
  data: null
}

// Very soon we will encounter some code magic like this
// if (loading && !error && data) { }
// if (!loading && error && data) { }


// Approach 1 : TO be more optimistic

// Discriminant Property

type Statex =
  | { status: 'idle' }
  | { status: 'busy' }
  | { status: 'ok', data: User }
  | { status: 'fail', error: string }


const statex: Statex = { status: 'busy' }


// However repeating this sort of structure generate a lot of code duplucation
// We may create more generic utility type

type Process<T = void, E = Error, TSkip = false> =
  | (TSkip extends false ? { status: 'idle' } : never)
  | { status: "busy" }
  | (T extends void ? { status: "ok" } : { status: "ok", data: T })
  | (E extends void ? { status: "fail" } : { status: "fail", error: E })


type StateT = Process<User>

let stateUser: StateT = { status: "busy" }
let stateUser1: StateT = { status: "fail", error: new Error("Someting went wrong!") }
