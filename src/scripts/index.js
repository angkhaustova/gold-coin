import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 32,
    item: 0,
    autoWidth: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    center: true
  });
});
