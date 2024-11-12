
type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P] : T[P]
}


interface Todo {
  title: string                                                     
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}


type MyPick <T, K extends keyof T> = {
    [P in keyof T as P extends K ? P : never] : T[P]
}

type TodoInfo = MyPick<Todo, 'description' | 'title'>
