function renderExpressPayment(paymentTabId){
	renderExpressPaymentTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindExpressPaymentEvents();	
}

function bindExpressPaymentEvents(){
    floatLabels();
    emailValidation();
    passwordValidation();
	expressPaymentValidation();	
}

function renderExpressPaymentTemplate(){
	var expressPaymentData = {
		dataTabType:'Express_Payment',
		cardsClass: 'express-payment-tab',
		sumbitBtn:translate('Submit'),
		emailID:translate('Email Id'),
		savePass: translate('Enter your Password'),
		eidHelp:translate('Enter your e-mail Id'),
		phHelp:translate('Please enter a number'),
		iconPass: 'iPass',
        iconEmail: 'iEmail',
    }
	var expressPaymentTemplate = Payments.templates.express_payment(expressPaymentData);
	$('.tab-container').append(expressPaymentTemplate);
}
function expressPaymentValidation() {
    $('.exp-pay-forgot').hide();
	$('.forgot-exp').on('click', function () {
        $('.exp-pay-signin').hide();
		$('.exp-pay-forgot').show();
    });
    $('.back-exp-pay').on('click', function () {
        $('.exp-pay-signin').show();
		$('.exp-pay-forgot').hide();
	});
	$(document).on('click', '.exp-pay-submit', function (e) {
		if(!$('.exp-pay-signin .formDom  input').val() == '' && isPwdValidated == true && isEmailValidated == true){
			$(this).parents('.formDom').removeClass('errorvalue');
		}else{
			$("input:visible[data-rule-required!='true']").parents('.formDom').addClass('errorvalue');	
		}
	});
}