const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img')

const leftArrow = document.querySelector('.left-area .arrowwrapper')
const rightArrow = document.querySelector('.right-area .arrowwrapper')

let i = 1;
const size = carouselImages[0].clientWidth;


rightArrow.addEventListener('click', function () {
  i++;
  carouselSlider.style.transform = 'translateX('+ (-600*i) + 'px';
});

leftArrow.addEventListener('click', function () {
  i--;
  carouselSlider.style.transform = 'translateX('+ (-600*i) + 'px';
});
