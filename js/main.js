AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});

jQuery(document).ready(function ($) {
    "use strict";
    $(".loader").delay(1000).fadeOut("slow");
    $("#overlayer").delay(1000).fadeOut("slow");
    var siteMenuClone = function () {
        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });
        setTimeout(function () {
            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);
                $this.prepend('<span class="arrow-collapse collapsed">');
                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });
                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });
                counter++;
            });
        }, 1000);
        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();
        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();
            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })
        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();
            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();

    var siteCarousel = function () {
        if ($('.nonloop-block-13').length > 0) {
            $('.nonloop-block-13').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                nav: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 0,
                        nav: true,
                        items: 2
                    },
                    1000: {
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                        items: 3
                    },
                    1200: {
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                        items: 4
                    }
                }
            });
        }

        $('.slide-one-item-url-hash').owlCarousel({
            callbacks: true,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            center: false,
            items: 1,
            loop: false,
            stagePadding: 0,
            margin: 0,
            // smartSpeed: 1000,
            autoplay: true,
            pauseOnHover: true,
            onChanged: function (event) {
                var current = event.item.index;
                var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
                $('.filters .btn').removeClass('active');
                $('.filters .btn[href="#' + hash + '"]').addClass('active');
                // console.log('IIT!!!event : ', hash)
            }
        });

        $('.slide-one-item').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            pauseOnHover: false,
            nav: true,
            navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
        });

        // $('.slide-one-item-alt').owlCarousel({
        //   center: false,
        //   items: 1,
        //   loop: true,
        // stagePadding: 0,
        // smartSpeed: 700,
        //   margin: 0,
        //   autoplay: true,
        //   pauseOnHover: false,

        // });

        // $('.slide-one-item-alt-text').owlCarousel({
        //   center: false,
        //   items: 1,
        //   loop: true,
        // stagePadding: 0,
        // smartSpeed: 700,
        //   margin: 0,
        //   autoplay: true,
        //   pauseOnHover: false,
        // });

        $('.slide-one-item-alt').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1000,
            autoplay: true,
            pauseOnHover: true,
            onDragged: function (event) {
                console.log('event : ', event.relatedTarget['_drag']['direction'])
                if (event.relatedTarget['_drag']['direction'] == 'left') {
                    $('.slide-one-item-alt-text').trigger('next.owl.carousel');
                } else {
                    $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
                }
            }
        });
        $('.slide-one-item-alt-text').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1000,
            autoplay: true,
            pauseOnHover: true,
            onDragged: function (event) {
                console.log('event : ', event.relatedTarget['_drag']['direction'])
                if (event.relatedTarget['_drag']['direction'] == 'left') {
                    $('.slide-one-item-alt').trigger('next.owl.carousel');
                } else {
                    $('.slide-one-item-alt').trigger('prev.owl.carousel');
                }
            }
        });


        $('.custom-next').click(function (e) {
            e.preventDefault();
            $('.slide-one-item-alt').trigger('next.owl.carousel');
            $('.slide-one-item-alt-text').trigger('next.owl.carousel');
        });
        $('.custom-prev').click(function (e) {
            e.preventDefault();
            $('.slide-one-item-alt').trigger('prev.owl.carousel');
            $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
        });

    };
    siteCarousel();

    var siteStellar = function () {
        $(window).stellar({
            responsive: false,
            parallaxBackgrounds: true,
            parallaxElements: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            scrollProperty: 'scroll'
        });
    };
    // siteStellar();

    var siteCountDown = function () {

        $('#date-countdown').countdown('2020/10/10', function (event) {
            var $this = $(this).html(event.strftime(''
                + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
                + '<span class="countdown-block"><span class="label">%d</span> days </span>'
                + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
                + '<span class="countdown-block"><span class="label">%M</span> min </span>'
                + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
        });

    };
    siteCountDown();

    var siteDatePicker = function () {

        if ($('.datepicker').length > 0) {
            $('.datepicker').datepicker();
        }

    };
    siteDatePicker();

    var siteSticky = function () {
        $(".js-sticky-header").sticky({topSpacing: 0});
    };
    siteSticky();

    // navigation
    var OnePageNavigation = function () {
        var navToggler = $('.site-menu-toggle');
        $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
            e.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                'scrollTop': $(hash).offset().top
            }, 600, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });

        });
    };
    OnePageNavigation();

    var siteScroll = function () {


        $(window).scroll(function () {

            var st = $(this).scrollTop();

            if (st > 100) {
                $('.js-sticky-header').addClass('shrink');
            } else {
                $('.js-sticky-header').removeClass('shrink');
            }

        })

    };
    siteScroll();


    var siteIstotope = function () {
        /* activate jquery isotope */
        var $container = $('#posts').isotope({
            itemSelector: '.item',
            isFitWidth: true
        });

        $(window).resize(function () {
            $container.isotope({
                columnWidth: '.col-sm-3'
            });
        });

        $container.isotope({filter: '*'});

        // filter items on button click
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({filter: filterValue});
            $('#filters button').removeClass('active');
            $(this).addClass('active');
        });
    }

    siteIstotope();


    $('.fancybox').on('click', function () {
        var visibleLinks = $('.fancybox');

        $.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

        return false;
    });

    
});


(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        if(check){
            window.location.href = "mailto:info@escenit.com?subject="+$(name).val()+"["+$(email).val()+"] - "+$(subject).val()+"&body="+$(message).val();
        }

        return false;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);