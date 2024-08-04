// function multiply(a, b){

//     return a * b

// }
function multiply(a, b = 5){

    return a * b

}


// function rollADice(){
//     return Math.floor(Math.random() * 6 ) +1
// }
function rollADice(numberOfSides = 6){
    return Math.floor(Math.random() * numberOfSides ) +1
}