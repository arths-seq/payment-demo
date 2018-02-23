$(function() {

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
                'data':'credit-card',
                'tabname':'Credit Card'
            },{
                'data':'debit-card',
                'tabname':'Debit Card'
            },{
                'data':'net-banking',
                'tabname':'Net Banking'
            },{
                'data':'Cash',
                'tabname':'Cash'
            },{
                'data':'emi',
                'tabname':'EMI'
            },{
                'data':'rtgs',
                'tabname':'RTGS / NEFT'
            },{
                'data':'wallet',
                'tabname':'Wallet'
            },{
                'data':'amex',
                'tabname':'Amex eZeClick'
            },{
                'data':'express-payments',
                'tabname':'Express Payments'
            },{
                'data':'upi',
                'tabname':'UPI'
            },{
                'data':'bharat-qr',
                'tabname':'Bharat QR'
            },{
                'data':'pay-later',
                'tabname':'Pay Later'
            },
        ]
    };
    
    var menuDom = Handlebars.templates['menu-tab.hbs'](menuData);
    $('.tab-menu').append(menuDom);  
    
    $('.blockMain').hide();
  
    $('.menu-link').on('click',function(event){
        $('.menu-link.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        var blockDatatype = $(event.currentTarget).attr('data-menu-type');
        getTab (blockDatatype);
     });
    
    function getTab (blockDatatype){
        if(blockDatatype == "wallet"){
            $('.blockMain').show();
            $('.blockWallet').show();
        
        }else{
            $('.blockMain').hide();
        }
    }
            
});