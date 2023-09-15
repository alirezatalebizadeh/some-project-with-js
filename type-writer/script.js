let divElem = document.querySelector('#text')

let txt = 'I,m a developer from iran'
let index = 0;

const typeWriter = () => {

    if (index < txt.length) {
        divElem.innerHTML += txt[index]
        index++
    }

    setTimeout(() => {
        typeWriter()
    }, 100)

}


typeWriter()

