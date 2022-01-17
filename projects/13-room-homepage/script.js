/* ---- Slider Functionality ---- */
const prevBtn = document.querySelector('.slider .prev-btn'),
      nextBtn = document.querySelector('.slider .next-btn'),
      imgSlides = document.querySelectorAll('.container-1 .img-box'),
      textSlides = document.querySelectorAll('.container-1 .text-box');

var currSlide = 0,
    prevSlide = 2,
    nextSlide = 1;

prevBtn.onclick = function() {
    removeActives(imgSlides);
    addActive(imgSlides[prevSlide]);
    removeActives(textSlides);
    addActive(textSlides[prevSlide]);

    currSlide = prevSlide;
    updatePrev(currSlide);
    updateNext(currSlide);
}

nextBtn.onclick = function() {
    removeActives(imgSlides);
    addActive(imgSlides[nextSlide]);
    removeActives(textSlides);
    addActive(textSlides[nextSlide]);

    currSlide = nextSlide;
    updatePrev(currSlide);
    updateNext(currSlide);
}

/* Slide Update Functions */
function updatePrev(currSlide) {
    if (currSlide === 0) {
        prevSlide = 2;
    } else {
        prevSlide = currSlide - 1;
    }
}
function updateNext(currSlide) {
    if (currSlide === 2) {
        nextSlide = 0;
    } else {
        nextSlide = currSlide + 1;
    }
}

/* Active Class Functions */
function addActive(element) {
    element.classList.add('active');
}
function removeActive(element) {
    element.classList.remove('active');
}
function removeActives(elements) {
    elements.forEach((element) => {
        element.classList.remove('active');
    })
}

/* ---- Mobile Menu Functionality ---- */
const main = document.querySelector('main'), 
      header = document.querySelector('header'),
      menuBtn = document.querySelector('header .mobile-menu'),
      menuCloseBtn = document.querySelector('header .mobile-menu-close');

menuBtn.onclick = () => {
    addActive(header);
    addActive(main);
}
menuCloseBtn.onclick = () => {
    removeActive(header);
    removeActive(main);
}
