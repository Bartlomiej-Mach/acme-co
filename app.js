//Function to choose less number of thumb's images with screen width
const mediaQuery = window.matchMedia('(max-width: 770px)');
let nrOfImages = 7;

if(mediaQuery.matches) {
  nrOfImages = 4;
} 

//first slider function

var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: nrOfImages,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    autoplay: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 10,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
});

//second slider function

var swiper = new Swiper(".mySwiper3", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: nrOfImages,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: true,
});
var swiper2 = new Swiper(".mySwiper4", {
  loop: false,
  spaceBetween: 10,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
});


//navigation mobile function / hamburger menu

const hamburger = document.querySelector('.hamburger-menu');
const logo = document.querySelector('.logo-picture');
const logoName = document.querySelector('.logo-name');
const navList = document.querySelector('.list-wrapper');
const navLink = document.querySelector('.navigation-link');


const openCloseNav = () => {
  hamburger.classList.toggle("hamburger-menu--active");
  logo.classList.toggle("logo-picture--active");
  logoName.classList.toggle("logo-name--active");
  navList.classList.toggle("list-wrapper--acvite");
  
};

hamburger.addEventListener("click", openCloseNav);


//add function close menu on nav-link only when screen is on mobile version
const mediaQueryMobile = window.matchMedia('(max-width: 880px)');
if (mediaQueryMobile.matches){
  navLink.addEventListener("click", openCloseNav);  
}



//navigation scroll animation

gsap.to('.section-navigation', {
  scrollTrigger: {
    trigger: ".section-home",
    scrub: true,
    start: "bottom center",
    end: "bottom bottom"
  },
  background: '#1A262F',
  duration: 0.2,
  ease: "in-out"
});


//navigation get in animtaion 
TweenMax.from(
  '.section-navigation',
  0.5,
  {
    y: -200,
    delay: 1,
  }
);

//home page animation on start website

TweenMax.from(
  '.background-image',
  3,
  {scale: 1.3,}
);

//heading
TweenMax.from(
  '.home-heading',
  1,
  {
    width: '0',
    delay: .8,
  }
);
//subheading
TweenMax.from(
  '.home-subheading',
  .3,
  {
    y: 70,
    opacity: 0,
    delay: 1,
  }
);

//description, button
TweenMax.from(
  '.home-description',
  .5,
  {
    opacity: 0,
    delay: 1,
  }
);

TweenMax.from(
  '.home-button',
  .2,
  {
    y: -60,
    opacity: 0,
    delay: 1.4,
  }
);

//info heading, subheading animations FIRST copy block
gsap.from('.info-heading-animate-1', {
  scrollTrigger: {
    trigger: ".info-heading-animate-1",
    scrub: false,
    start: "top center",
    end: "top center"
  },
  opacity: 0,
  y: -20,
  duration: 0.2,
  ease: "none"
});

gsap.from('.information-description-center', {
  scrollTrigger: {
    trigger: ".info-heading-animate-1",
    scrub: false,
    start: "top center",
    end: "top center"
  },
  opacity: 0,
  
  duration: 0.2,
  delay: .4,
  ease: "none"
});

//info heading, subheading animations SECOND copy block
gsap.from('.information-description-left', {
  scrollTrigger: {
    trigger: ".info-heading-animate-2",
    scrub: false,
    start: "top center",
    end: "top center"
  },
  opacity: 0,
  y: -5,
  stagger: 0.2,
  duration: 0.2,
  ease: "none"
});



//sliders animation on scroll
//first slider
gsap.from('.top-slider', {
  scrollTrigger: {
    trigger: ".info-heading-animate-1",
    scrub: false,
    start: "top center",
    end: "top center"
  },
  opacity: 0,
  x: -20,
  duration: 0.2,
  delay: .7,
  ease: "none"
});

//second slider
gsap.from('.bottom-slider', {
  scrollTrigger: {
    trigger: ".start-slider-animation",
    scrub: false,
    start: "top center",
    end: "top center"
  },
  opacity: 0,
  x: 20,
  duration: 0.2,
  delay: 0.3,
  ease: "none"
});




