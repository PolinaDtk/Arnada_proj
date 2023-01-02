import Swiper from './node_modules/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.scr6__examples', {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

export default swiper


    var swiper2 = new Swiper(".scr12__slider", {
        slidesPerView: 1,
        breakpoints:{
            425: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

const inputs = document.getElementsByClassName('cb')
const exampImg = document.getElementById('examp__img')

for (let input of inputs) {
    input.addEventListener('change', ()=>{
        if (input.checked === true) {
            exampImg.src = input.value
        }
    })
}



