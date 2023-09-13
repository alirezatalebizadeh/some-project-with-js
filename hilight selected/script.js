let searchBtnElem = document.querySelector('button')
let paragraphElem = document.querySelector('#paragraph')
let searchInputElem = document.querySelector('#text-to-search')




const search = () => {
    let searchInputValue = searchInputElem.value
    // let searhRegex = `/${searchInputValue}/g`
    let searhRegex = new RegExp(`${searchInputValue}`, 'gi')

    paragraphElem.innerHTML = paragraphElem.textContent.replace(searhRegex, (item) => `<mark>${item}</mark>`)

    console.log(paragraphElem);
}




searchBtnElem.addEventListener('click', search)
searchInputElem.addEventListener('keyup',search)





