const username = document.querySelector('#username')
const paragraph = document.querySelector('p')
// username.addEventListener('click', () =>{
//     console.log('Enter your Username');
    
let inputValue
// })
// username.addEventListener('input', (e) =>{
//     console.log(e);
//     paragraph.innerText = e.target.value
    
//     // console.log('Enter your Username');
    

// })

// change event 
// username.addEventListener('change', (e) =>{
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
    
//     // console.log('Enter your Username');
    

// })

//focud event
// username.addEventListener('focus', (e) =>{
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
    
//     // console.log('Enter your Username');
    

// })
username.addEventListener('blur', (e) =>{
    console.log(e);
    inputValue = e.target.value
    paragraph.innerText = e.target.value
    
    // console.log('Enter your Username');
    

})