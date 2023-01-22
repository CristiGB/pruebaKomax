/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

      
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){    
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navClose.classList.add('show-navClose')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navClose.classList.remove('show-navClose')
    })
}



/**-----------NEW SWIPER-------------- */

let swiperHome = new Swiper(".swiper-home",{
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    scrollbar: {
        el: '.scrollbar-home',
        draggable: true
    },
  
})


let swiperBanners = new Swiper(".swiper-banners",{
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    scrollbar: {
        el: '.scrollbar-banners'
    },
    pagination:{
        el: '.swiper-pagination',
        type: "fraction",
    } ,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        // when window width is >= 835px
        835: {
          slidesPerView: 3,
          spaceBetween: 10,
          loop: false,
          centeredSlides: false,
          width: "auto"
        }
      }
  
})


let newSwiper = new Swiper(".swiper-products",{
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
})
