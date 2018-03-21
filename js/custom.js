$(document).ready(function () {
    $(".form-control").on('focusout', function () {
        $(this).parents('.formDom').removeClass("focused");
        if ($(this).val() != "") {
            $(this).parents('.formDom').addClass("has-content");
        } else {
            $(this).parents('.formDom').removeClass("has-content");
        }
    });

    $('.form-control').on('focus', function () {
        $(this).parents('.formDom').addClass("focused");
    });

    /* Function to animate height: auto */
    
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 767;;
    }

    if (isMobile()) {
        $('body').addClass('mobile');
    } else {
        $('body').removeClass('mobile');
    }

    $(window).resize(function () {
        if (isMobile()) {
            $('body').addClass('mobile');
            $('.blockMain[data="tabs-1"]').hide();
            $('.menuli:first-child').removeClass('active');
        } else {
            $('body').removeClass('mobile');
        }
    });
});