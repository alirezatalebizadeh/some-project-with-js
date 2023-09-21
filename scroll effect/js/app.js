let navbar = document.querySelector('#navabar')

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let nowScrollTop = document.documentElement.scrollTop;

    if (nowScrollTop > lastScrollTop) {
        navbar.style.top = '-80px'
    } else {
        navbar.style.top = '0px'
    }

    lastScrollTop = nowScrollTop
})









