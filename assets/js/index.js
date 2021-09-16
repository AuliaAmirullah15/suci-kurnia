/* SEARCH BAR */
$(document).ready(function () {
  $(".btn-search").on("click", function () {
    $("#search").toggleClass("d-none d-block");
  });

  $("#carouselExampleIndicators").mouseenter(function () {
    $("#carousel-control").removeClass("d-none");
    $("#carousel-control").addClass("d-block");
  });

  $("#carouselExampleIndicators").mouseleave(function () {
    $("#carousel-control").removeClass("d-block");
    $("#carousel-control").addClass("d-none");
  });

  $("#child-menu").mouseenter(function () {
    $("#navbar3").removeClass("d-none");
    $("#navbar3").addClass("d-block");
  });

  $("#child-menu").mouseleave(function () {
    $("#navbar3").removeClass("d-block");
    $("#navbar3").addClass("d-none");
  });

  $("#navbar3").mouseenter(function () {
    $("#navbar3").removeClass("d-none");
    $("#navbar3").addClass("d-block");
  });

  $("#navbar3").mouseleave(function () {
    $("#navbar3").removeClass("d-block");
    $("#navbar3").addClass("d-none");
  });

  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop() / 4;
    $("div.brochure").css({
      "background-position-x": -scroll_position + "px",
    });
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
      document.getElementById("header").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".header").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("header").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
