




type ToPath<IItems extends string[]> = IItems extends
  [infer Head extends string, ...infer Tail extends string[]]
  ? `${Head}${Tail extends [] ? '' : `/${ToPath<Tail>}`}` : ''


type ToQueryString<TParams extends string[]> = TParams extends [
  infer Head extends string,
  ...infer Tail extends string[],
]
  ? `${Head}=${string}${Tail extends [] ? '' : '&'}${ToQueryString<Tail>}`
  : '';


// The main utility to construct the full URL type
type StrictURL<
  TProtocol extends 'https' | 'http',
  TDomain extends `${string}.${'com' | 'dev' | 'io'}`,
  TPath extends string[] = [],
  TParams extends string[] = [],
> = `${TProtocol}://${TDomain}${TPath extends []
? ''
: `/${ToPath<TPath>}`}${TParams extends []
? ''
: `?${ToQueryString<TParams>}`}`;


// A route with a dynamic segment
type HomeRoute = StrictURL<'https', 'polubinski.io', ['articles', string, 'id']>;
// Hovering shows: `https://polubinski.io/articles/${string}/id`

// A route with query parameters
type SearchRoute = StrictURL<'https', 'google.com', ['search'], ['q', 'source']>;
// Hovering shows: `https://google.com/search?q=${string}&source=${string}`


function goTo(searchRoute: SearchRoute){

}

goTo("https://google.com/search?q=typescript&source=github");
goTo("https://google.com/"); 
goTo("https://google.com/search?q=typescript"); 
goTo("https://google.com/search?foo=bar"); 
