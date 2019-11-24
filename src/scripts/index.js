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

  $("[data-open-modal]").click(e => {
    $(".b-modal-container--open").removeClass("b-modal-container--open");
    $(`[data-modal="${$(e.currentTarget).data("open-modal")}"]`).addClass(
      "b-modal-container--open"
    );
  });

  $(".b-modal__close").click(e => {
    $(e.currentTarget)
      .parents(".b-modal-container")
      .removeClass("b-modal-container--open");
  });

  let startTarget;

  $(".b-modal-container").on("mousedown", event => {
    startTarget = event.target;
  });

  $(".b-modal-container").on("mouseup", event => {
    if (
      $(event.target).hasClass("b-modal-container") &&
      $(startTarget).hasClass("b-modal-container")
    ) {
      $(".b-modal-container").removeClass("b-modal-container--open");
    }
  });
});
