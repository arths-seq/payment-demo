$(document).ready(function () {

    var bankData = {
        'allbank': [
            {
                nbname: 'ICICI Bank',
                value: 'icici',
                titile: 'nbicici',
                popular: true
            }, {
                nbname: 'HDFC Bank',
                value: 'hdfc',
                titile: 'nbhdfc',
                popular: true
            }, {
                nbname: 'Kotak Bank',
                value: 'kotak',
                titile: 'nbkotak',
                popular: true
            }, {
                nbname: 'Axis Bank',
                value: 'axis',
                titile: 'nbaxis',
                popular: true
            }, {
                nbname: 'SBI Bank',
                value: 'sbi',
                titile: 'nbsbi',
                popular: true
            }, {
                nbname: 'Bank of Maharashtra',
                value: 'bom',
                titile: 'nbbom',
                popular: true
            }
        ]
    };

    var nbankli = Payments.templates.netbanking(bankData);
    $('.tab-container').append(nbankli);

	// cash st
	var cashData = {
		cashmob: 'Mobile Number',
		cashpin: 'Pincode',
		cashlocatin: 'Deposit Locations',
		cashheCnum: 'Please enter a valid Mobile Number'
    };

    var cashon = Payments.templates.cash(cashData);
    $('.tab-container').append(cashon);
	// cash end
	// amex st
	var amexData = {
        'alladd': [
            {
                nbname: 'ICICI Bank',
                popular: true
            }, {
                nbname: 'HDFC Bank',
                popular: true
            }, {
                nbname: 'Kotak Bank',
                popular: true
            }, {
                nbname: 'Axis Bank',
                popular: true
            }, {
                nbname: 'SBI Bank',
                popular: true
            }, {
                nbname: 'Bank of Maharashtra',
                popular: true
            }
        ]
    };

    var amextab = Payments.templates.amex(amexData);
    $('.tab-container').append(amextab);
	// amex end
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

    var cardData = {
        isEmiTab: true,
        pageID: "cards",
        tab: "tabs-1",
        showSavedCard: true,
        savedCard: false,
        blockName: 'blockCards',
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
                radioval: '1',
                emiTenure: '0 months',
                bankRate: '12%',
                installments: 'Rs. 0',
                interestPaid: 'Rs. 0'
            },
            {
                radioval: '2',
                emiTenure: '3 months',
                bankRate: '12%',
                installments: 'Rs. 55',
                interestPaid: 'Rs. 20'
            },
            {
                radioval: '3',
                emiTenure: '6 months',
                bankRate: '12%',
                installments: 'Rs. 5,100',
                interestPaid: 'Rs. 301'
            }
        ]
    };
    var cards = Payments.templates.cards(cardData);
    $('.tab-container').append(cards);

    var menuData = {
        'menu': [
            {
                'data': 'credit-debit',
                'tab': '1',
                'tabname': 'Credit / Debit',
                'imgicon': 'cdc'
            }, {
                'data': 'net-banking',
                'tab': '2',
                'tabname': 'Net Banking',
                'imgicon': 'nb'
            }, {
                'data': 'Cash',
                'tab': '3',
                'tabname': 'Cash',
                'imgicon': 'cash'
            }, {
                'data': 'emi',
                'tab': '4',
                'tabname': 'EMI',
                'imgicon': 'emi'
            }, {
                'data': 'rtgs',
                'tab': '5',
                'tabname': 'RTGS / NEFT',
                'imgicon': 'rtnft'
            }, {
                'data': 'wallet',
                'tab': '6',
                'tabname': 'Wallet',
                'imgicon': 'wallet'
            }, {
                'data': 'amex',
                'tab': '7',
                'tabname': 'Amex eZeClick'
            }, {
                'data': 'express-payments',
                'tab': '8',
                'tabname': 'Express Payments'
            }, {
                'data': 'upi',
                'tab': '9',
                'tabname': 'UPI'
            }, {
                'data': 'bharat-qr',
                'tab': '10',
                'tabname': 'Bharat QR'
            }, {
                'data': 'pay-later',
                'tab': '11',
                'tabname': 'Pay Later'
            },
        ]
    };

    var menuDom = Payments.templates.menu_tab(menuData);
    $('.tab-menu').append(menuDom);

    var bharatQr = Payments.templates.bharat_qr();
    $('.tab-container').append(bharatQr);
    
    var upi = Payments.templates.upi_vpa();
    $('.tab-container').append(upi);

});