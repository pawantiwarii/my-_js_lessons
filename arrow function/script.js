
// // function declaration

// function square(num){
//     return num * num
// }
// square()

// //function Expression
// const square = function(num){
//     return num * num
// }



// arrow function Expression 

//function Expression
const square = (num) =>{
    return num * num // we can return the value without using of return key word
}// remove this bracket and return keyword........ Explict retrun kehte hai jime return keyword use kiya hai 

//example

const sqr = (num) => num * num; // this is a valid function.  single arg mein bracket nhi bhi de tho chlega 
                    //implicit return (num * num )


const add = (a, b) => a + b ; // Addition 

const random = () =>(
     Math.floor(Math.random() * 10) +1
);

const addTwo = (num1 , num2) => (
    {username: "Pawan Tiwari"}

) // returning object use () for wrap the  

console.log(addTwo( 4, 5));
