$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    dots:false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        nav: false
      },
      767: {
        items: 8,
        nav: false
      },
      1000: {
        items: 12,
        nav: false,
        loop: false
      }
    }
  })

});