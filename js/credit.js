// all function validation 

function renderCcDc(paymentTabId){
	renderCcDcTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCcDcEvent();
}

function bindCcDcEvent(){
	specialCharactersValidation();
	cvvValidation();
	expiryDateValidation();
	cardNameNumVal();
	floatLabels();
	emailValidation();
	passwordValidation();
	saveCardLogin();
	ccdcGoBack();
	emiValidation();
	mobileNum();
}

function renderCcDcTemplate(){
	var cardData = {
		dataTabType:'credit',
		cardsClass: 'credit-tab',
        isEmiTab: false,
		showSavedCard: true,
		existingUser: true,
		showEmiCheck: true,
		savedCard: true,
		savedCreditCard: true,
		dataSubFormId: 'creditFormId',
        blockName: 'blockCards',
        cnLabel: translate('Card Number'),
        cxLabel: translate('Card Exp Date'),
        chnLabel: translate('Card Holder Name'),
        cvvLabel: translate('CSV / CVV'),
        saveMob: 'Mobile Number',
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

        ],
        'emiTable': [
            {
                emiTenure: '0 months',
                bankRate: '12%',
                installments: 'Rs. 0',
				interestPaid: 'Rs. 0',
				totalAmount: '1200',
				bankname: '12'
            },
            {
                emiTenure: '3 months',
                bankRate: '12%',
                installments: 'Rs. 55',
				interestPaid: 'Rs. 20',
				totalAmount: '10200',
				bankname: '34'
            },
            {
                emiTenure: '6 months',
                bankRate: '12%',
                installments: 'Rs. 5,100',
				interestPaid: 'Rs. 301',
				totalAmount: '20200',
				bankname: '56'
            }
		]
    };
    var cards = Payments.templates.cards(cardData);
	$('.tab-container').append(cards);
}

// emi validation
function emiValidation(){
	$('.view-plans').hide();
	$('.emi-change').hide();

	$(document).on('click', '.emi-Check', function (e) {
		$('.emi-Check').attr('checked', true); 
		if($('.emi-Check').is(':checked')){
			$('.view-plans').show();
			$('.emi-plans').show();
		}else{
			$('.view-plans').hide();
			$('.radioname').hide();
			$('.emi-change').hide();
			$('.emi-plans').show();			
			$('.view-plans-box').removeClass('active');
		}
	});
	$("body").click(function(e) {
		$('.view-plans-box').removeClass('active');
	});
	$(document).on('click', '.view-plans', function (e) {
		$('.view-plans-box').toggleClass('active');
	});
	
	$(document).on('click', '.view-plans-box li', function (e) {
		var radioname = $(this).text();
		$(".view-plans-box li").removeClass("active");
		$(this).addClass("active");			
		$(".radioname").text(radioname);
		$('.radioname').show();
		$('.emi-change').show();
		$('.emi-plans').hide();   
	});
}