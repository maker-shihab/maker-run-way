document.querySelectorAll('.main_menu .nav-link').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.main_menu .nav-link').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: false,  // Hide dots
  autoplay: {
    delay: 2000,  // Auto-slide every 2 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },  // Show 1 slide on small screens
    576: { slidesPerView: 2 },  // Show 2 slides on tablets
    768: { slidesPerView: 3 },  // Show 3 slides on larger devices
    1024: { slidesPerView: 4 }, // Show 4 slides on desktops
  }
});

