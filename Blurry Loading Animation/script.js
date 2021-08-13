const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')

let num = 0

const run = setInterval(load, 30)

function load() {
    num++
    if (num > 99) {
        clearInterval(run)
    }
    text.innerHTML = `${num}%`
    text.style.opacity = `${scale(num,0,100,1,0)}`
    bg.style.filter = `blur(${scale(num,0,100,30,0)}px)`

}


function scale(num, iMin, iMax, outMin, outMax) {
    return ((num - iMin) / (iMax - iMin) * (outMax - outMin)) + outMin
}