var languageJson,
    tabcont;
function loadTranslateJson(){
    var currentLang = "mr",
        jsonFileName;

    switch (currentLang){
        case 'en':
            jsonFileName = 'en.json';
            break;
        case 'mr':
            jsonFileName = 'mr.json';
            break;
        case 'dr':
            jsonFileName = 'dr.json';
            break;
        default :
            jsonFileName = 'en.json';
            break;
    }

    languageJson = JSON.parse(localStorage.getItem(currentLang+'-payment'));
    if(!languageJson){
        $.ajax('./language/'+jsonFileName,{
            success: $.proxy(function(currentLang,data){
                languageJson = JSON.parse(data);
                localStorage.setItem(currentLang+'-payment',data);
                render();
            },this,currentLang)
        });
    } else {
        render();
    }
}

function translate(translationText){
    return  languageJson[translationText] || translationText;     
}

function render(){
    loadMenuTab();
}

function loadMenuTab(){
    $.ajax('./templates/menu_tab.js',{
        success: function(){
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
            bindMenuEvents();
            if(!isMobile()){
                renderSelectedTab();
            }
        }
    });    
}

function bindMenuEvents(){
    $('.tab-menu-options').on('click', function (event) {
        $('.tab-menu-options.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        var blockDatatype = $(event.currentTarget).attr('data-tab');
        var currentTabId = $(event.currentTarget).find('.menu-link').attr('data-tab-id');

        renderSelectedTab(currentTabId);
    });
}

function autoHeightAnimate(element, time, callback) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({
        height: autoHeight
    }, time); // Animate to Auto Height
}

function showTab() {
    tabcont.css('height', '');
    autoHeightAnimate(tabcont, 500);
    var tabHeight = tabcont.height();
    setTimeout(function () {
        $(".tabWrap").animate({
            height: tabHeight
        }, 500);
        $('.tabWrap').addClass('showtab');
        $('.tab-menu').fadeOut(500);
    }, 500);
    $('.footer,.closetab').show();
}


function hideTab() {
    $('.closetab').on('click', function () {
        $('.tabWrap').stop().animate({
            height: '0'
        }, 500, function () {
            $('.tabWrap').removeClass('showtab');
            $('.footer,.closetab').hide();
            $('.tab-menu').fadeIn(500);
        });

    });
}

function renderSelectedTab(paymentId){
    switch(paymentId) {
        case 'credit-debit':
            renderCCDC(paymentId);
            break;
        case 'net-banking':
            renderNetBanking(paymentId);
            break;
        case 'cash':
            renderCashBlock(paymentId);
            break;
        case 'emi':
            renderEmiBlock(paymentId);
            break;
        case 'rtgs':
            renderRtgsBlock(paymentId);
            break;
        case 'wallet':
            renderWalletBlock(paymentId);
            break;
        case 'Amex-click':
            renderAmexOnClickBlock(paymentId);
            break;
        case 'Express_Payment':
            renderExpressTabs(paymentId);
            break;
        case 'UPI':
            renderUpiBlock(paymentId);
            break;
        case 'pay_later':
            renderPayLaterBlock(paymentId);
            break;
        case 'imps':
            renderImpsBlock(paymentId);
            break;
        case 'va':
            renderVirtualBlock(paymentId);
            break;
        case 'aloan':
            renderAirloan(paymentId);
            break;
        case 'btqr':
            renderbharatqr(paymentId);
            break;
        default:
            renderCCDC('credit-debit');
            break;
    }
}

function renderCCDC(paymentTabId){
    renderTab(paymentTabId,'cards', renderCcDc);
}

function renderNetBanking(paymentTabId){
    renderTab(paymentTabId,'netbanking', renderNetBnk);
}

function renderTab(paymentTabId,templateFileName,callbackMethod){
    if(Payments.templates[templateFileName]){
        $('.blockMain').hide();
        $('[data-tab-type="'+paymentTabId+'"]').show();
        if (isMobile()) {
            tabcont = $('.tabWrap');
            showTab();
            hideTab();
        }
    } else {
        $.ajax('./templates/'+templateFileName + '.js',{
            success: $.proxy(function(callbackMethod,paymentTabId,responseData){
                if(callbackMethod){
                    callbackMethod(paymentTabId);                
                }
                if (isMobile()) {
                    tabcont = $('.tabWrap');
                    showTab();
                    hideTab();
                }
            },this,callbackMethod,paymentTabId)
        });
    }
   
}

$(document).ready(function(){
    console.log('Hi we are in!!!');
    loadTranslateJson();
});