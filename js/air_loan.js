function renderAirLoan(paymentTabId){
	renderAirloanTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindAirLoanEvents();	
}

function bindAirLoanEvents(){
    floatLabels();
    mobileNum();
	nameValidation();
	airLoanValidation();	
}

function renderAirloanTemplate(){
	var airLoanData = {
		sumbitBtn:translate('Submit'),
		firstName:translate('First Name'),
		lastName:translate('Last Name'),
		emailID:translate('Email Id'),
		phone:translate('Phone No.'),
		fnHelp: translate('Please enter your first name'),
		lnHelp:translate('Please enter your last name'),
		eidHelp:translate('Enter your e-mail Id'),
		phHelp:translate('Please enter a number'),
		formNote:translate('all fields are mandatory')
	};	
    var airLoanTemplate = Payments.templates.air_loan(airLoanData);
    $('.tab-container').append(airLoanTemplate);
}
function airLoanValidation() {
	$('.airloan-signup').on('click', function () {
		if(!$('.air-loan input').val() == '' && isNameValidated == true && isEmailValidated == true && isMobileValidated == true){
            $('.air-loan').append('successfull');
            $('air-loan input').parents('.formDom').removeClass('errorvalue');	
		}else{
			$('.air-loan input').parents('.formDom').addClass('errorvalue');	
		}	
    });
}