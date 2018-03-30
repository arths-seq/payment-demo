function renderPaylater(paymentTabId){
	renderEpayTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindEpayEvent();
};
function bindEpayEvent(){
	floatLabels();
	mobileNum();
	modalPopup();
	nameValidation();
	paylaterValidation();	
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

// pay later validation
function paylaterValidation(){
	 
	$('.step1-btn').on('click', function () {
		if(!$('.epay-details  input').val() == '' && isNameValidated == true && isEmailValidated == true && isMobileValidated == true && $('.payltr-check').is(':checked')){
			setTimeout(function(){
				$(".epay-uid").fadeIn();
				$(".epay-details").fadeOut();     
				$(".epay-otp").fadeOut();
				$(".firstli").addClass("comp");
				$(".midli").addClass("hold");
			}, 200);
			$('.epay-details  input').parents('.formDom').removeClass('errorvalue');	
		}else{
			$('.epay-details  input').parents('.formDom').addClass('errorvalue');	
		}	
    });
    $('.step2-btn').on('click', function () {
		if((!$('.epay-uid  .epay-pan').val() == '' || !$('.epay-uid  .epay-aadhar').val() == '') && isAadharValidated == true || isPanValidated == true){
			setTimeout(function(){   
				$(".epay-otp").fadeIn();
				$(".epay-uid").fadeOut();
				$(".epay-details").fadeOut();
				$(".midli").addClass("comp");
				$(".lastli").addClass("hold");
			}, 200);
			$('.epay-uid  input').parents('.formDom').removeClass('errorvalue');
		}else{
			$('.epay-uid  input').parents('.formDom').addClass('errorvalue');	
		}	
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
	
	// aadhar and pan card validation
	$(document).on('keyup blur', '.ovd-val', function (e) {
		var ovdNumVal =  $(this);
		var regexAadhar = new RegExp (/^\d{4}\d{4}\d{4}$/g);
		var regexPan = new RegExp (/[A-Z]{3}[P][A-Z]{1}\d{4}[A-Z]{1}/);

		if($('input').hasClass('epay-aadhar')){
			if(ovdNumVal.val().length == 12 && regexAadhar.test(ovdNumVal.val())){
				$(this).parents('.formDom').removeClass('errorvalue');
				isAadharValidated = true;
				return true;
			}else{
				$(this).parents('.formDom').addClass('errorvalue');
				isAadharValidated = false;
				return false;
			}
		}else if($('input').hasClass('epay-pan')){
			if(ovdNumVal.val().length == 10 && regexPan.test(ovdNumVal.val())){
				$(this).parents('.formDom').removeClass('errorvalue');
				isPanValidated = true;
				return true;
			}else{
				$(this).parents('.formDom').addClass('errorvalue');
				isPanValidated = false;
				return false;
			}
		}else{
			$(this).parents('.formDom').removeClass('errorvalue');
		}
		
	});

	// Otp validation
	$(document).on('keyup blur', '.paylater-otp', function(e) {
		if ($(".paylater-otp").val().length > 5) {
			$(this).parents('.formDom').removeClass('errorvalue');
		} else {
			$(this).parents('.formDom').addClass('errorvalue');
		}
	});
}