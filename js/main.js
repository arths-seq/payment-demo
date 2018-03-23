var languageJson,
    tabcont;
function loadTranslateJson(currentLang,isLanguageChange){
    var jsonFileName;

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

    languageJson = localStorage.getItem(currentLang+'-payment')? JSON.parse(localStorage.getItem(currentLang+'-payment')):null;

    if(!languageJson){
        $.ajax('./language/'+jsonFileName,{
            success: $.proxy(function(currentLang,data){
                if(typeof data === "string"){
                    languageJson = JSON.parse(data);
                } else {
                    languageJson = data;
                }
                localStorage.setItem(currentLang+'-payment',JSON.stringify(languageJson));
                render(isLanguageChange);
            },this,currentLang)
        });
    } else {
        render(isLanguageChange);
    }
}

function translate(translationText){
    return  languageJson[translationText] || translationText;     
}

function render(isLanguageChange){
    $('body').addClass('mobile');
    loadMenuTab(isLanguageChange);
    bindLangChangeEvent();
}

function bindLangChangeEvent(){
    $('.language-selector').off('change').on('change',function(){
        var selectedLang = $(event.currentTarget).val();
        resetPage();
        loadTranslateJson(selectedLang,true);
    });
}

function resetPage(){
    $('.tab-menu').html('');
    $('.tab-container').html('');
}

function loadMenuTab(isLanguageChange){
    if(Payments.templates['menu_tab']){
        renderMenuTab(isLanguageChange);
    } else {
        $.ajax('./templates/menu_tab.js',{
            success: function(){
                renderMenuTab();
            }
        });   
    } 
}

function renderMenuTab(isLanguageChange){
    var menuData = {
        'menu': [
            {
                'data': 'credit-debit',
                'tab': '1',
                'tabname': translate('Credit / Debit'),
                'imgicon': 'cdc'
            }, {
                'data': 'net-banking',
                'tab': '2',
                'tabname': translate('Net Banking'),
                'imgicon': 'nb'
            }, {
                'data': 'cash',
                'tab': '3',
                'tabname': 'Cash',
                'imgicon': 'cash'
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
                'data': 'Amex-click',
                'tab': '7',
                'tabname': 'Amex eZeClick',
                'imgicon': 'amex'
            }, {
                'data': 'Express_Payment',
                'tab': '8',
                'tabname': 'Express Payments',
                'imgicon': 'exp-pay'
            }, {
                'data': 'UPI',
                'tab': '9',
                'tabname': 'UPI',
                'imgicon': 'upi'
            }, {
                'data': 'bharat-qr',
                'tab': '10',
                'tabname': 'Bharat QR',
                'imgicon': 'qr'
            }, {
                'data': 'pay-later',
                'tab': '11',
                'tabname': 'Pay Later',
                'imgicon': 'pay-later'
            },
        ]
    };
    var menuDom = Payments.templates.menu_tab(menuData);
    $('.tab-menu').html(menuDom);
    $('.menuli:first-child').addClass('active');
    bindMenuEvents();
    if(!isMobile()){
        renderSelectedTab('',isLanguageChange);
    }
}

function bindMenuEvents(){
    $('.tab-menu-options').off('click').on('click', function (event) {
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

function animateMobileTab() {
    tabcont.css('height', '');
    autoHeightAnimate(tabcont, 500);
    var tabHeight = tabcont.height();
    setTimeout(function () {
        $(".tabWrap").animate({
            height: tabHeight + $('.footer').height()
        }, 500);
        $('.tabWrap').addClass('showtab');
        $('.tab-menu').fadeOut(500);
        $('.footer,.closetab').fadeIn(500);
    }, 500);
}

function bindMobileHideEvent() {
    $('.closetab').off('click').on('click', function () {
    setTimeout(function () {
        $('.tabWrap').stop().animate({
            height: '0'
        }, 500, function () {
            $('.tabWrap').removeClass('showtab');
            $('.footer,.closetab').fadeOut(500);
            $('.tab-menu').fadeIn(500);
        });
    }, 0);
    });
}

function renderSelectedTab(paymentId,isLanguageChange){
    var callbackMethod,
        fileName;
    switch(paymentId) {
        case 'credit-debit':
            fileName = 'cards';
            callbackMethod = renderCcDc;
            break;
        case 'net-banking':
            fileName = 'netbanking';
            callbackMethod = renderNetBnk;
            break;
        case 'cash':
            fileName = 'cash';
            callbackMethod = renderCashChannel;
            break;
        case 'emi':
            fileName = 'emi';
            callbackMethod = renderEmiChannel;
            break;
        case 'rtgs':
            fileName = 'rtgs_neft';
            callbackMethod = renderRtgs;
            break;
        case 'wallet':
            fileName = 'wallet';
            callbackMethod = renderWalletChannel;
            break;
        case 'Amex-click':
            fileName = 'amex';
            callbackMethod = renderAmexChannel;
            break;
        case 'Express_Payment':
            fileName = '';
            callbackMethod;
            break;
        case 'UPI':
            fileName = 'upi_vpa';
            callbackMethod = renderUpi;
            break;
        case 'pay-later':
            fileName = 'paylater';
            callbackMethod = renderPaylater;
            break;
        case 'imps':
            fileName = '';
            callbackMethod;
            break;
        case 'va':
            fileName = '';
            callbackMethod;
            break;
        case 'aloan':
            fileName = '';
            callbackMethod;
            break;
        case 'bharat-qr':
            fileName = 'bharat_qr';
            callbackMethod = renderBharatqrChannel;
            break;
        default:
            paymentId = 'credit-debit';
            fileName = 'cards';
            callbackMethod = renderCcDc;
            break;
    }

    renderTab(paymentId,fileName,callbackMethod,isLanguageChange);
}

function renderTab(paymentTabId,templateFileName,callbackMethod,isLanguageChange){
    if(Payments.templates[templateFileName]){
        if(isLanguageChange){
            callbackMethod(paymentTabId); 
        } else {
            $('.blockMain').hide();
            $('[data-tab-type="'+paymentTabId+'"]').show();
        }
        if (isMobile()) {
            tabcont = $('.tabWrap');
            animateMobileTab();
            bindMobileHideEvent();
        }
    } else {
        $.ajax('./templates/'+templateFileName + '.js',{
            success: $.proxy(function(callbackMethod,paymentTabId,responseData){
                if(callbackMethod){
                    callbackMethod(paymentTabId);                
                }
                if (isMobile()) {
                    tabcont = $('.tabWrap');
                    animateMobileTab();
                    bindMobileHideEvent();
                }
            },this,callbackMethod,paymentTabId)
        });
    }
   
}

$(document).ready(function(){
    console.log('Hi we are in!!!');
    loadTranslateJson('en');
});