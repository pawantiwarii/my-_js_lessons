
'use strict'
const fruits = ['apple', 'banana', 'mango', 'cheeku', 'grapes']

// for( let i =0; i <= fruits.length; i++){
//     console.log(fruits[i]);
    
// }


// for( const fruit of fruits){
//     // debugger
//     console.log(fruit);
    
// }


// 'strings'

const user = 'pawan tiwari';
for(let letter of user){
    console.log(letter);
}


const myObj = {
    user: 'Pawan Tiwari',
    age: 21,
    work: 'Web Developer',
    hobby:'programming'
}

// for(const key in myObj){
//     console.log(key, ":", myObj[key]);
    
// }

// for fast performance 
// we store the object in a variable using object.keys(myObj)

const userDetails = Object.keys(myObj);
const userValues = Object.values(myObj);
const userEntries = Object.entries(myObj);
// now we can use of instead of in 
for(const key of userDetails){
    console.log(key, ":", myObj[key]);
    
}


// object.values
for(const key of userValues){
    console.log(key);
    
}

//object.entries
for(const key in userEntries){
    console.log(key, ':', myObj);
    
}