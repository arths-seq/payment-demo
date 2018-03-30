var isMobileValidated = false;
isEmailValidated = false;
isPwdValidated = false;
isConPwdValidated = false;
isNameValidated = false;

isCardValidated = false;
isCvvValidated = false;
isExpDateValidated =false;

isPanValidated = false;
isAadharValidated = false;

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
    $(document).on('keyup blur change', '.mobnumns', function(e) {
        var mobile = $(this);				
        var mobRegExpr = /^[6-9]{1}[0-9]{9}$/;
        if (mobile.val().length > 9 && mobRegExpr.test(mobile.val())) {
			$(this).parents('.formDom').removeClass('errorvalue');
			isMobileValidated = true;
        } else {
			$(this).parents('.formDom').addClass('errorvalue');
			isMobileValidated = false;
        }
    });
}
// Email validation
function emailValidation(){
	$(document).on('keyup blur change', '.emailV', function (e) {			
		var sEmail = $(this).val();
		if ($.trim(sEmail).length == 0) {
			//alert('Please enter valid email address');
			$(this).parents('.formDom').addClass('errorvalue');
			isEmailValidated = false;
			return false;
		}
		if (validateEmail(sEmail)) {
			$(this).parents('.formDom').removeClass('errorvalue');
			isEmailValidated = true;
		}
		else {
			$(this).parents('.formDom').addClass('errorvalue');
			isEmailValidated = false;
			return false;
		}
	});
	function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail)) {
			return true;
		}
		else {
			return false;
		}
	}
};
// password validation 
function passwordValidation(){
	$(document).on('keyup','.newPassword', function() {
		var password = $('.newPassword').val();
		var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/g;
		if(password.length > 7 && passReg.test(password)){
			$(this).parents('.formDom').removeClass('errorvalue');
			isPwdValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isPwdValidated = false;
		}
	});
	$(document).on('focusout','.confirmPassword', function() {
		var password = $('.newPassword').val();
		var confirmPass = $('.confirmPassword').val();
		if(password === confirmPass){
			$(this).parents('.formDom').removeClass('errorvalue');
			isConPwdValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isConPwdValidated = false;
		}
	});
};
// first name last name
function nameValidation(){
	$(document).on('keyup blur change', '.first-name, .last-name', function (e) {
		var yourInput = $(this).val();
		if(yourInput.length > 2){
			$(this).parents('.formDom').removeClass('errorvalue');
			isNameValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isNameValidated = false;
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
    $(document).on('keyup blur', '.cvv, .mobnumns, .cash_pincode, .paylater-otp, .epay-aadhar', function (e) {
        var yourInput = $(this).val(),
            globalRegex = globalRegex2;
            
        if (globalRegex.test(yourInput)) {
            var no_spl_char = yourInput.replace(globalRegex, '');
            $(this).val(no_spl_char);
        }		
    });
}
// all popup
function openPopup() {
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		e.preventDefault();
	});
}
// close popup
function closePopup() {
    $('.cls-popup').on('click', function () {
        clearInterval(stimer);
        $(".popupWrap").fadeOut();
        $('.timer').text(" ");
	});
}