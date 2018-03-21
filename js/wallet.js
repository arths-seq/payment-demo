function renderWalletChannel(paymentTabId){
	renderWalletTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindWalletEvents();	
}

function bindWalletEvents(){
	mobileNum();
}

function renderWalletTemplate(){
    var walletData = {
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
