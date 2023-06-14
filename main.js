let buttonPlay = document.querySelector("#btn-play")
let buttonStop = document.querySelector("#btn-stop")
let buttonPlus = document.querySelector("#btn-plus")
let buttonLess = document.querySelector("#btn-less")
let minutesDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1
  }, 1000)
}

buttonPlay.addEventListener("click", function() {
  countdown()
})
