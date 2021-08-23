const carouselSlide = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img')

const leftArrow = document.querySelector('.left-area .arrowwrapper')
const rightArrow = document.querySelector('.right-area .arrowwrapper')

const dots = document.querySelectorAll('.dot')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const dot4 = document.querySelector('.dot4')
const dot5 = document.querySelector('.dot5')

let i = 1;

rightArrow.addEventListener('click', function () {
  i++;
  carouselSlide.style.transform = 'translateX('+ (-600*i) + 'px';
  if (i === carouselImages.length) {
    i=0
    carouselSlide.style.transform = 'translateX('+ (-600*i) + 'px';;
  }
});

leftArrow.addEventListener('click', function () {
  i--;
  carouselSlide.style.transform = 'translateX('+ (-600*i) + 'px';
  if(i === -1) {
    i = carouselImages.length -1
    carouselSlide.style.transform = 'translateX('+ (-600*i) + 'px';;
  }
});

dots.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    carouselSlide.style.transform = 'translateX(' + (-600 * index) + 'px';;
  });
});




dots.forEach(function (dot,index) {
  carouselImages.forEach(function(image,order) {
    if (index === order) {
      dot.style.color = 'rgba(0,0,0,.75)'
    } else {
      dot.style.color = 'rgba(0,0,0,.3)'
    }
  });

});