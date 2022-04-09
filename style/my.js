

/* const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active')
    })
} */

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

function menuToggle() {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  if (menuBody.classList.contains('_active')) {
    menuBody.addEventListener ('click', function(e) {
    if (e.target.tagName == 'A') {
      menuToggle()
    }
  }, { once: true })
  }
}

iconMenu.addEventListener('click', menuToggle)


let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.popup_open');
let closePopupButtons = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
})

closePopupButtons.addEventListener('click', (e) =>{
    popupBg.classList.remove('active');
    popupBg.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popupBg.classList.remove('active');
    }
})


const accordionItemHeader = document.querySelectorAll('.accordion-item-header');

accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', (e) => {
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

const accordionItem = document.querySelectorAll('.accordion-item');
accordionItem.forEach(accordionItem => {
    accordionItem. addEventListener('click', (e) => {
        accordionItem.classList.toggle('active');
    })
})

const popupBgExc = document.querySelector('.popup__bg__exc');
const popupExc = document.querySelector('.popup__exc');
const openPopupExc = document.querySelectorAll('.open-popup-exc');
const closePopupExc = document.querySelector('.close-popup_exc');

openPopupExc.forEach((button) => {
    button.addEventListener('click', (e) =>{
        popupBgExc.classList.add('active');
        popupExc.classList.add('active');
    })
})

closePopupExc.addEventListener('click', (e) =>{
    popupBgExc.classList.remove('active');
    popupExc.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if(e.target === popupBgExc) {
        popupBgExc.classList.remove('active');
        popupExc.classList.remove('active');
    }
})

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');

let sliderNav = function (manual) {

    btns.forEach((btn) => {
        btn.classList.remove('active');
    })

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
}

btns.forEach((btn, i) =>{
    btn.addEventListener('click', (e) =>{
        sliderNav(i);
    })
})

