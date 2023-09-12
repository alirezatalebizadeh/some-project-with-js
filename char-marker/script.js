let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
let docRoot = document.querySelector(':root')
let faceBtn = document.querySelector('#face-btn')
let colorBtn = document.querySelector('#color-btn')
let hornsBtn = document.querySelector('#horns-btn')
let tailBtn = document.querySelector('#tail-btn')


let colors = [...bodyColors, 'transparent']

//create array
let [faceCounter, colorCounter, hornsCounter, tailCounter] = Array(4).fill(0)




const setCounter = (counter, length) => {
  return counter < length - 1 ? counter + 1 : 0
}


faceBtn.addEventListener('click', () => {
  faceCounter = setCounter(faceCounter, 6)
  console.log('click', faceCounter);
  document.querySelector('#face').setAttribute('src', `face-${faceCounter}.png`)
})


colorBtn.addEventListener('click', () => {
  colorCounter = setCounter(colorCounter, bodyColors.length)
  docRoot.style.setProperty('--color-character', bodyColors[colorCounter])
})
hornsBtn.addEventListener('click', () => {
  hornsCounter = setCounter(hornsCounter, colors.length)
  docRoot.style.setProperty('--color-horns', colors[hornsCounter])
})


tailBtn.addEventListener('click', () => {
  tailCounter = setCounter(tailCounter, colors.length)
  docRoot.style.setProperty('--color-tail', colors[tailCounter])
})



