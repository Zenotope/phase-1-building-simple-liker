// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.querySelectorAll(".like-glyph")

// Your JavaScript code goes here!


function likeClick(e){
  const heart = e.target
  mimicServerCall("doesntmatter")
      .then(function (){
  
  })
  .catch(function (error){
    const modal = document.getElementById("modal")
    modal.className =""
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000)
  })
} 

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeClick);
}


// function submitData(){
//   return fetch("http://localhost:3000/users", configObj)
//   .then(function (response){
//       return response.json()
//   })
//   .then(function (object){
//   document.body.innerHTML = object ["id"]
//   })
//   .catch(function(error){
//       document.body.innerHTML = error.message

//   })
// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
