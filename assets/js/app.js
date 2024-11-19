import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
