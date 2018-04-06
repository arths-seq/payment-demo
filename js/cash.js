function renderCashChannel(paymentTabId){
	renderCashTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCashEvents();	
}

function bindCashEvents(){
	mobileNum();
	pinCodeValidation();
	floatLabels();
	specialCharactersValidation();
}

function renderCashTemplate(){
	var cashData = {
		dataTabType:'cash',
		cardsClass: 'cash-tab',
		cashmob: 'Mobile Number',
		cashpin: 'Pincode',
		cashlocatin: 'Deposit Locations',
		cashheCnum: 'Please enter a valid Mobile Number'
    };

    var cashTemplate = Payments.templates.cash(cashData);
	$('.tab-container').append(cashTemplate);
}
function pinCodeValidation() {
	$(document).on('keyup blur', '.cash_pincode', function(e) {
		var pinCode = $(this);
		if (pinCode.val().length > 5) {
			$(this).parents('.formDom').removeClass('errorvalue');
			$(this).attr('data-rule-required' , 'true');
			isCashPinValidated =  true;
		} else {
			$(this).parents('.formDom').addClass('errorvalue');
			$(this).attr('data-rule-required' , 'false');
			isCashPinValidated =  false;
		}
	});
	$(document).on('click', '.cash-submit', function (e) {
		if(!$('.cash-tab .formDom  input').val() == '' && isMobileValidated == true && isPwdValidated == true){
			$(this).parents('.formDom').removeClass('errorvalue');
		}else{
			$("input:visible[data-rule-required!='true']").parents('.formDom').addClass('errorvalue');	
		}
	});
}