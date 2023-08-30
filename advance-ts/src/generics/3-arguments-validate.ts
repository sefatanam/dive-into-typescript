const longestLength = <T extends {length: number}>(number1:T,number2: T)=>{
    return number1.length > number2.length ? number1:number2;
 }
 
 
 const result1 = longestLength([1,2,3], [2,3,4,5])
 const result2 = longestLength('a', [2,3,4,5]) // should throw error
 const result3 = longestLength('ab', 'abcd')
 const result4 = longestLength(10, 1000) // should throw error
 