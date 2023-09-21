
let wrapper = document.querySelector('.wrapper')
let toast = document.querySelector('.toast')
let title = document.querySelector('span')
let subTitle = document.querySelector('p')
let icon = document.querySelector('.icon')
let close_icon = document.querySelector('.close-icon')


function offline() {
    toast.classList.add('offline')
    title.innerHTML = 'You are offline now'
    subTitle.innerHTML = 'ooOps! internet is  disconnected'
    icon.innerHTML = '<i class="uil uil-wifi"></i>'
    close_icon.addEventListener('click', () => {
        wrapper.classList.add('hide')
    })
    setTimeout(() => {
        wrapper.classList.add('hide')
    }, 4000)
}

function ajaxRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if (res.status < 300 || res.status === 200) {
                toast.classList.remove('offline')
                title.innerHTML = 'You are online now'
                subTitle.innerHTML = 'hurray! internet is connected'
                icon.innerHTML = '<i class="uil uil-wifi"> </i>'
                close_icon.addEventListener('click', () => {
                    wrapper.classList.add('hide')
                })
                setTimeout(() => {
                    wrapper.classList.add('hide')
                }, 4000)
            } else {
                offline()
            }
        })
        .catch(err => {
            offline()
        })
}

window.addEventListener('load', () => {
    function offline() {
        toast.classList.add('offline')
        title.innerHTML = 'You are offline now'
        subTitle.innerHTML = 'ooOps! internet is  disconnected'
        icon.innerHTML = '<i class="uil uil-wifi"></i>'
        close_icon.addEventListener('click', () => {
            wrapper.classList.add('hide')
        })
        setTimeout(() => {
            wrapper.classList.add('hide')
        }, 4000)
    }

    function ajaxRequest() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                if (res.status < 300 || res.status === 200) {
                    toast.classList.remove('offline')
                    title.innerHTML = 'You are online now'
                    subTitle.innerHTML = 'hurray! internet is connected'
                    icon.innerHTML = '<i class="uil uil-wifi"> </i>'
                    close_icon.addEventListener('click', () => {
                        wrapper.classList.add('hide')
                    })
                    setTimeout(() => {
                        wrapper.classList.add('hide')
                    }, 4000)
                } else {
                    offline()
                }
            })
            .catch(err => {
                offline()
            })
    }
    setInterval(() => {
        ajaxRequest()
    }, 1000)
})


// window.addEventListener('offline', () => {
//     ajaxRequest()
// })
// window.addEventListener('online', () => {
//     ajaxRequest()
// })






