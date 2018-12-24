
(function($) {
  "use strict";
    jQuery(document).ready(function () {
        var window_width = $(window).width();
// submenu parent add class
        $('.dropdown-menu').each(function(){
            $(this).closest('li').addClass('dropdown');
        });
        $('.mega-menu').each(function(){
            $(this).closest('li').addClass('static');
        });
    if(window_width < 992){
            $('.dropdown a').on('click', function(){
                $(this).siblings('ul').slideToggle();
                $(this).toggleClass('active');
                $(this).closest('li').toggleClass('mb-none');
            });
        }
        if(window_width > 991){
            $('.dropdown').on('mouseenter', function(){
                $(this).addClass('open');
            });
            $('.dropdown').on('mouseleave', function(){
                $(this).removeClass('open');
            });
        }
//Header-Bottom searchForm
        $('.cartSearch li.search a').on( "click", function(){
            $('.searchForm').toggleClass('active');
        });
        $('.searchForm i').on( "click", function(){
            $('.searchForm').toggleClass('active');
        });

//This code is for owl Carousel
    if ($.fn.owlCarousel) {
            //Hero_Slider_crsl
            $('.hero_slider').owlCarousel({
                nav: true,
                dots: false,
                autoplay: false,
                loop: true,
                items: 1,
                animation: true,
                smartSpeed: 1000,
                navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            });
            //tihs code is for slider effect
            $(".hero_slider").on('translate.owl.carousel', function() {
                $('.bh_hero_text h1').removeClass('slideInLeft animated').hide();
                $('.bh_hero_text p').removeClass('slideInLeft animated').hide();
                $('.bh_hero_text .bh_slider_btn').removeClass('slideLeInft animated').hide();
            });
            $(".hero_slider").on('translated.owl.carousel', function() {
                $('.owl-item.active .bh_hero_text h1').addClass('slideInLeft animated').show();
                $('.owl-item.active .bh_hero_text p').addClass('slideInLeft animated').show();
                $('.owl-item.active .bh_hero_text .bh_slider_btn').addClass('slideInLeft animated').show();
            });
        //client_crsl
        $('.bh_client_crsl').owlCarousel({
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                300: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1170: {
                    items: 3,
                },
            }
        });
        //Brand crsl
        $('.brand_crsl').owlCarousel({
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                300: {
                    items:2,
                },
                480: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 5,
                },
                1170: {
                    items: 6,
                },
            }
        });
    }


    //this code is for venobox
    if ($.fn.magnificPopup) {
        $('.test-popup-link').magnificPopup({type:'image'});
    }
    });

   //tab
   	$('ul.tabs li').on( "click", function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
    // Preloder
    $('#preloader').fadeOut(); // will first fade out the loading animation
    $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $("body").removeClass("preloader_active");
})(jQuery);
