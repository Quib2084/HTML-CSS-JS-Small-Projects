const progress = document.querySelector('.progress')
const circles = document.querySelectorAll('.circle')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let activeCircle = 1

next.addEventListener('click', () => {
    activeCircle++;
    if (activeCircle > circles.length) {
        activeCircle = circles.length
    }
    update()
})


prev.addEventListener('click', () => {
    activeCircle--;
    if (activeCircle < 1) {
        activeCircle = 1
    }
    update()
})



function update() {
    circles.forEach((circle, idx) => {
        if (idx < activeCircle) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    progress.style.width = (activeCircle - 1) / (circles.length - 1) * 100 + '%'

    if (activeCircle === circles.length) {
        next.disabled = true
    } else if (activeCircle === 1) {
        prev.disabled = true;
    } else {
        next.disabled = false
        prev.disabled = false
    }
}