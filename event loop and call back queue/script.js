// console.log('console')

// function hello(){
//     console.log('hello world');
    
// }



// for(let i = 1; i <= 5; i++){
//     console.log(i);
    
// }

// setTimeout(hello, 200)
// setTimeout(hello, 500)
// setTimeout(hello, 800)
// setTimeout(hello, 1100)
// setTimeout(function(){
//     console.log('hello-1');
    
// }, 1400)

// console.log('console-1');

// // i learn about call back concept and call back queue

// // queue means in line the code execute line by line when we use setTimeout or setInterval
// // demo website name : event loupe here we can see our the code how it is actually work.


function fetchData(callback){
    let username = prompt("Please enter your name"); 
    let userTitle = prompt('Please enter your Title')
    setTimeout(function(){
        const data = `${username } ${userTitle}`
        callback(data)
    }, 2000)
}

function processData(data){
    console.log('Process data : ', data);
    
}
fetchData(processData);