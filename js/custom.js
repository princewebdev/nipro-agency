$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: ["NEXT", "PREV"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// swepper here
var swiper = new Swiper(".mySwiper", {
    
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// mixitup js
$(document).ready(function(){
    var mixer = mixitup('.mix-container');
  });

