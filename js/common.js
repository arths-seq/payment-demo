function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 767;;
}

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
        $(this).parents('.formDom').addClass("focused");
    });
};  

$(window).resize(function () {
    if (isMobile()) {
        $('body').addClass('mobile');
        $('.blockMain[data="tabs-1"]').hide();
        $('.menuli:first-child').removeClass('active');
    } else {
        $('body').removeClass('mobile');
    }
});

// mobile number validation
function mobileNum() {
    $(document).on('keyup blur', '.mobnumns', function(e) {
        var mobile = $(this);				
        var mobRegExpr = /^[6-9]{1}[0-9]{9}$/;
        if (mobile.val().length > 9 && mobRegExpr.test(mobile.val())) {
            $(this).parents('.formDom').removeClass('errorvalue');
        } else {
            $(this).parents('.formDom').addClass('errorvalue');
        }
    });
}

// global Regex
// allow number
var globalRegex1 = /[ÃƒÂ·!"#$%&'()*+,-.\/;\:<=>?@[\]^_`ÃƒÂ¥{|}~Ã¢â€šÂ¬Ã¢â‚¬Å¡Ã¢â‚¬Å¾Ã¢â‚¬Â¦Ã¢â‚¬Â Ã¢â‚¬Â¡Ã‹â€ Ã¢â‚¬Â°Ã…Â Ã¢â‚¬Â¹Ã…â€™Ã…Â½Ã¢â‚¬ËœÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬Â¢Ã¢â‚¬â€œÃ‹Å“Ã¢â€žÂ¢Ã…Â¡Ã¢â‚¬ÂºÃ…â€œÃ…Â¾Ã…Â¸Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚Â«Ã‚Â¬-Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿Ãƒâ€”ÃƒËœÃƒÂ·????0-9\\\/]/gi;
// allow alphabets 
var globalRegex2 = /[ÃƒÂ·!"#$%&'()*+,-.\/;\:<=>?@[\]^_`ÃƒÂ¥{|}~Ã¢â€šÂ¬Ã¢â‚¬Å¡Ã¢â‚¬Å¾Ã¢â‚¬Â¦Ã¢â‚¬Â Ã¢â‚¬Â¡Ã‹â€ Ã¢â‚¬Â°Ã…Â Ã¢â‚¬Â¹Ã…â€™Ã…Â½Ã¢â‚¬ËœÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬Â¢Ã¢â‚¬â€œÃ‹Å“Ã¢â€žÂ¢Ã…Â¡Ã¢â‚¬ÂºÃ…â€œÃ…Â¾Ã…Â¸Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚Â«Ã‚Â¬-Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿Ãƒâ€”ÃƒËœÃƒÂ·????a-zA-Z\\\/]/gi;

// Special Characters
function specialCharactersValidation(){
    $(document).on('keyup blur', '.cvv, .mobnumns, .cash_pincode', function (e) {
        var yourInput = $(this).val(),
            globalRegex = globalRegex2;
            
        if (globalRegex.test(yourInput)) {
            var no_spl_char = yourInput.replace(globalRegex, '');
            $(this).val(no_spl_char);
        }		
    });
}	