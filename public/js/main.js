(function ($) {
  "use strict";

  // Pre loader
  $(window).on("load", function () {
    $(".preloader").fadeOut(2000),
    $("body").css({"overflow-y":"inherit"});
    $(".mean-container .mean-bar").css({"display":"inherit"})
  });

  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "992"
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.review-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    nextArrow: "<button class=\"slide-next\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>",
    prevArrow: "<button class=\"slide-prev\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.companies-logo').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.home-slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    prevArrow: "<button class=\"slick-prev slick-arrow\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>",
    nextArrow: "<button class=\"slick-next slick-arrow\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>"
  });

  $('.home-slider-2').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    prevArrow: "<button class=\"slick-prev slick-arrow\"><i class=\"fas fa-long-arrow-alt-left\"></i></button>",
    nextArrow: "<button class=\"slick-next slick-arrow\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>"
  });

  var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

  $('.project-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
  });

  // for project-menu active class
  $('.project-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  })

  $('.card-header a[aria-expanded="false"]').click(function () {
    $(this).parent().parent().toggleClass('card-header-expanded')
  });

  $('.card-header a[aria-expanded="true"]').click(function () {
    $(this).parent().parent().toggleClass('card-header-expanded')
  });

  

})(jQuery);


