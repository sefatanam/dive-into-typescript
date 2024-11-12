interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK


type MyReadonly<T, K extends keyof T> = {
     [P in K]: T[P]
}  & {
    [P in keyof T as P extends K ? never : P]: T[P]
}