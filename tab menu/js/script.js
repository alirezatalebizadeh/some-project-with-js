let buttonWrapper = document.querySelector('.buttonWrapper')
let tabButtons = document.querySelectorAll('.tab-button')
let contents = document.querySelectorAll('.content')






buttonWrapper.addEventListener('click', event => {

    //! change background-color
    tabButtons.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')

    let mainContentId = event.target.dataset.id
    //!change content with add and remove class 
    contents.forEach(content => content.classList.remove('active'))
    document.querySelector(`#${mainContentId}`).classList.add('active')

})



