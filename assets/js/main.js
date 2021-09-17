let toggle = document.querySelector('#nav-toggle');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let navList = document.querySelector('.nav__menu');
let logo = document.querySelector('.nav__logo');
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
))