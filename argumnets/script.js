


'use strict'
let sum = [];
// agruments key word is not work with arrow function 
// it is not a array but it like a arrow
// it works with rest parameter ...arguments
// let args = []
function add(){

    for( let i = 0; i < arguments.length; i++){
       
        sum[i] = arguments[i]
    }
    return sum
   
}
const  result = add(5, 5, 4,5,4,9)
console.log(result);
// to reduce the sum array means adding the total value

const reduceNumber = sum.reduce((accumulator, current, index, array) =>
{
    console.log(accumulator);
    return accumulator + current
    
},0)
console.log(`Total Value : ${reduceNumber}`);





