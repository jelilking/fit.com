// for header
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

//for window scroll
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// for hom section

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCusor: true,
  loop: true,
  centeresdSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});

// // for fintness classess

var swiper = new Swiper(".feature-slider", {
  spaceBetween: 20,
  grabCusor: true,
  loop: true,
  centeresdSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// for trainers

var swiper = new Swiper(".trainer-slide", {
  spaceBetween: 20,
  grabCusor: true,
  loop: true,
  centeresdSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//for blogs

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 30,
  grabCusor: true,
  loop: true,
  centeresdSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
