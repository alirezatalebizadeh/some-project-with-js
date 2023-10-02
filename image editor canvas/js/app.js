let brightnessInput = document.querySelector('#brightness')
let saturationInput = document.querySelector('#saturatiob')
let blurInput = document.querySelector('#blur')
let inversionInput = document.querySelector('#inversion')
let imageFileInput = document.querySelector('#imageFileInput')
let canvas = document.querySelector('#canvas')


let ctx = canvas.getContext('2d')

let setting = {}
let image = null



//! reset setting of image
function resetSetting() {
    setting.brightness = '100'
    setting.saturation = '100'
    setting.blur = '0'
    setting.inversion = '0'

    brightnessInput.value = setting.brightness
    saturationInput.value = setting.saturation
    blurInput.value = setting.blur
    inversionInput.value = setting.inversion
}


function updateSetting(key, value) {

    if (image) {
        setting[key] = value
        renderImage()
    }
}



function genereteFilter() {
    const { brightness, blur, saturation, inversion } = setting

    return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%)`
}



//! draw image in canvas
function renderImage() {
    canvas.width = image.width
    canvas.height = image.height
    console.log(
        genereteFilter()
    );
    ctx.filter = genereteFilter()
    ctx.drawImage(image, 0, 0)

}


brightnessInput.addEventListener('input', () => {
    updateSetting('brightness', brightnessInput.value)
})
saturationInput.addEventListener('input', () => {
    updateSetting('saturation', saturationInput.value)
})
blurInput.addEventListener('input', () => {
    updateSetting('blur', blurInput.value)
})
inversionInput.addEventListener('input', () => {
    updateSetting('inversion', inversionInput.value)
})


imageFileInput.addEventListener('change', () => {
    image = new Image()

    image.addEventListener('load', () => {
        resetSetting()
        renderImage()
    })

    image.src = URL.createObjectURL(imageFileInput.files[0])
    // console.log(URL.createObjectURL(imageFileInput.files[0]));
})


window.addEventListener('load', resetSetting)