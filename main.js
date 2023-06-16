const buttonPlay = document.querySelector(".btn-play")
const buttonStop = document.querySelector(".btn-stop")
const buttonPlus = document.querySelector(".btn-plus")
const buttonLess = document.querySelector(".btn-less")
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
let minutes
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
  secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}

function addMinutes() {
  let currentSeconds = secondsDisplay.textContent
  let currentMinutes = Number(minutesDisplay.textContent)
  let newMinutes = currentMinutes + 5
  updateTimerDisplay(newMinutes, currentSeconds)
}

buttonPlay.addEventListener("click", function () {
  countdown()
})

buttonStop.addEventListener("click", function () {
  clearTimeout(timerTimeOut)
})
