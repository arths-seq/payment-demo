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

function renderWalletTemplate(){
    var walletData = {
        dataTabType:'wallet',
		cardsClass: 'wallet-tab',
        walletMob: 'Mobile Number',
        walletEmail: 'Enter your E-mail Id',
        iconMob: 'iMob',
        iconEmail: 'iEmail',
        iconUser: 'iUser',
        submitBtnTxt: translate('Submit'),
        'allWallet': [
            {
                walletname: 'Amazon Pay',
                value: 'amazon',
                titile: 'amazon'
            }, {
                walletname: 'Citrus Wallet',
                value: 'citrus',
                titile: 'citrus'
            }, {
                walletname: 'Freecharge',
                value: 'freecharge',
                titile: 'freecharge'
            }, {
                walletname: 'HDFC PayZapp',
                value: 'payzap',
                titile: 'payzap'
            }, {
                walletname: 'JioMoney',
                value: 'jio',
                titile: 'jio'
            }, {
                walletname: 'Ola Money',
                value: 'ola',
                titile: 'ola'
            }, {
                walletname: 'PayU',
                value: 'payu',
                titile: 'payu'
            }, {
                walletname: 'Paytm',
                value: 'paytm',
                titile: 'paytm'
            }, {
                walletname: 'Oxigen Wallet',
                value: 'oxygen',
                titile: 'oxygen'
            }, {
                walletname: 'Quik wallet',
                value: 'quick',
                titile: 'quick'
            }, {
                walletname: 'SBI Buddy',
                value: 'sbud',
                titile: 'sbibuddy'
            }, {
                walletname: 'Money On Mobile',
                value: 'money',
                titile: 'money'
            }, {
                walletname: 'MobiKwik',
                value: 'mobikwik',
                titile: 'mobikwik'
            }, {
                walletname: 'Itz Cash',
                value: 'itzcash',
                titile: 'itzcash'
            }, {
                walletname: 'sodexo',
                value: 'sodexo',
                titile: 'sodexo'
            }
        ]
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
}