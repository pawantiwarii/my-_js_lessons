const h1 = document.querySelector('h1')



// Creating new element using javaScript

// const paragraphElement = document.createElement('p');
// paragraphElement.innerText = 'Pawan Tiwari';
// paragraphElement.classList.add('my-para', 'pawan');
// paragraphElement.id = 'hii'
// container.appendChild(paragraphElement);

// Creating Element for image and setting its source



const container = document.querySelector('.container')
let underDiv = document.createElement('div')
underDiv.classList.add('img')

let newImg = document.createElement('img')
newImg.src = 'https://plus.unsplash.com/premium_photo-1688594281407-51a8ffdbc70f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'

let para = document.createElement('p')
para.innerText = 10

underDiv.append(para, newImg)
container.append(underDiv)

