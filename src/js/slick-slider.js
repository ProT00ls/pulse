//Подключаем слайдер https://kenwheeler.github.io/slick/
$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 300,
    slidesToShow: 1,
    //adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right-arrow.svg"></button>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  });
});
