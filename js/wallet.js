function renderWalletChannel(paymentTabId){
	renderWalletTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindWalletEvents();	
}

function bindWalletEvents(){
    floatLabels();
    mobileNum();
    walletValidation();
    emailValidation();
    ccdcGoBack();
}

function getWalletData(){
    var walletData = paymentChannelsData.DOMAIN.PREPAID.BANK,
        counter = 0,
        currentObject,
        resultArr = [];
    
    for(;counter<walletData.length;counter++){
        currentObject = walletData[counter];
        resultArr.push({
            walletname: currentObject.BANKTITLE,
            value: currentObject.BANKCODE,
            titile: currentObject.BANKCODE
        });   
    }

    return resultArr;
}

function renderWalletTemplate(){
    var walletData = {
        'dataTabType':'wallet',
		'cardsClass': 'wallet-tab',
        'walletMob': 'Mobile Number',
        'walletEmail': 'Enter your E-mail Id',
        'iconMob': 'iMob',
        'iconEmail': 'iEmail',
        'iconUser': 'iUser',
        'submitBtnTxt': translate('Submit'),
        'allWallet': getWalletData()
    };

    var walletkli = Payments.templates.wallet(walletData);
    $('.tab-container').append(walletkli);
}

function walletValidation(){
    $('.wallet-login').hide();

    $(document).on('click','.walletlist li', function(e) {
        if ($(this).hasClass("citrus") || $(this).hasClass("freecharge")) {
            $('.walletlist').hide()
		    $('.wallet-login').show();
        }       
    });
    // go back
	$(document).on('click', '.goback', function (e) {
		$('.walletlist').show();
		$('.wallet-login').hide();
    });
    $(document).on('click', '.wallet-submit', function (e) {
		if(!$('.wallet-login .formDom  input').val() == '' && isMobileValidated == true && isEmailValidated == true){
			$(this).parents('.formDom').removeClass('errorvalue');
		}else{
			$("input:visible[data-rule-required!='true']").parents('.formDom').addClass('errorvalue');	
		}
	});
}