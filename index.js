const carouselSlides = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')
const leftArrow = document.querySelector('.left-area .arrowwrapper')
const rightArrow = document.querySelector('.right-area .arrowwrapper')

const dots = document.querySelectorAll('.dot')


let i = 0;
const size = carouselImages[0].offsetWidth;



rightArrow.addEventListener('click', function () {
  i++;
  carouselSlides.style.transform = 'translateX('+ (-size*i) + 'px';
  if (i === carouselImages.length) {
    i=0
    carouselSlides.style.transform = 'translateX('+ (-size*i) + 'px';;
  }
  console.log(i)

});



leftArrow.addEventListener('click', function () {
  i--;
  carouselSlides.style.transform = 'translateX('+ (-size*i) + 'px';
  if(i === -1) {
    i = carouselImages.length-1
    carouselSlides.style.transform = 'translateX('+ (-size*i) + 'px';;
  }

  console.log(i)

});



dots.forEach(function(dot, index) {

  dot.addEventListener('click', function () {
    carouselSlides.style.transform = 'translateX(' + (-size * index) + 'px';;
    i=index;
  });
 
});


