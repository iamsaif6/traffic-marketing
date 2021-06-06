

     // Ofcanvas Menu


     $('.menu-trigger').click(function () {
          $('.offcanvas-menu,.offcanvas-overlay').addClass('active')
     });

     $('.close-btn,.offcanvas-overlay').click(function () {
          $('.offcanvas-menu,.offcanvas-overlay').removeClass('active')
     });

     // Search Triggger

     $('.search-trigger').click(function () {
          $('.search-wrapper').addClass('active')
          return false;
     });

     $('.search-close').click(function () {
          $('.search-wrapper').removeClass('active')
     });






     // Testimonial Activation

     $('.single-testimonial-item').hover(function () {
          $('.single-testimonial-item').removeClass('active');
          $(this).addClass('active');
     });

     // OWL Carousel

     $(".carosuel-wrapper").owlCarousel({
          items: 3,
          loop: true,
          nav: false,
          dots: false,
          margin: 20,
          responsive: {
               // breakpoint from 0 up
               0: {
                    items: 1
               },
               // breakpoint from 480 up
               480: {
                    items: 1
               },
               // breakpoint from 768 up
               768: {
                    items: 2
               },
               // Upto 992px
               992: {
                    items: 3
               }
          }
     });

     $(".carosuel-wrpper").owlCarousel({
          items: 3,
          loop: true,
          nav: false,
          dots: false,
          margin: 0,
          responsive: {
               // breakpoint from 0 up
               0: {
                    items: 1
               },
               // breakpoint from 480 up
               576: {
                    items: 2
               },
               // breakpoint from 768 up
               768: {
                    items: 2
               },
               // Upto 992px
               992: {
                    items: 3
               }
          }
     });




     $(".review-crousel").owlCarousel({
          items: 1,
          loop: true,
          nav: false,
          dots: true
     });



     $('.header-slider-wrapper.owl-carousel').owlCarousel({
          loop: true,
          items: 1,
          dots: false,
          navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
          nav: true
     });


     // Magnific Popip

     $('.slider-play-btn').magnificPopup({
          type: 'iframe'
     });



     // Body Color


     function myfun() {
          var bgValue = document.getElementById('bg-change').value;
          bgValueAll = "#" + bgValue;
          document.getElementById("body").style.background = bgValueAll;

          return false;

     }

