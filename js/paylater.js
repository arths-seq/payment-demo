function renderPaylater(paymentTabId){
	renderEpayTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindEpayEvent();
};
function bindEpayEvent(){
	floatLabels();
	bindpaylaterEvents();
    goback();
}

function renderEpayTemplate(){
	var paylaterData = {
		sumbitBtnTxt:translate('Submit'),
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
    bindpaylaterEvents();
    goback();
}

function bindpaylaterEvents(){
    $('.epaytnc-popup').hide();
    $('.payltrtnc').on('click',generatepaylaterPopup);
}
function generatepaylaterPopup(){
    $('.epaytnc-popup').show();
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