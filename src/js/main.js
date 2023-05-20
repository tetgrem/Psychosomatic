'use strict'

const targetBlock = document.querySelectorAll('.targets__item')

targetBlock.forEach((item) => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768 && item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            document
                .querySelectorAll('.targets__item')
                .forEach(item => item.classList.remove('active'))
            item.classList.add('active')
        }
    })
})

function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

console.log(window.innerWidth)


