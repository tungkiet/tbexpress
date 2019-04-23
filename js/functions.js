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

	$(document).ready(function (){
        /*call: top news notice*/
        if ($(".slTopNews").length > 0) {
            slTopNews.init();
        }

        /*call: banner*/
        if ($(".slBanner").length > 0) {
            slBanner.init();
        }


        /*event click select item search*/
        $(document).on('click','.tbe-search .dropdown-menu li a',function () {
            var iSrcbtn = $('.tbe-search .btn img').attr('src');
            var iSrcSec = $(this).find($('.tbe-search .dropdown-menu img')).attr('src');
            $('.tbe-search .btn img').attr('src',iSrcSec);
            $(this).find($('.tbe-search .dropdown-menu img')).attr('src',iSrcbtn);
        });
	
	});
})(window.jQuery);