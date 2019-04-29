(function($){
    /*var: top news notice*/
    var slTopNews = {
        init: function () {
            slTopNews.events();
        },
        events: function () {
            $('.slTopNews').owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                autoplay: true
            })
        }
    };

    /*var: banner*/
    var slBanner = {
        init: function () {
            slBanner.events();
        },
        events: function () {
            $('.slBanner').owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                autoplay: true,
                margin: 3,
                autoplaySpeed: 2000
            })
        }
    };

    /*var: video*/
    var slVideo = {
        init: function () {
            slVideo.events();
        },
        events: function () {
            $('.slVideo').owlCarousel({
                items: 3,
                dots: false,
                loop: false,
                margin: 15,
                nav: true,
                navText: '',
                autoplay: true,
                autoplaySpeed: 2000,
                responsive:{
                    0:{
                        items:1
                    },
                    580:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1200:{
                        items:3
                    }
                }
            })
        }
    };

    /*var: review*/
    var slReview = {
        init: function () {
            slReview.events();
        },
        events: function () {
            $('.slReview').owlCarousel({
                items: 3,
                dots: true,
                loop: false,
                margin: 45,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    580:{
                        items:2
                    },
                    992:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            })
        }
    };

    /*var: patrner*/
    var slPartner = {
        init: function () {
            slPartner.events();
        },
        events: function () {
            $('.slPartner').owlCarousel({
                items: 6,
                dots: false,
                loop: false,
                margin: 50,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive:{
                    0:{
                        items:3
                    },
                    580:{
                        items:4
                    },
                    992:{
                        items:5
                    },
                    1200:{
                        items:6
                    }
                }
            })
        }
    };

    /*var: sticky scroll*/
    var stkScroll = {
        init: function () {
            stkScroll.events();
        },
        events: function () {
            let btheight = $('.tbe-s10').height() + $('.tbe-s11').height() + $('.tbe-footer').height() + 190;
            $("#stkScroll").sticky({
                responsiveWidth: true,
                zIndex: 99,
                topSpacing:0,
                bottomSpacing: btheight
            })
        },
        unstick: function () {
            $("#stkScroll").unstick();
        }
    };

	$(document).ready(function (){
        /*call: sticky scroll*/
        if ($("#stkScroll").length > 0) {
            if (window.innerWidth<768){
                stkScroll.unstick();
            }else {
                stkScroll.init();
            }
        }

        /*call: top news notice*/
        if ($(".slTopNews").length > 0) {
            slTopNews.init();
        }

        /*call: banner*/
        if ($(".slBanner").length > 0) {
            slBanner.init();
        }

        /*call: video*/
        if ($(".slVideo").length > 0) {
            slVideo.init();
        }
        /*call: review*/
        if ($(".slReview").length > 0) {
            slReview.init();
        }

        /*call: partner*/
        if ($(".slPartner").length > 0) {
            slPartner.init();
        }

        /*var & call: wow animation*/
        var wow = new WOW({
            animateClass: 'animated',
            offset: 5
        });
        wow.init();

        /*event click show submenu mobile*/
        $(document).on('click','.tbe-mnics',function () {
            $(this).parent().toggleClass('tbsshow');
        });

        /*event click show menu mobile*/
        $(document).on('click','.tbe-hdicmn',function () {
            $('.tbe-hdbot').toggleClass('mnShow');
        });

        /*event click select item search*/
        $(document).on('click','.tbe-search .dropdown-menu li a',function () {
            var iSrcbtn = $('.tbe-search .btn img').attr('src');
            var iSrcSec = $(this).find($('.tbe-search .dropdown-menu img')).attr('src');
            $('.tbe-search .btn img').attr('src',iSrcSec);
            $(this).find($('.tbe-search .dropdown-menu img')).attr('src',iSrcbtn);
        });

        /*event click to scroll*/
        $(document).on('click','.toscroll',function(e){
            e.preventDefault();
            var link = $(this).attr('href');
            if($(link).length > 0){
                var posi = $(link).offset().top - 40;
                $('body,html').animate({scrollTop:posi},1000);
            }
        });

	});
})(window.jQuery);