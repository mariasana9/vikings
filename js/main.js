$(function(){

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    }
});

$('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-text'
});

$('.heroes__slider-text').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
  fade: true
});

});