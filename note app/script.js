const $ = document
const addBox = $.querySelector('.add-box'),
    popupBox = $.querySelector('.popup-box '),
    popupTitle = $.querySelector('header p'),
    popupClose = $.querySelector('header i'),
    inputElem = $.querySelector('input'),
    textareaElem = $.querySelector('textarea'),
    buttonElem = $.querySelector('button'),
    wrapperElem = $.querySelector('.wrapper')

let isUpdate = false
let updateID = null

let notes = []

addBox.addEventListener('click', showModal)


//! show modal
function showModal(noteTitle, noteDesc) {

    if (isUpdate) {
        popupTitle.innerHTML = 'Update main note'
        buttonElem.innerHTML = 'Update Note'
        inputElem.value = noteTitle
        textareaElem.value = noteDesc


    } else {
        popupTitle.innerHTML = 'Add a new note'
        buttonElem.innerHTML = 'Add Note'
    }
    inputElem.focus()
    popupBox.classList.add('show')
}


//! create note or update that
buttonElem.addEventListener('click', () => {

    if (isUpdate) {

        let allNotes = getLocalStorageNotes()

        allNotes.some((note, index) => {
            if (index === updateID) {
                note.title = inputElem.value
                note.description = textareaElem.value
            }
        })

        setNotesInLocalStorage(allNotes)
        generateNotes(allNotes)
        closeModal()
        clearInputs()

        isUpdate = false

    } else {
        let newNote = {
            title: inputElem.value,
            description: textareaElem.value,
            date: getNowDate()
        }

        notes.push(newNote)
        setNotesInLocalStorage(notes)
        closeModal()
        generateNotes(notes)
        clearInputs()
    }



})

//! create time
function getNowDate() {
    let now = new Date()

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let timeNow = `${months[now.getMonth()]}${now.getDay()}/${now.getFullYear()} (${days[now.getDay()]})`

    return timeNow
}

//! clear inputs
function clearInputs() {
    inputElem.value = ''
    textareaElem.value = ''
}

//! create all notes in localstorage
function generateNotes(notes) {

    $.querySelectorAll('.note').forEach(note => note.remove())

    notes.forEach((note, index) => {
        wrapperElem.insertAdjacentHTML('beforeend', `
        <li class="note">
        <div class="details">
          <p>${note.title}</p>
          <span>${note.description}</span>
        </div>
        <div class="bottom-content">
          <span>${note.date}</span>
          <div class="settings">
            <i class="uil uil-ellipsis-h" onclick="showSetting(this)"></i>
            <ul class="menu">
              <li onclick="editNote(${index}, '${note.title}', '${note.description}')">
                <i class="uil uil-pen"></i>Edit
              </li>
              <li onclick="removeNote(${index})">
                <i class="uil uil-trash"></i>Delete
              </li>
            </ul>
          </div>
        </div>
      </li>
        `)
    })
}

//! remove note
function removeNote(noteIndex) {

    let deleted = confirm('مطمِنی که میخوای یادداشت رو حذف کنی؟')

    if (deleted) {
        let newNotes = getLocalStorageNotes()

        newNotes.splice(noteIndex, 1)
        setNotesInLocalStorage(newNotes)
        generateNotes(newNotes)
    }
}

//! edit note
function editNote(noteID, noteTitle, nodeDesc) {
    isUpdate = true

    showModal(noteTitle, nodeDesc)
    updateID = noteID
}


//! show and hidden box(delete/edit)
function showSetting(el) {
    el.parentElement.classList.add('show')

    document.addEventListener('click', event => {

        if (event.target.tagName !== 'I' || event.target != el) {
            el.parentElement.classList.remove('show')
        }

    })

}

//! get data from localstorage
function getLocalStorageNotes() {
    let localStorageNotes = localStorage.getItem('notes')

    if (localStorageNotes) {
        notes = JSON.parse(localStorageNotes)
    } else {
        notes = []
    }

    return notes
}


//! save data in localstorage
function setNotesInLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}



//! close form modal
function closeModal() {
    popupBox.classList.remove('show')
}

popupClose.addEventListener('click', closeModal)


window.addEventListener('load', () => {
    let notes = getLocalStorageNotes()
    generateNotes(notes)
})

window.addEventListener('keyup', event => {

    if (event.key === 'Escape') {
        closeModal()
    }

})