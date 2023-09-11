let spanElemCounters = document.querySelectorAll('.num')
let benefitsCounter = document.querySelector('.benefits')

let startCounter = false

window.addEventListener('scroll', () => {
  if (window.scrollY >= benefitsCounter.offsetTop) {
    if (!startCounter) {
      spanElemCounters.forEach(counter => setCounter(counter))
    }
    startCounter = true
  }
})

function setCounter (elem) {
  let elemNumCount = +elem.dataset.count

  let counterInterval = setInterval(() => {
    if (elem.textContent == elemNumCount) {
      clearInterval(counterInterval)
    }
    elem.textContent++
  }, 20)


  console.log(elem, elemNumCount, window.scrollY , benefitsCounter.offsetTop)
}
