// const makeHttpsRequest = (method, url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     callback(xhr.response);
//   });
//   // xhr.open('GET', 'https://dummyjson.com/users' )
//   xhr.open(method, url);
//   xhr.send();
// };
// initial call
// makeHttpsRequest("GET", "https://dummyjson.com/users", (usersData) => {
//     console.log(usersData.users[1].id)
//     console.log(usersData)
//   makeHttpsRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[1].id}`, (postData) => {
//     console.log(postData.posts[1].id)
//     console.log(postData)
//       makeHttpsRequest( "GET", `https://dummyjson.com/comments/post/${postData.posts[1].id}`, (commentsData)=>{
//             console.log(commentsData.comments[0].id)
//             console.log(commentsData);

//         }
//       );

//     }
//   );
// });

// fixing call-back using promises. Let's go boom !!!!!

function makeHttpsRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  // creating promise
  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
    xhr.addEventListener("error", (err) => {
      // console.log('hii');
      reject('request failed')
      
    });
  });
  // xhr.open('GET', 'https://dummyjson.com/users' )
  xhr.open(method, url);
  xhr.send();
  return promise;
}

makeHttpsRequest("GET", "https://dummyjson.com/users")
  .then((usersData) => {
    console.log(usersData);
    
    return makeHttpsRequest(
      "GET",
      `https://dummyjson.com/posts/user/${usersData.users[1].id}`
    );
  })
  .then((postData) => {
    console.log(postData);
    return makeHttpsRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[1].id}`)
  }).then((commentsData) =>{
    console.log(commentsData);
    
  }).catch((err)=>{
    console.log(err);
    
  })
                
