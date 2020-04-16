$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    $('.mail-js-write').each(function () {
        $(this).html('support@teknaq.com');
    });
    $('.phone1-js-write').each(function () {
        $(this).html('+001 512-221-5570');
    });
    $('.phone2-js-write').each(function () {
        $(this).html('+001 201-855-6526');
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo/teknaq-white.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo/teknaq-blue.svg");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {
            var $this = $(this);
            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $this.parent().addClass('active');
                $this.parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

    //===== Isotope Project 4

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            var $this = $(this);
            $this.siblings('.active').removeClass('active');
            $this.addClass('active');
            event.preventDefault();
        });
    });


    //===== slick Testimonial Four

    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
    });


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== 
















});