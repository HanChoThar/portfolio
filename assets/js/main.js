let toggle = document.querySelector('#nav-toggle');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let navList = document.querySelector('.nav__menu');
let logo = document.querySelector('.nav__logo');

window.addEventListener('scroll',(e)=>{
  const nav = document.querySelector('.nav');
  if(window.pageYOffset>0){
    nav.classList.add("add-shadow");
  }else{
    nav.classList.remove("add-shadow");
  }
});


toggle.addEventListener('click', function(){
  if(close.classList.contains('change')){
    open.classList.add('change');
    close.classList.remove('change');
    navList.style.cssText = 'bottom: 0%; opacity: 1';
    logo.style.visibility = 'hidden';
  } else if(open.classList.contains('change')){
    
      close.classList.add('change');
      open.classList.remove('change');
      navList.style.cssText = 'bottom: -100%; opacity: 0';
      logo.style.visibility = 'unset';
  }
});

let nav__link = document.querySelectorAll('.nav__link');
nav__link.forEach( e => e.addEventListener('click', function(){
  close.classList.add('change');
      open.classList.remove('change');
      navList.style.cssText = 'bottom: -100%; opacity: 0';
      logo.style.visibility = 'unset';
}
));


// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// modal
const modalViews = document.querySelectorAll('.services_modal');
const btns = document.querySelectorAll('.services_button');
const closy = document.querySelectorAll('.services_modal-close');

let modal = (modalClick) => {
  modalViews[modalClick].classList.add('active-modal');
}

btns.forEach( (btn, i) => {
  btn.addEventListener('click', () => {
    modal(i);
  })
});

closy.forEach( (modalClose) => {
  modalClose.addEventListener('click', ()=>{
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    })
  })
})

// form