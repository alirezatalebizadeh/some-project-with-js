let wrapperElem = document.querySelector('.wrapper')
let menuListElem = document.querySelector('.options')
let btnSelect = document.querySelector('.select-btn')
let searchElemInput = document.querySelector('.inputElem')
let spanElem = document.querySelector('.select-btn span')

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];





//! add country to list
function addCountries() {
    let li = null;

    countries.forEach(country => {
        li = `<li onclick='updateName(this)'> ${country}</li>`
        menuListElem.insertAdjacentHTML('beforeend', li)
    })
}


//! upadete Name and change background
function updateName(el) {
    spanElem.innerHTML = el.innerHTML
    wrapperElem.classList.remove('active')

    searchElemInput.value = ''

    for (let option of menuListElem.children) {
        if (option.innerHTML === el.innerHTML) {
            option.classList.add('selected')
        } else {
            option.classList.remove('selected')
        }
    }
    el.classList.add('selected')
}



window.addEventListener('load', () => {
    addCountries()
})


//! show menu
btnSelect.addEventListener('click', (event) => {
    wrapperElem.classList.toggle('active')
    addCountries()
})



//! filter data with search user
searchElemInput.addEventListener('keyup', () => {
    let searchWord = searchElemInput.value.toLowerCase()

    let filterCountry = countries.filter(country => country.toLowerCase().startsWith(searchWord)).map(country => `<li onclick='updateName(this)'> ${country}</li>`).join('')

    menuListElem.innerHTML = filterCountry
})




