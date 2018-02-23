$(document).ready(function(){

    $(".form-group input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    });

    var bankData = {
        'allbank':[
            {
                nbname:'ICICI Bank',
                value:'icici',
                titile:'nbicici',
                popular : true
            },{
                nbname:'HDFC Bank',
                value:'hdfc',
                titile:'nbhdfc',
                popular : true
            },{
                nbname:'Kotak Bank',
                value:'kotak',
                titile:'nbkotak'
            },{
                nbname:'Axis Bank',
                value:'axis',
                titile:'nbaxis',
                popular : true
            },{
                nbname:'SBI Bank',
                value:'sbi',
                titile:'nbsbi'
            }
        ]
    };
    
    var nbankli = Handlebars.templates['netbanking.hbs'](bankData);
    $('.tab-container').append(nbankli);

    var cardData = {
        cnLabel:'Card Number',
        cxLabel:'Card Exp Date',
        chnLabel:'Card Holder Name',
        cvvLabel:'CSV / CVV',
        'allcard':[
            {
                


            }
        ]
    };
    var cards = Handlebars.templates['cards.hbs'](cardData);
    $('.tab-container').append(cards);
   
    
    
    var walletData = {
        'wallet':[
            {
                'labelfor':'AMAZON_ppc',
                'id':'AMAZON_ppc',
                'value':'AMAZON',
                'spanclass':'bankLogo amazon-wallet'
            },{
                'labelfor':'CITRUS_ppc',
                'id':'CITRUS_ppc',
                'value':'CITRUS',
                'spanclass':'bankLogo citrus-wallet'
            },{
                'labelfor':'FREE_ppc',
                'id':'FREE_ppc',
                'value':'FREE',
                'spanclass':'bankLogo freecharge-wallet'
            },{
                'labelfor':'HDFCPP_ppc',
                'id':'HDFCPP_ppc',
                'value':'HDFCPP',
                'spanclass':'bankLogo hdfc-payzap'
            },{
                'labelfor':'JIO_ppc',
                'id':'JIO_ppc',
                'value':'JIO',
                'spanclass':'bankLogo jio-wallet'
            },{
                'labelfor':'MONEY_ppc',
                'id':'MONEY_ppc',
                'value':'MONEY',
                'spanclass':'bankLogo money-wallet'
            },{
                'labelfor':'OLA_ppc',
                'id':'OLA_ppc',
                'value':'OLA',
                'spanclass':'bankLogo ola-wallet'
            },{
                'labelfor':'OXI_ppc',
                'id':'OXI_ppc',
                'class':'radio-box',
                'value':'OXI',
                'spanclass':'bankLogo oxygen-wallet'
            },{
                'labelfor':'PAYU_ppc',
                'id':'PAYU_ppc',
                'value':'PAYU',
                'spanclass':'bankLogo payu-wallet'
            },{
                'labelfor':'QUICK_ppc',
                'id':'QUICK_ppc',
                'value':'QUICK',
                'spanclass':'bankLogo quick-wallet'
            },{
                'labelfor':'SBUD_ppc',
                'id':'SBUD_ppc',
                'value':'SBUD',
                'spanclass':'bankLogo sbi-buddy'
            }
        ]
    };
    
    var walletDom = Handlebars.templates['wallets.hbs'](walletData);
    $('.tab-container').append(walletDom);
    
    var menuData = {
        'menu':[
            {
                'data':'credit-debit',
                'tab':'1',
                'tabname':'Credit / Debit'
            },{
                'data':'net-banking',
                'tab':'2',
                'tabname':'Net Banking'
            },{
                'data':'Cash',
                'tab':'3',
                'tabname':'Cash'
            },{
                'data':'emi',
                'tab':'4',
                'tabname':'EMI'
            },{
                'data':'rtgs',
                'tab':'5',
                'tabname':'RTGS / NEFT'
            },{
                'data':'wallet',
                'tab':'6',
                'tabname':'Wallet'
            },{
                'data':'amex',
                'tab':'7',
                'tabname':'Amex eZeClick'
            },{
                'data':'express-payments',
                'tab':'8',
                'tabname':'Express Payments'
            },{
                'data':'upi',
                'tab':'9',
                'tabname':'UPI'
            },{
                'data':'bharat-qr',
                'tab':'10',
                'tabname':'Bharat QR'
            },{
                'data':'pay-later',
                'tab':'11',
                'tabname':'Pay Later'
            },
        ]
    };
    
    var menuDom = Handlebars.templates['menu-tab.hbs'](menuData);
    $('.tab-menu').append(menuDom);  
    
    
    function displayTab(){
       $('.blockMain[data="tabs-1"]').show();
       $('.menuli:first-child a').addClass('active');
    }
    
    displayTab();
  
    $('.menu-link').on('click',function(event){
        $('.menu-link.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        var blockDatatype = $(event.currentTarget).attr('data-tab');
        getTab(blockDatatype);
      });
    
    function getTab (blockDatatype){
        if(blockDatatype == "tabs-1"){
            $('.blockMain').hide();
            $('.blockMain[data="'+blockDatatype+'"]').show();
        }
        if(blockDatatype == "tabs-2"){
            $('.blockMain').hide();
            $('.blockMain[data="'+blockDatatype+'"]').show();
        }
        if(blockDatatype == "tabs-6"){
            $('.blockMain').hide();
            $('.blockMain[data="'+blockDatatype+'"]').show();
        }
    }
   
});


