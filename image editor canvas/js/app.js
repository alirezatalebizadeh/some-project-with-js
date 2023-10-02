let resetBtn = document.querySelector('.reset-btn')
const downloadButton = document.querySelector(".save-btn");
let brightnessInput = document.querySelector('#brightness')
let saturationInput = document.querySelector('#saturatiob')
let blurInput = document.querySelector('#blur')
let inversionInput = document.querySelector('#inversion')
let imageFileInput = document.querySelector('#imageFileInput')
let canvas = document.querySelector('#canvas')


let ctx = canvas.getContext('2d')

let setting = {}
let image = null
let typeImage = '';


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

    ctx.filter = genereteFilter()
    ctx.drawImage(image, 0, 0)

}


// !تشخیص فرمت فایل
function getMimeType(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = function () {
            const arr = (new Uint8Array(reader.result)).subarray(0, 4);
            let header = "";
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            let mimeType;
            switch (header) {
                case "89504e47":
                    mimeType = "image/png";
                    break;
                case "47494638":
                    mimeType = "image/gif";
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                    mimeType = "image/jpeg";
                    break;
                default:
                    mimeType = "unknown";
                    break;
            }
            resolve(mimeType);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
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


//! select file 
imageFileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0]
    try {
        const mimeType = await getMimeType(file);
        // console.log("نوع فایل: " + mimeType);

        if (mimeType === 'unknown') {
            alert(' فرمت jpg , png , gif انتخاب نمایید')
            return
        }
        image = new Image()

        image.addEventListener('load', () => {
            resetSetting()
            renderImage()
        })

        image.src = URL.createObjectURL(imageFileInput.files[0])


    } catch (error) {
        console.log('اتفاقی افتاده است', err);
    }





})


window.addEventListener('load', resetSetting)
resetBtn.addEventListener('click', () => {
    resetSetting()
    renderImage()
})

//!download image
function downloadCanvasImage() {
    const image = canvas.toDataURL("image/jpeg"); // تبدیل canvas به تصویر با فرمت JPEG (می‌توانید فرمت دیگری نیز استفاده کنید)

    const link = document.createElement("a");
    link.href = image;
    link.download = "image.jpg";
    link.target = "_blank";
    link.click();
}

downloadButton.addEventListener("click", downloadCanvasImage);