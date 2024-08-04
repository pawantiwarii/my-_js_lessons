const h1   = document.querySelector('h1')
const container = document.querySelector('.container');





for(let i = 2; i <= 2; i++){
    const card = document.querySelector('.card')
    const newCard = card.cloneNode()
    container.appendChild(newCard)
    newCard.innerHTML = [i]

}


// cloning the h1 in to the container

// const clone = container.appendChild(h1.cloneNode(true));