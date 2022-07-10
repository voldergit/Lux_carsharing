$(function () {
  $(".top_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
  });
  $(".reviews_slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});
