$(function() {

  /*var source   = $("#some-template").html();
  var template = Handlebars.compile(source);
  var data = { users: [
      {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
      {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
      {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
    ]};
  $("#content-placeholder").html(template(data));
    */
  /*var options = {
        'users':[
            {
                'name':'BMW',
                'jobTitle':'I am a car'
            },{
                'name':'Merc',
                'jobTitle':'I am a car too'
            }
        ]
    };
    var productDom = Handlebars.templates['products.hbs'](options);
    $('body').append(productDom);*/
  
    
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
    $('.banks-check-block ul').append(walletDom);
    
    
  

});