
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => {
  if (v)
    return 1
  else
     return 2
}

const fn2 = () => {
  if (Math.random() > 0.5) {
    return 0.7
  } else {
    return false
  }
}
// Answer 
type a = ReturnType<typeof fn> // should be "1 | 2"

type b = MyReturnType<typeof fn2>
