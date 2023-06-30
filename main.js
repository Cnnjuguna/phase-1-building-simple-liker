// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const unclickedHeart = document.querySelector(".like-glyph");

// Target the error modal and message

const errorModal = document.querySelector("modal");
const errorMessage = document.querySelector("#modal-message");


function toggleHeartState(heart) {
  if (heart.innerHTML === EMPTY_HEART){heart.innerHTML = FULL_HEART
    heart.classList.add('activated-heart');

  } else 
  { heart.innerHTML = EMPTY_HEART
    heart.classList.remove('activated-heart');
  }
}


document.addEventListener("DOMContentLoaded", (e) => {
  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
      heart.addEventListener("click", () => {
       mimicServerCall()
       .then(() =>{
          toggleHeartState(heart);
       })
       .catch(() => {
          errorMessage.innerHTML = error;
          errorModal.classList.remove("hidden")
          setTimeout(() => { errorModal.classList.add("hidden")}, 3000);
          toggleHeartState(heart);
       });
      });
    });
})





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
    }, 3000);
  });
}
