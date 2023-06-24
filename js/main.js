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
const forestVolumeSlider = document.querySelector("#forestVolume")
const rainVolumeSlider = document.querySelector("#rainVolume")
const coffeeShopVolumeSlider = document.querySelector("#coffeeShopVolume")
const fireplaceVolumeSlider = document.querySelector("#fireplaceVolume")

/* Light Mode Buttons */
const lightModeButton = document.querySelector(".light-mode-button")
const darkModeButton = document.querySelector(".dark-mode-button")

/* Timer Functions */
function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes == 0 && seconds <= 0) {
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
    secondsDisplay.textContent = `0${seconds}`
  }

  if (minutes < 10) {
    minutesDisplay.textContent = `0${minutes}`
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

function pauseSound(pause) {
  forestSound.pause()
  rainSound.pause()
  coffeeShopSound.pause()
  fireplaceSound.pause()
}

function checkIfSoundActive(element) {
  element.classList.toggle("active")
  if (element.classList.contains("active")) {
    console.log("is not active")
    pauseSound()
  }
}

function changeVolume(sound, volume) {
  sound.volume = volume
}

/* Sound events */
buttonForest.addEventListener("click", () => {
  pauseSound()
  playSound(forestSound)
  checkIfSoundActive(buttonForest)
})

buttonRain.addEventListener("click", () => {
  pauseSound()
  playSound(rainSound)
  checkIfSoundActive(buttonRain)
})

buttonCoffeeShop.addEventListener("click", () => {
  pauseSound()
  playSound(coffeeShopSound)
  checkIfSoundActive(buttonCoffeeShop)
})

buttonFireplace.addEventListener("click", () => {
  pauseSound()
  playSound(fireplaceSound)
  checkIfSoundActive(buttonFireplace)
})

forestVolumeSlider.addEventListener("change", () => {
  changeVolume(forestSound, forestVolumeSlider.value)
})

rainVolumeSlider.addEventListener("change", () => {
  changeVolume(rainSound, rainVolumeSlider.value)
})

coffeeShopVolumeSlider.addEventListener("change", () => {
  changeVolume(coffeeShopSound, coffeeShopVolumeSlider.value)
})

fireplaceVolumeSlider.addEventListener("change", () => {
  changeVolume(fireplaceSound, fireplaceVolumeSlider.value)
})

/* Light mode function */
function toggleLightMode() {
  document.body.classList.toggle("dark-mode")

  darkModeButton.toggleAttribute("hidden")
  lightModeButton.toggleAttribute("hidden")
}

/* Light mode events */
lightModeButton.addEventListener("click", () => {
  toggleLightMode()
})

darkModeButton.addEventListener("click", () => {
  toggleLightMode()
})
