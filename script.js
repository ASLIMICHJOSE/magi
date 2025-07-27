function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

var searchBtn = document.getElementById('searchBtn');
var searchModal = document.getElementById('searchModal');
var closeSearch = document.getElementById('closeSearch');

if (searchBtn && searchModal) {
  searchBtn.onclick = function() {
    searchModal.style.display = 'flex';
    var input = searchModal.querySelector('input');
    if (input) input.focus();
  };
}

if (closeSearch && searchModal) {
  closeSearch.onclick = function() {
    searchModal.style.display = 'none';
  };
}

if (searchModal) {
  searchModal.onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
  };
}
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const images = document.querySelectorAll('.carousel-track img');
const dotsContainer = document.querySelector('.carousel-dots');

let index = 0;
let autoPlayInterval;
let startX = 0;
let currentTranslate = 0;
let isDragging = false;

let itemWidth = images[0].clientWidth + 20;

// Create dots
images.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

function updateCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Swipe Support
track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  stopAutoPlay();
  isDragging = true;
});

track.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const deltaX = e.touches[0].clientX - startX;
  currentTranslate = -index * itemWidth + deltaX;
  track.style.transition = 'none';
  track.style.transform = `translateX(${currentTranslate}px)`;
});

track.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
  track.style.transition = 'transform 0.5s ease-in-out';

  if (deltaX > 50) {
    index = (index - 1 + images.length) % images.length;
  } else if (deltaX < -50) {
    index = (index + 1) % images.length;
  }

  updateCarousel();
  startAutoPlay();
  isDragging = false;
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', () => {
  itemWidth = images[0].clientWidth + 20;
  updateCarousel();
});

// Init
updateCarousel();
startAutoPlay();
