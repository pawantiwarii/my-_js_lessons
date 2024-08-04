// fetch("https://dummyjson.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((userData) => {
//     return userData;
//   })
//   .then((data) => {
//     console.log(`${data.users[5].firstName} ${data.users[5].lastName}`)
//   })
// Promise.all()
// fetch(`https://dummyjson.com/posts/user/5`)
// .then(res => res.json())
// .then((data)=>{
//   console.log(`${data}`);
//   return data

// }).then((postData) =>{
//   console.log(postData.posts[1].tags);

// })

let p = Promise.all([
  fetch("https://dummyjson.com/users"),
  fetch("https://dummyjson.com/posts")
]).then((res) => {
  return Promise.all(res.map((response) =>{
    return response.json()
  })).then((data) =>{
    // console.log(data.users);
    return data
    
  }).then((userAndPostData) =>{
    console.log(userAndPostData[1].posts[1]);
    console.log(`${userAndPostData[0].users[1].firstName} ${userAndPostData[0].users[1].lastName}`);
    
    
  }).catch((e) =>{
    console.log('Failed to fetch data try again!!!!!!1');
    
  })
})
