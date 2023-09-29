//Подключаем слайдер https://kenwheeler.github.io/slick/
$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
  });
});
