function renderPaylater(paymentTabId){
	renderEpayTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindEpayEvent();
};
function bindEpayEvent(){
	floatLabels();
    openPopup();
    closePopup();
    goback();
}

function renderEpayTemplate(){
	var paylaterData = {
		sumbitBtn:translate('Submit'),
		firstName:translate('First Name'),
		lastName:translate('Last Name'),
		emailID:translate('Email Id'),
		phone:translate('Phone No.'),
		adharlabel:translate('Adhar Card No'),
		panLabel:translate('PAN No'),
		birthlabel:translate('Date of Birth'),
		otpLabel:translate('Enter your OTP code'),
		terms:translate('terms & conditions.'),
		termsLine:translate('I agree to the'),
		fnHelp: translate('Please enter your first name'),
		lnHelp:translate('Please enter your last name'),
		eidHelp:translate('Enter your e-mail Id'),
		phHelp:translate('Please enter a number'),
		adharHelp:translate('Please enter your adhar card no'),
		panHelp:translate('Please enter a PAN no'),
		birthHelp:translate('Please enter birth date'),
		otpHelp:translate('Please enter your OTP code'),
		formNote:translate('all fields are mandatory'),
		epayNote:translate('Shop today. Pay 14 days later. 0% interest!'),
		epayInfo:translate('what is Pay Later?'),
		signUp:translate('Sign Up'),
		verification:translate('Verification'),
		otptx:translate('OTP'),
		canceltx:translate('cancel'),
		resendtx:translate('resend OTP'),
	};	
    var paylaterTemplate = Payments.templates.paylater(paylaterData);
    $('.tab-container').append(paylaterTemplate);
}

function openPopup() {
    $('.payltrtnc').on('click', function () {
        $(".epaytnc-popup").fadeIn();
        var fiveMinutes = 60 * 5,
            display = $('.timer');
        setTimeout(function(){
            startTimer(fiveMinutes, display);
        }, 500);
    });

    $('.way-txt').on('click', function () {
        $(".waypay-popup").fadeIn();
        var fiveMinutes = 60 * 5,
            display = $('.timer');
        setTimeout(function(){
            startTimer(fiveMinutes, display);
        }, 500);
    });
}

function closePopup() {
    $('.cls-popup').on('click', function () {
        clearInterval(stimer);
        $(".epaytnc-popup").fadeOut();
        $(".waypay-popup").fadeOut();
        $('.timer').text(" ");
    });
}

function goback() {   
     $('.step1-btn').on('click', function () {
       setTimeout(function(){
		    $(".epay-uid").fadeIn();
		    $(".epay-details").fadeOut();     
	        $(".epay-otp").fadeOut();
	        $(".firstli").addClass("comp");
	        $(".midli").addClass("hold");
        }, 500);
    });
    $('.step2-btn').on('click', function () {
        setTimeout(function(){            
	        $(".epay-otp").fadeIn();
	        $(".epay-uid").fadeOut();
	        $(".epay-details").fadeOut();
	        $(".midli").addClass("comp");
	        $(".lastli").addClass("hold");
        }, 500);
    });


    $('.can2-btn').on('click', function () {
        setTimeout(function(){            
	        $(".epay-details").fadeIn();
	        $(".epay-uid").fadeOut();
	        $(".epay-otp").fadeOut();
	        $(".firstli").addClass("hold");
	        $(".firstli").removeClass("comp");
	        $(".midli").removeClass("hold comp");
        }, 500);
    });
    $('.can3-btn').on('click', function () {
        setTimeout(function(){            
	        $(".epay-uid").fadeIn();
	        $(".epay-details").fadeOut();
	        $(".epay-otp").fadeOut();
	        $(".lastli").removeClass("comp hold");
	        $(".midli").removeClass("comp");
	        $(".midli").addClass("hold");
        }, 500);
    });
}