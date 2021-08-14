const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', update)

update();

function update() {
    const limit = window.innerHeight * 3 / 5
    boxes.forEach((box) => {
        if (box.getBoundingClientRect().top < limit) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
