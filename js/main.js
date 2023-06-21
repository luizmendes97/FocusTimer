/* Variables */
let minutes
let timerTimeOut

/* Timer Buttons */
const buttonPlay = document.querySelector(".btn-play")
const buttonStop = document.querySelector(".btn-stop")
const buttonPlus = document.querySelector(".btn-plus")
const buttonLess = document.querySelector(".btn-less")

/* Timer Display */
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")

/* Audio Buttons */
const buttonForest = document.querySelector(".btn-forest")
const buttonRain = document.querySelector(".btn-rain")
const buttonCoffeeShop = document.querySelector(".btn-coffee-shop")
const buttonFireplace = document.querySelector(".btn-fireplace")
const forestSound = new Audio("./audios/forest.wav")
const rainSound = new Audio("./audios/rain.wav")
const coffeeShopSound = new Audio("./audios/coffee-shop.wav")
const fireplaceSound = new Audio("./audios/fireplace.wav")

/* Timer Functions */
function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes == 0 && seconds <= 1) {
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = minutes
  secondsDisplay.textContent = seconds

  if (seconds < 10) {
    secondsDisplay.textContent = "0${seconds}"
  }

  if (minutes < 10) {
    minutesDisplay.textContent = "0${minutes}"
  }
}

function addFiveMinutes(minutes, seconds) {
  updateDisplay(minutes + 5, seconds)
}
function decreaseFiveMinutes(minutes, seconds) {
  updateDisplay(minutes - 5, seconds)
}

function getCurrentMinutes() {
  return Number(minutesDisplay.textContent)
}

function getCurrentSeconds() {
  return Number(secondsDisplay.textContent)
}

buttonPlay.addEventListener("click", function () {
  countdown()
})

buttonStop.addEventListener("click", function () {
  clearTimeout(timerTimeOut)
})

buttonPlus.addEventListener("click", () => {
  addFiveMinutes(getCurrentMinutes(), getCurrentSeconds())
})

buttonLess.addEventListener("click", () => {
  decreaseFiveMinutes(getCurrentMinutes(), getCurrentSeconds())
})

/* Sound function */
function playSound(sound) {
  sound.play()
  sound.loop = true
}

function pauseSound(sound) {
  sound.pause()
}

function checkIfSoundActive(element) {
  if (element.classList.contains("active")) {
    element.classList.remove("active")
    return
  } else {
    element.classList.add("active")
    return
  }
}

/* Sound events */
buttonForest.addEventListener("click", () => {
  checkIfSoundActive(buttonForest) 
  pauseSound(forestSound)
  playSound(forestSound)
})

buttonRain.addEventListener("click", () => {
  checkIfSoundActive(buttonRain)
  pauseSound(rainSound)
  playSound(rainSound)
})

buttonCoffeeShop.addEventListener("click", () => {
  checkIfSoundActive(buttonCoffeeShop)
  pauseSound(coffeeShopSound)
  playSound(coffeeShopSound)
})

buttonFireplace.addEventListener("click", () => {
  checkIfSoundActive(buttonFireplace)
  pauseSound(fireplaceSound)
  playSound(fireplaceSound)
})
