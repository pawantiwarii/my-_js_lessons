// const allImages= document.getElementsByTagName('img')

// const cssImages = document.getElementsByClassName('css-image');
// const idCssImages = document.getElementById('css-images')
// const qeuerySeclector = document.querySelector('.css-image')
// const qeuerySeclector = document.querySelector('#css-images')
// const qeuerySeclector = document.querySelector('.javascript') 

// qeuerySeclector.src ='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg'

const imageUrl = [
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg',
    'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg'
]

// const allImages = document.querySelectorAll('img')

// allImages[0].src = imageUrl[0]
// allImages[1].src = imageUrl[1]
// allImages[2].src = imageUrl[2]

// for(let i = 0; i < imageUrl.length; i++){
//     allImages[i].src = imageUrl[i]
// }
const allImages =[...document.images]
allImages.forEach((image, i) =>{
    image.src = imageUrl[i]

})

