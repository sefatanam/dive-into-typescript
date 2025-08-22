// Don't spam it everywhere now. Just use it in cases where working with types is really hard :D.
// Credit MattPocock

type Prettify<TObject> = {
  [Key in keyof TObject]: TObject[Key]
} & {}

let prettify: Prettify<User>;
