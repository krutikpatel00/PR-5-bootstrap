$(".owl-carousel-1").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      nav: false,
      dots: false,
      stagePadding: 20,
      responsive: {
            0: {
                  items: 1,
            },
            700: {
                  items: 2,
            },
            1000: {
                  items: 3,
            },
            1200: {
                  items: 4,
            },
      },
});

$(document).ready(function () {
$("body").animate({"scrollTop": "0"})
});

$(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
            $("header").addClass("activer-header");
      } else {
            $("header").removeClass("activer-header");
      }
});
$(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
            $(".back-to-top").fadeIn();
      } else {
            $(".back-to-top").fadeOut();
      }
});
$(document).ready(function () {
      $(".accordion-content button").click(function (e) {
          $(this).parent(".accordion-content").find("#close-rotate").toggleClass("colse-rotate");
          $(this).parent(".accordion-content").prevAll(".accordion-content").find("#close-rotate").removeClass("colse-rotate");
          $(this).parent(".accordion-content").nextAll(".accordion-content").find("#close-rotate").removeClass("colse-rotate");
      });
  });