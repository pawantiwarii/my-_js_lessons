const h1 = document.querySelector('h1')
const myName = document.querySelector('.pawan')



const card = document.querySelector('.add-card')

// cpying the card by using javaScript

let count = 1

// card.addEventListener('mousedown', ()=> { // mouse down event
// card.addEventListener('mouseup', ()=> {    // mouse up event
card.addEventListener('click', ()=> {    // mouse up event
   

    // for(let i = 1; i <=1000; i++){
        //////////////////////////////////////////////////
        // card print                                     //
        const newCard = document.createElement('div')     //
        newCard.classList.add('card')                     //
        myName.append(newCard)                            //  
        console.log(newCard);                             //  
        ////////////////////////////////////////////////////

        // numbering on card 

        ////////////////////////////////////////////////////
        const paragraph = document.createElement('p')      //
        newCard.append(paragraph)                          // 
        paragraph.innerText = count++
        // count++                            // 
        ////////////////////////////////////////////////////
    // }
    myName.addEventListener('click', (e)=>{
        if(e.target !== myName){
            e.target.remove()
        }
    })



})

// card.addEventListener('click', ()=>{
//     card.remove()
// })

