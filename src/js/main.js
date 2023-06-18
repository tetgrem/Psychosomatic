'use strict'

function  targetBlock() {
    const targetItem = document.querySelectorAll('.targets__item')

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            targetItem[0].classList.add('active')
        }
    })

    targetItem.forEach((item) => {

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
}
targetBlock()


function packageBlock() {
    const packageItem = document.querySelectorAll('.package__item')

    packageItem.forEach((item) => {
        if (window.innerWidth > 992) {
            item.classList.add('active')
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                item.classList.add('active')
            }
            if (window.innerWidth <= 992) {
                item.classList.remove('active')
            }
        })

        item.addEventListener('click', () => {
            if (item.classList.contains('active') && window.innerWidth <= 992) {
                item.classList.remove('active')
            } else if (window.innerWidth <= 992) {
                document
                    .querySelectorAll('.package__item')
                    .forEach(item => item.classList.remove('active'))
                item.classList.add('active')
            }
        })
    })
}
packageBlock()


function packageHideBlock() {
    const packageBtn = document.querySelector('.package__btn')
    const packageHide = document.querySelector('.package__hide-block')

    packageBtn.addEventListener('click', () => {
        if (packageHide.classList.contains('active')) {
            packageHide.classList.remove('active')
            packageBtn.classList.remove('active')
        } else {
            packageHide.classList.add('active')
            packageBtn.classList.add('active')
        }
    })
}
packageHideBlock()


function burgerMenu() {
    const menuItem = document.querySelectorAll('.menu__item')
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

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        })
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

Fancybox.bind("[data-fancybox]", {

});

const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',
    },
    loop: true,


      breakpoints: {

        200: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        768: {
          slidesPerGroup: 2,
          slidesPerView: 2,
      },
    }
});


const maskElement = document.querySelector('.phone__input')
const maskOptions = {
    mask: '+{38}(000)000-00-00',
}
const mask = IMask(maskElement, maskOptions)


// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion()

// Модальное окно
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            body.classList.remove('locked')
        }
    })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
