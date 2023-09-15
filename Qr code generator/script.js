
let wrapperElem = document.querySelector('.wrapper')
let inputElem = document.querySelector('input')
let btnElem = document.querySelector('button')
let btnDlElem = document.querySelector('button.download')
let imgElem = document.querySelector('img')



btnElem.addEventListener('click', () => {

    if (inputElem.value) {
        let valueSearch = inputElem.value.trim()
        btnElem.innerHTML = 'در حال تولید کد ...'

        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${valueSearch}`)
            .then(res => {
                imgElem.setAttribute('src', `${res.url}`)
                wrapperElem.classList.add('active')
                btnElem.innerHTML = 'ساخت کد '
                inputElem.value = ''
            })
    } else {
        alert('لطفا متنی را وارد نمایید')
    }
})

btnDlElem.addEventListener('click', event => {

    let impath = imgElem.getAttribute('src');
    let fn = getFileName(impath);
    saveAs(impath, fn);
    indexAction = 0
    btnDlElem.innerHTML = " تصویر دانلود شد"

})

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1);
}




