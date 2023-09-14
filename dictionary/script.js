let searchInput = document.querySelector('#inp-word')
let searchBtn = document.querySelector('#search-btn')
let clearBtn = document.querySelector('#clear-btn')
let domContent = document.querySelector('#result')
let audio = document.querySelector('#sound')



let datas = null;


searchBtn.addEventListener('click', async () => {
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`)
        .then(res => res.json())
        .then(data => {
            datas = data[0]

            console.log(datas);
            domContent.innerHTML = `<div class="word">
            <h3>${datas.word}</h3>
            <button>
              <i class="fas fa-${datas.phonetics[0].audio ? 'volume' : ''}-up" onclick='playSun()'></i> 
            </button>
          </div>
          <div class="details">
            <p>${datas.meanings[0].partOfSpeech}</p>
            <p>/${datas.phonetic}/</p>
          </div>
          <p class="word-meaning">
              ${datas.meanings[0].definitions[0].definition}
          </p>
          <p class="word-example">
              ${datas.meanings[0].definitions[0].example || 'there is not example'}
          </p>`

            audio.setAttribute('src', `${datas.phonetics[0].audio}`)

        })
        .catch(err=>{
            domContent.innerHTML=`<h3>couldn't find this word</h3>`
        })
})


function playSun() {
    audio.play()
}

clearBtn.addEventListener('click', () => {
    searchInput.value = ''
})