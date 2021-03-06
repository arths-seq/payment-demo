var languageJson,
    tabcont,
    loadEmiOnce = true,
    loadCreditOnce = true,
    loadDebitOnce = true;

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

    //languageJson = localStorage.getItem(currentLang+'-payment')? JSON.parse(localStorage.getItem(currentLang+'-payment')):null;

    if(!languageJson){
        $.ajax('./payment-demo/language/'+jsonFileName,{
            success: $.proxy(function(currentLang,data){
                if(typeof data === "string"){
                    languageJson = JSON.parse(data);
                } else {
                    languageJson = data;
                }
                localStorage.setItem(currentLang+'-payment',JSON.stringify(languageJson));
                updateAllData(isLanguageChange);
            },this,currentLang)
        });
    } else {
        updateAllData(isLanguageChange);
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
        $.ajax('./payment-demo/templates/menu_tab.js',{
            success: function(){
                renderMenuTab();
            }
        });   
    } 
}

function renderMenuTab(isLanguageChange){
    var menuData = {
        'menu': paymentChannelsData.menuOptions
    };
    var menuDom = Payments.templates.menu_tab(menuData);
    $('.tab-menu').html(menuDom);
    $('.menuli:first-child').addClass('active');
    bindMenuEvents();
   
    if(!isMobile()){
        renderSelectedTab($('.menu-link:first').data('tab-id'),isLanguageChange);
    }
}

function bindMenuEvents(){
    $('.tab-menu-options').off('click').on('click', function (event) {
        $('.tab-menu-options.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        var blockDatatype = $(event.currentTarget).attr('data-tab');
        var currentTabId = $(event.currentTarget).find('.menu-link').attr('data-tab-id');
        
        $('.card-ccdc .formDom  input').val('');
        if ($('.card-ccdc .formDom  input').val() == "") {
            $('.card-ccdc .formDom  input').parents('.formDom').removeClass("has-content");
            $('.card-ccdc .formDom  input').parents('.formDom').removeClass('errorvalue');            
        }
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
        case 'credit':
            fileName = 'cards';
            callbackMethod = renderCcDc;
            break;
        case 'debit':
            fileName = 'cards';
            callbackMethod = renderDebitCard;
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
            fileName = 'cards';
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
            fileName = 'express_payment';
            callbackMethod = renderExpressPayment;
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
        case 'virtual-acc':
            fileName = 'virtual_acc';
            callbackMethod = renderVirtual;
            break;
        case 'aloan':
            fileName = 'air_loan';
            callbackMethod = renderAirLoan;
            break;
        case 'bharat-qr':
            fileName = 'bharat_qr';
            callbackMethod = renderBharatqrChannel;
            break;
        case 'amzon':
            fileName = 'amazonpay';
            callbackMethod = renderAmazonChannel;
            break;
        default:
            paymentId = 'credit';
            fileName = 'cards';
            callbackMethod = renderCcDc;
            break;
    }

    renderTab(paymentId,fileName,callbackMethod,isLanguageChange);
}

function renderTab(paymentTabId,templateFileName,callbackMethod,isLanguageChange){
    if(Payments.templates[templateFileName]){
        if(isLanguageChange || loadEmiOnce && paymentTabId === 'emi' || loadDebitOnce && paymentTabId === 'debit' || loadCreditOnce && paymentTabId === 'credit'){
            loadEmiOnce = paymentTabId === 'emi' ?  false : loadEmiOnce;
            loadDebitOnce = paymentTabId === 'debit' ?  false : loadDebitOnce;
            loadCreditOnce = paymentTabId === 'credit' ?  false : loadCreditOnce;
            
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
        $.ajax('./payment-demo/templates/'+templateFileName + '.js',{
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
    loadTranslateJson('en');
    if (isMobile()) {
        renderSavedCards();
        $('.save-card-container').css('display', 'block');
    }
});