const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


// window.addEventListener('click', (e) =>{
//     console.log('Window event listener');
//     e.stopPropagation()
// })
// document.addEventListener('click', (e) =>{
//     console.log('document event listener');
//     e.stopPropagation()
// })
// document.body.addEventListener('click', (e) =>{
//     console.log('Body event listener');
//     e.stopPropagation()
// })
// green.addEventListener('click', (e) =>{
//     console.log('Green event listener');
//     e.stopPropagation()
// })
// pink.addEventListener('click', (e) =>{
//     console.log('Pink event listener');
//     e.stopPropagation()
    
// })
blue.addEventListener('click', (e) =>{
    console.log('Blue event listener');
    // e.stopPropagation()
    
}, { once: true})