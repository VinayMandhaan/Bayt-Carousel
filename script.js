const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicators button');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentIndex = 0;
let timerId = null;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : 0;
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1;
  showSlide(prevIndex);
}

timerId = setInterval(nextSlide, 5000);

nextBtn.addEventListener('click', function() {
  clearInterval(timerId);
  nextSlide();
  timerId = setInterval(nextSlide, 5000);
});

prevBtn.addEventListener('click', function() {
  clearInterval(timerId);
  prevSlide();
  timerId = setInterval(nextSlide, 5000);
});

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener('click', function() {
    if (i !== currentIndex) {
      clearInterval(timerId);
      showSlide(i);
      timerId = setInterval(nextSlide, 5000);
    }
  });
}
