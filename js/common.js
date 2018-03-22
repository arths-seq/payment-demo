function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 767;;
}

// mobile number validation
function mobileNum() {
    $(document).on('keyup blur', '.mobnumns', function(e) {
        var mobile = $(this);				
        var mobRegExpr = /^[6-9]{1}[0-9]{9}$/;
        if (mobile.val().length > 9 && mobRegExpr.test(mobile.val())) {
            $(this).removeClass('errorvalue');
        } else {
            $(this).addClass('errorvalue');
        }
    });
}
mobileNum();