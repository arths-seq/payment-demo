function floatLabels() {
    $(".form-control").on('focusout', function () {
        
        $(this).parents('.formDom').removeClass("focused");
           if ($(this).val() != "") {
               $(this).parents('.formDom').addClass("has-content");             
        } else {
            $(this).parents('.formDom').removeClass("has-content");            
        }
    });
    $('.form-control').on('focus', function () {
        placeholder = $(this).attr('placeholder');
        $(this).parents('.formDom').addClass("focused");
    });
    };    

    /* Function to animate height: auto */
    
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

    // $('.menuli').on('click', function (event) {
    //     $('.menuli.active').removeClass('active');
    //     $(event.currentTarget).addClass('active');
    //     var blockDatatype = $(event.currentTarget).attr('data-tab');
    //     getTab(blockDatatype);
    //     if (isMobile()) {
    //         showTab();
    //         hideTab();
    //     }
    // });
    
    

    	
    
