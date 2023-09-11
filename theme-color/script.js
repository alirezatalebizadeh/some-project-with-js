let btnsElems = document.querySelectorAll('.btn')
let themeCssVariable = document.querySelector(':root')

btnsElems.forEach(btn => {
  btn.addEventListener('click', event => {
    let mainThemeColor = event.target.dataset.color

    themeCssVariable.style.setProperty('--theme-color', mainThemeColor)
    console.log(mainThemeColor,themeCssVariable);
  })
})
