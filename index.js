const carouselSlide = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img')

const leftArrow = document.querySelector('.left-area .arrowwrapper')
const rightArrow = document.querySelector('.right-area .arrowwrapper')

const dots = document.querySelectorAll('.dot')

let i = 1;
const size = carouselImages[0].offsetWidth

rightArrow.addEventListener('click', function () {
  i++;
  
  carouselSlide.style.transform = 'translateX('+ (-size*i) + 'px';
  
  if (i === carouselImages.length) {
    i=0
    carouselSlide.style.transform = 'translateX('+ (-size*i) + 'px';;
  }
  

});

leftArrow.addEventListener('click', function () {

  i--;

  carouselSlide.style.transform = 'translateX('+ (-size*i) + 'px';
  
  if(i === -1) {
    i = carouselImages.length -1
    carouselSlide.style.transform = 'translateX('+ (-size*i) + 'px';;
  }


});

dots.forEach(function (dot, index) {

  dot.addEventListener('click', function () {
    carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px';;
  });

});




