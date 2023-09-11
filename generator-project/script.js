let btnCopy = document.querySelector('#copy')
let messageElem = document.querySelector('.message')
let firstColorInput = document.querySelector('#color-a')
let secondColorInput = document.querySelector('#color-b')
let currentDirection = 'to top'
let btnsDirections = document.querySelectorAll('.buttons button')
//!set background-color
function setColor (direction, dirElem) {
  for (let item of btnsDirections) {
    item.classList.remove('active')
  }
  currentDirection = dirElem
  direction.classList.add('active')
  generateCssCode()
  // console.log(dirElem, direction.tagName)
}

const generateCssCode = () => {
  let cssCode = `background:linear-gradient(${currentDirection},${firstColorInput.value},${secondColorInput.value})`
  document.querySelector('#code').value = cssCode

  //change background of body
  document.body.style.background = `linear-gradient(${currentDirection},${firstColorInput.value},${secondColorInput.value})`
}

document.querySelector('#submit').addEventListener('click', generateCssCode)

btnsDirections.forEach(direction => {
  direction.addEventListener('click', event => {
    let mainDirection = direction.dataset.direction

    setColor(direction, mainDirection)
  })
})
btnCopy.addEventListener('click', () => {
  let textCopy = document.querySelector('#code').select()
  document.execCommand('copy')
  messageElem.style.display = 'block'
  setTimeout(() => {
    messageElem.style.display = 'none'
  }, 3000)

  console.log(messageElem)
})
