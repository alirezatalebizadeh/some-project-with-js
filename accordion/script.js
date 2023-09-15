let tabs = document.querySelectorAll('.wrapper')
let contents = document.querySelectorAll('.content')
let icons = document.querySelectorAll('.icon')
let toggles = document.querySelectorAll('.toggle')

let contentElem, toggleElem, iconElm;

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        console.log(event.target);
        closeAllTabs()

        tab.querySelector('.content').style.height = 'auto'
        tab.querySelector('.toggle').style.color = '#0084e9'

        tab.querySelector('.icon').classList.add('fa-minus')
        tab.querySelector('.icon').classList.remove('fa-plus')
    })
})



function closeAllTabs() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.height = '0px'
        toggles[1].style.color = '#111130'
        icons[i].classList.remove('fa-minus')
        icons[i].classList.add('fa-plus')
    }
}


