let cont = document.querySelector('.container')  // using let because i do not want to store in memory

// div element under the container
for (let i = 1; i <= 1000; i++){
    const imgContainer = document.createElement('div')
    const addingClass = imgContainer.classList.add('image-cont')

    const myHtml = `<img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
     <p>${i}</p>`

    imgContainer.innerHTML = myHtml
    cont.appendChild(imgContainer)

                   
}

// // image element
// const newImg = document.createElement('img')
// newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png`

// // paragraph element
// const paragraph = document.createElement('p')
// paragraph.innerText = 10

// // append under the div 
// imgContainer.appendChild(newImg, paragraph)
// container.appendChild(imgContainer)

// document.addEventListener('DOMContentLoaded', function() {
//    
 
// });

// for(let i = 1; i <= 100; i++){
//     const cont = document.querySelector('.container');

//     const imgContainer = document.createElement('div');
//     imgContainer.classList.add('image-cont');

//     const newImg = document.createElement('img');
//     newImg.src =` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//     const paragraph = document.createElement('p');
//     paragraph.innerText = i;

//     imgContainer.append(newImg, paragraph);
//     cont.append(imgContainer);
// }



// deleting elemet from html 

const mImg = document.querySelector("body > div > div:nth-child(3)")