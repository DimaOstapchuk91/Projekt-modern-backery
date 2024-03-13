const swiper = new Swiper('.swiper-container', {
  loop: true,
  sliderPerViev: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 480px
    798: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
