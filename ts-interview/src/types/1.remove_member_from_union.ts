type letter = 'a' | 'b' | 'c';
// TODO : What does extends keyword do ?
type removeC<TType> = TType extends 'c' ? never : TType; 
type withoutC = removeC<letter>;

