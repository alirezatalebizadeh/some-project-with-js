// let myCanvas = document.querySelector('#canvas')
// let ctx = myCanvas.getContext('2d')


// !طراحی اشکال مختلف
// ctx.strokeStyle = 'red'
// ctx.lineWidth = 15;
// ctx.lineJoin = 'bevel' //شش ضلعی
// ctx.lineJoin = 'round'//گرد میشه 4 ضلعشون
// ctx.shadowColor = 'red'
// ctx.shadowBlur = 5;
// ctx.strokeRect(40, 40, 90, 90)



//!create home
// ctx.moveTo(75, 75)
// ctx.lineTo(270, 75)//مبدا لاین بعدی 
// ctx.lineTo(270, 270)//مبدا لاین بعدی 
// ctx.lineTo(75, 270)//مبدا لاین بعدی 
// ctx.lineTo(75, 75)//مبدا لاین بعدی 

// ctx.moveTo(75, 75)
// ctx.lineTo(170, 0)
// ctx.lineTo(270, 75)

// ctx.moveTo(150, 270)
// ctx.lineTo(150, 150)
// ctx.lineTo(200, 150)
// ctx.lineTo(200, 270)
// ctx.strokeStyle = 'red'
// ctx.stroke()
// ctx.lineCap = 'round'
// ctx.lineWidth = 10;
// ctx.strokeStyle = 'red'






// ctx.beginPath()//! ساخته نقطه 
// ctx.lineTo(200, 100)
// ctx.stroke()

// ctx.beginPath()
// ctx.lineTo(100, 100)
// ctx.stroke()

// ctx.beginPath()
// ctx.lineTo(100, 200)
// ctx.stroke()

// ctx.beginPath()
// ctx.lineTo(200, 200)
// ctx.stroke()


// ctx.lineCap = 'round'
// ctx.lineWidth = 10;
// ctx.strokeStyle = 'red'

// ctx.moveTo(30, 30)
// ctx.lineTo(200, 100)
// ctx.lineTo(250, 30)
// ctx.closePath()//! متصل کننده ی خط
// ctx.stroke()



// console.log(ctx);


window.addEventListener('load', () => {
    let twoXWidth = document.querySelector('.plusWidth')
    let manfi2xWidth = document.querySelector('.minuesWidth')



    let myCanvas = document.querySelector('#canvas')
    let ctx = myCanvas.getContext('2d')

    myCanvas.width = window.innerWidth
    myCanvas.height = window.innerHeight

    let isPending = false;

    let width = 10

    // ctx.strokeStyle = 'red'
    // ctx.lineCap = 'round'
    // ctx.lineWidth = 20
    // ctx.lineTo(100, 200)
    // ctx.stroke()



    const startPaint = (e) => {
        isPending = true
        draw(e)
    }



    const stopPaint = () => {
        isPending = false
        ctx.beginPath()
    }


    const draw = (e) => {
        if (!isPending) {
            return
        }

        ctx.lineCap = "round"
        ctx.lineWidth = width
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }




    window.addEventListener('mousedown', startPaint)
    window.addEventListener('mouseup', stopPaint)
    window.addEventListener('mousemove', draw)

    twoXWidth.addEventListener('click', () => {
        width += 5
    })
    manfi2xWidth.addEventListener('click', () => {
        width -= 5
    })


    window.addEventListener('resize', () => {
        myCanvas.width = window.innerWidth//عرض ویندوز
        myCanvas.height = window.innerHeight
    })


})





