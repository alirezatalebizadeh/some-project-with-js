let $ = document

let rightEye = $.querySelector('#righteye')
let leftEye = $.querySelector('#lefteye')
let usernameInput = $.querySelector('#userInput')
let passwordInput = $.querySelector('#passInput')

//postion left eye
let leftEyeTopPostition = 75,
  leftEyeLeftPosition = 110,
  leftEyePaddingLeft = 0,
  leftEyePaddingTop = 0

//postion right eye
let rightEyeTopPostition = 75,
  rightEyeLeftPosition = 175,
  rightEyePaddingLeft = 0,
  rightEyePaddingTop = 0

//!move eye to bottom
const userInputFocus = event => {
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 11) {
      clearInterval(eyePosition)
    }

    leftEye.style.paddingTop = leftEyePaddingTop + 'px'
    leftEye.style.left = leftEyeLeftPosition + 'px'

    rightEye.style.paddingTop = rightEyePaddingTop + 'px'
    rightEye.style.left = rightEyeLeftPosition + 'px'

    leftEyePaddingTop++
    leftEyeLeftPosition--

    rightEyePaddingTop++
    rightEyeLeftPosition--
  }, 10)
}
//!move eye to center
const userInputBlur = event => {
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 0) {
      clearInterval(eyePosition)
    }

    leftEye.style.paddingTop = leftEyePaddingTop + 'px'
    leftEye.style.left = leftEyeLeftPosition + 'px'

    rightEye.style.paddingTop = rightEyePaddingTop + 'px'
    rightEye.style.left = rightEyeLeftPosition + 'px'

    leftEyePaddingTop--
    leftEyeLeftPosition++

    rightEyePaddingTop--
    rightEyeLeftPosition++
  }, 20)
}

//! move eye to right or left with type
const userKeyHandler = event => {
  if (leftEyePaddingLeft > 20) {
    return false
  }

  // keyCode=8   ==>back space
  if (event.keyCode === 8) {
    leftEyePaddingLeft--
    rightEyePaddingLeft--
  } else {
    leftEyePaddingLeft++
    rightEyePaddingLeft++
  }

  leftEye.style.paddingLeft = leftEyePaddingLeft + 'px'
  rightEye.style.paddingLeft = rightEyePaddingLeft + 'px'
}

//! move eye to top
const passwordInputFocus = event => {
  let eyePosition = setInterval(() => {
    if (leftEyeTopPostition === 60) {
      clearInterval(eyePosition)
    }

    leftEye.style.top = leftEyeTopPostition + 'px'
    leftEye.style.left = leftEyeLeftPosition + 'px'
    rightEye.style.top = rightEyeTopPostition + 'px'
    rightEye.style.left = rightEyeLeftPosition + 'px'

    leftEyeTopPostition--
    leftEyeLeftPosition++
    rightEyeTopPostition--
    rightEyeLeftPosition--
  }, 10)
}

//! move eye to center
const passwordInputBlur = event => {
  let eyePosition = setInterval(() => {
    if (leftEyeTopPostition === 75) {
      clearInterval(eyePosition)
    }

    leftEye.style.top = leftEyeTopPostition + 'px'
    leftEye.style.left = leftEyeLeftPosition + 'px'
    rightEye.style.top = rightEyeTopPostition + 'px'
    rightEye.style.left = rightEyeLeftPosition + 'px'

    leftEyeTopPostition++
    leftEyeLeftPosition--
    rightEyeTopPostition++
    rightEyeLeftPosition++
  }, 10)
}

//!set event in userInput
usernameInput.addEventListener('focus', userInputFocus)
usernameInput.addEventListener('blur', userInputBlur)
usernameInput.addEventListener('keydown', userKeyHandler)

//!set event in passInput
passwordInput.addEventListener('focus', passwordInputFocus)
passwordInput.addEventListener('blur', passwordInputBlur)
document.body.addEventListener('click', () => {
  leftEyeTopPostition = 75
  leftEyeLeftPosition = 110
  leftEyePaddingLeft = 0
  leftEyePaddingTop = 0

  rightEyeTopPostition = 75
  rightEyeLeftPosition = 174
  rightEyePaddingLeft = 0
  rightEyePaddingTop = 0
})
