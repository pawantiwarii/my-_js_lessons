
const anchor = document.querySelectorAll('a')

console.log(anchor);


// for( let i = 0; i < anchor.length; i++){
//     anchor[i].style.color = 'teal'
// }


// using for of loop

// for ( const link of anchor){
//     link.style.color = 'green'
//     link.style.textDecoration = 'none'

// }

for ( const link of anchor){
//     link.style.cssText = 
//     `color: red; 
//     font-size: 18px; 
//     font-weight:700; 
//     text-decoration-line:none;
//     font-family:cursive, serif`
       
    link.classList.add('my-link')



}