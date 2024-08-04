
// for first image....
const randomNumber1 = Math.floor(Math.random() * 6) +1
const randomImage = 'dice' + randomNumber1 + '.png' // image pic kiya dice ke baad jo number h random kar ke
const imagePath = 'images/' + randomImage  // image src ko string mein store kiya aur random print kiya
const image1 = document.querySelectorAll('img')[0] // element seleclt kiya 
image1.setAttribute("src", imagePath )  // attribute chnge kiya src ka 



/// for seceond image.....
const randomNumber2 = Math.floor(Math.random() * 6) +1
const randomImage1 = 'dice' + randomNumber2 + '.png' // image pic kiya dice ke baad jo number h random kar ke 
const imagePath1 = 'images/' + randomImage1 // image src ko string mein store kiya aur random print kiya
const image2 = document.querySelectorAll('img')[1] // element seleclt kiya 
image2.setAttribute("src", imagePath1 ) // attribute chnge kiya src ka 


if(randomNumber1 > randomNumber2){
   const player1 = document.querySelector('h1').innerHTML = 'Player 1 WIN'
} else if( randomNumber2> randomNumber1){
   const player2= document.querySelector('h1')
   player2.innerHTML = ' Player 2 Win'
}else{
    document.querySelector('h1').innerHTML = 'Draw'
}

// const refreshPages = document.querySelector('.btn')

function refreshPage(){
   location.reload();
}