function renderDebitCard(paymentTabId){
	renderDebitTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindDebitEvent();
}

function bindDebitEvent(){
	specialCharactersValidation();
	cvvValidation();
	expiryDateValidation();
	cardNameNumVal();
	floatLabels();
	emailValidation();
	passwordValidation();
    //saveDebitCardLogin();
    saveCardLogin();
	debitGoBack();
	mobileNum();
}

function renderDebitTemplate(){
	var debitData = {
		dataTabType:'debit',
		cardsClass: 'debit-tab',
        isEmiTab: false,
		showSavedCard: true,
		existingUser: true,
		showEmiCheck: false,
        savedCard: true,
        savedCreditCard: false,
        blockName: 'blockCards',
        cnLabel: translate('Card Number'),
        cxLabel: translate('Card Exp Date'),
        chnLabel: translate('Card Holder Name'),
        cvvLabel: translate('CSV / CVV'),
        saveMob: 'Mobile Number',
        dataSubFormId: 'debitFormId',
        saveEmail: 'Enter your E-mail Id',
        savePass: 'Enter your Password',
        confirmPass: 'Re enter Password',
        iconCard: 'iCard',
        iconCname: 'iNameCard',
        iconCVV: 'iCVV',
        iconMob: 'iMob',
        iconEmail: 'iEmail',
        iconUser: 'iUser',
        iconPass: 'iPass',
        heCnum: translate('Please enter a valid card number'),
        heChold: translate('Please enter name on your card'),
        heCVV: translate('Its a 3 digit code printed on the back of your card'),
        heCVVAmex: translate('Its a 4 digit code printed on the back of your card'),
		savetx: translate('Save card now to enable express payments'),
		emiCheck: translate('Pay with EMI'),
		emiPlans: translate('View Plans'),
		emiPlansChange: translate('Change Plan'),
		submitBtnTxt: translate('Submit'),
        'cardEmiBank': [
			{
                nbname: 'Select Bank',
                value: 'selectbank',
                titile: 'selectbank',
                cardEmi: true
            },
            {
                nbname: 'ICICI Bank',
                value: 'icici',
                titile: 'nbicici',
                cardEmi: true
            }, {
                nbname: 'HDFC Bank',
                value: 'hdfc',
                titile: 'nbhdfc',
                cardEmi: true
            }, {
                nbname: 'Kotak Bank',
                value: 'kotak',
                titile: 'nbkotak',
                cardEmi: false
            }, {
                nbname: 'Axis Bank',
                value: 'axis',
                titile: 'nbaxis',
                cardEmi: true
            }, {
                nbname: 'SBI Bank',
                value: 'sbi',
                titile: 'nbsbi',
                cardEmi: false
            }

        ]
    };
    var debit = Payments.templates.cards(debitData);
	$('.tab-container').append(debit);
}

// go back
function debitGoBack(){
	$(document).on('click', '.ccdc-goback', function (e) {
		$('.card-ccdc').show();
		$('.savedCard').hide();
		$('.existing-user').hide();
	});
};
// sign up 
function saveDebitCardLogin (){
	$('.savedCard').hide();
	$('.existing-user').hide();
	$(document).on('click', '.save-card', function (e) {
		if(!$('.card-ccdc .formDom  input').val() == '' && isCardNameValidated == true && isCardValidated == true && isCvvValidated == true && isExpDateValidated == true){
			if($('.save-Card-Check').is(':checked')){
				$('.card-ccdc').hide();
				$('.savedCard').hide();
				$('.existing-user').show();
			}else{
				$('.card-ccdc').hide();
				$('.savedCard').show();
			}
			$(this).parents('.formDom').removeClass('errorvalue');	
		}else{
			$('.card-ccdc  input').parents('.formDom').addClass('errorvalue');	
		}	
	});
};