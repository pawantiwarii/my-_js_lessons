async function makeHttpsRequest() {
  // const url = 'https://hub.dummyapis.com/delay?seconds=2'
  const url = "https://dummyjson.com/quotes";

//   const response = await fetch(url);
  const data = await (await fetch(url)).json()
 
  // console.log(response);
//   console.log(response.status);
//   console.log(response.ok);

//   const data = await response.json();

  // throw new Error('error in program');
//   console.log(data);
  console.log(data.quotes[2]);
}
makeHttpsRequest();

function addTwoNumbers() {
  return 5 + 8;
}
addTwoNumbers();

// function hi(){
//     console.log('hello');
//     throw new Error('error in program');

//     console.log('hii');

// }
