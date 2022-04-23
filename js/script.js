$(function () {
  "use strict";


  // banner slider js
  $('#banner_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fas fa-chevron-left prv_arrr"></i>',
    nextArrow: '<i class="fas fa-chevron-right nxt_arrr"></i>',
    dots: true,
  });


});