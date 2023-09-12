let tags = [];

let tagsUlElem = document.querySelector('ul')
let removeAllBtn = document.querySelector('button')
let tagInputElem = document.querySelector('.inputElem')
let tagsCountSpanElem = document.querySelector('span')
let maxTagsCount = 10

//! remove all tags
const removeAllLis = () => {
    tagsUlElem.querySelectorAll('li').forEach(tag => tag.remove())
}


//! calculate count of tags
function countTags() {
    tagInputElem.focus()
    tagsCountSpanElem.innerHTML = maxTagsCount - (tags.length)
}


//! remove tag
const removeTag = (tagElem, tagTitle) => {
    let mainTagIndex = tags.indexOf(tagTitle)
    tags.splice(mainTagIndex, 1)
    tagElem.parentElement.remove()
    countTags()
}


//! create tags
const createTag = () => {
    removeAllLis()
    let tagLi = null;

    [...tags].reverse().forEach(tag => {
        tagLi = `<li>${tag} <i style="margin-right: 0.5rem;" class='uit uit-multiply' onClick='removeTag(this,"${tag}")'></i></li>`
        tagsUlElem.insertAdjacentHTML('afterbegin', tagLi)

    })
    countTags()

}



tagInputElem.addEventListener('keyup', (event) => {
    if (event.keyCode == '13') {
        let tagTitle = event.target.value;

        if (tags.length < 10 && !tags.includes(tagTitle.toLowerCase())) {

            tagTitle.split(',').forEach(tag => {
                tags.push(tag.toLowerCase())
            })
            createTag()
            tagInputElem.value = ''

        } else {
            alert('حداکثر 10 مورد رو میتونید انتخاب کنید')
        }
    }
})





