function renderEmiChannel(paymentTabId){
    renderEmiTemplate();
    $('.blockMain').hide();
    $('#emi').addClass('block-emi');
    $('#emi').removeClass('blockCards');
    $('.block-emi').attr('data-tab-type','emi');
    $('[data-tab-type="emi"]').show();
    bindEmiEvent();
}
function bindEmiEvent(){
    floatLabels();
    emiValidation();
}
function renderEmiTemplate(){
    var emiData = {
        dataTabType:'emi',
        cardsClass: 'emi-tab',
        isEmiTab: true,
        pageID: "emi",
        tab: "tabs-4",
        showSavedCard: true,
        savedCard: false,
        savedCreditCard: true,
		savedDebitCard: false,
        blockName: 'block-emi',
        cnLabel: 'Card Number',
        cxLabel: 'Card Exp Date',
        chnLabel: 'Card Holder Name',
        cvvLabel: 'CSV / CVV',
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
        heCnum: 'Please enter a valid card number',
        heChold: 'Please enter name on your card',
        heCVV: 'Its a 3 digit code printed on the back of your card',
        savetx: 'Save card now to enable express payments',
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
                interestPaid: 'Rs. 0'
            },
            {
                emiTenure: '3 months',
                bankRate: '12%',
                installments: 'Rs. 55',
                interestPaid: 'Rs. 20'
            },
            {
                emiTenure: '6 months',
                bankRate: '12%',
                installments: 'Rs. 5,100',
                interestPaid: 'Rs. 301'
            }
        ]
    };
    var emiTabTemplate = Payments.templates.cards(emiData);
	$('.tab-container').append(emiTabTemplate);
}

function emiValidation(){
    $('.emitable').hide();
    $(document).on('change', 'select', function (e) {
        if ($(this).val() == 'hdfc') {
            $('.emitable').show();
        }else if ($(this).val() == 'selectbank') {
            $('.emitable').hide();
        }
    });
}