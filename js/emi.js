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
    emiValidationTab();
    specialCharactersValidation();
	cvvValidation();
	expiryDateValidation();
	cardNameNumVal();
	saveCardLogin();
	ccdcGoBack();
}

function getEmiData(){
    var emiData = paymentChannelsData.DOMAIN.EMI.BANK,
        counter = 0,
        currentObj,
        resultArr = [];      
        
    resultArr.push({
        nbname: 'Select Bank',
        value: 'selectbank',
        titile: 'selectbank',
        cardEmi: true
    });
    for(;counter<emiData.length;counter++){
        currentObj = emiData[counter];
        resultArr.push({
            nbname: currentObj.BANKTITLE,
            value: currentObj.BANKCODE,
            titile: currentObj.BANKCODE,
            emitTenure: currentObj.EMI_TENURE.TENURE,
            cardEmi: true
        });
    }
    return resultArr;
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
        savedCreditCard: false,
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
        heCVVAmex: translate('Its a 4 digit code printed on the back of your card'),
        savetx: 'Save card now to enable express payments',
        'cardEmiBank': getEmiData()
    };
    var emiTabTemplate = Payments.templates.cards(emiData);
	$('.tab-container').append(emiTabTemplate);
}

function emiValidationTab(){
    $('.emitable').hide();
    $(document).on('change', 'select', function (e) {
        if ($(this).val() == 'hdfc') {
            $('.emitable').show();
        }else if ($(this).val() == 'selectbank') {
            $('.emitable').hide();
        }
    });
    // emi validation
	$(document).on('click', '.emi-submit', function (e) {
		if(!$('.emi-tab .formDom  input').val() == '' && isCardNameValidated == true && isCardValidated == true && isCvvValidated == true && isExpDateValidated == true){
			$(this).parents('.formDom').removeClass('errorvalue');
		}else{
			$("input:visible[data-rule-required!='true']").parents('.formDom').addClass('errorvalue');	
		}
	});
}