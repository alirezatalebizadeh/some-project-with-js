document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState === 'visible') {
        document.title = 'active tab'
    } else {
        document.title = 'inActive tab'
        document.querySelector('.pass').innerHTML = '(نمی تونی ازمون بدی)'
        document.querySelector('.pass').classList.add('faild')
    }
})


