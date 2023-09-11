let menuElems = document.querySelectorAll('.menu a')
let btnMenu = document.querySelector('#toggle-btn')
let flagMenu = false

btnMenu.addEventListener('click', event => {
  if (!flagMenu) {
    btnMenu.classList.add('active')

    menuElems[0].style.transform = `translate(150px,-10px)`
    menuElems[1].style.transform = `translate(130px,70px)`
    menuElems[2].style.transform = `translate(70px,130px)`
    menuElems[3].style.transform = `translate(-10px,150px)`
    flagMenu = true
  } else if (flagMenu) {
    btnMenu.classList.remove('active')

    menuElems.forEach(menu => {
      menu.style.transform = `translate(0px,0px)`
    })

    flagMenu = false
  }
})
