let passInputElem = document.querySelector('#password')
let warningElem = document.querySelector('#warning')


//این متد مخصوص ایونت کیبورد هست.
passInputElem.addEventListener('keyup', (event) => {

    if (event.getModifierState('CapsLock')) {
        warningElem.style.display = 'block'
    } else {
        warningElem.style.display = 'none'

    }
})