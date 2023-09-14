
let menuLinks = document.querySelectorAll('a')
let animElem = document.querySelector('.anim')


menuLinks.forEach(link => {

    link.addEventListener('mouseenter', (event) => {
        animElem.style.width = event.target.offsetWidth + 'px'
        animElem.style.left = event.target.offsetLeft + 'px'
    })

});








