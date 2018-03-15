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
    function autoHeightAnimate(element, time, callback) {
        var curHeight = element.height(), // Get Default Height
            autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({
            height: autoHeight
        }, time); // Animate to Auto Height
    }

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 767;;
    }

    if (isMobile()) {
        $('body').addClass('mobile');
    } else {
        $('body').removeClass('mobile');
    }

    function displayTab() {
        $('.blockMain[data="tabs-1"]').show();
        $('.menuli:first-child').addClass('active');
    }
    if (!isMobile()) {
        displayTab();
    }

    $(window).resize(function () {
        if (isMobile()) {
            $('body').addClass('mobile');
            $('.blockMain[data="tabs-1"]').hide();
            $('.menuli:first-child').removeClass('active');
        } else {
            $('body').removeClass('mobile');
            displayTab();
        }
    });

    $('.menuli').on('click', function (event) {
        $('.menuli.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        var blockDatatype = $(event.currentTarget).attr('data-tab');
        getTab(blockDatatype);
        if (isMobile()) {
            showTab();
            hideTab();
        }
    });

    function getTab(blockDatatype) {
        $('.blockMain').hide();
        $('.blockMain[data="' + blockDatatype + '"]').show();
    }

    var tabcont = $('.tabWrap');

    function showTab() {
        tabcont.css('height', '');
        autoHeightAnimate(tabcont, 500);
        var tabHeight = tabcont.height();
        setTimeout(function () {
            $(".tabWrap").animate({
                height: tabHeight
            }, 500);
            $('.tabWrap').addClass('showtab');
            $('.tab-menu').fadeOut(500);
        }, 500);
        $('.footer,.closetab').show();
    }


    function hideTab() {
        $('.closetab').on('click', function () {
            $('.tabWrap').stop().animate({
                height: '0'
            }, 500, function () {
                $('.tabWrap').removeClass('showtab');
                $('.footer,.closetab').hide();
                $('.tab-menu').fadeIn(500);
            });

        });
    }
	$(document).on('keyup blur', '.mobnumns', function(e) {
		var mobile = $(this);				
		var mobRegExpr = /^[6-9]{1}[0-9]{9}$/;
		if (mobile.val().length > 9 && mobRegExpr.test(mobile.val())) {
			$('.mobnumns').css('border-bottom','none');
		} else {
			$('.mobnumns').css('border-bottom','1px solid red');
		}
	});
    

});