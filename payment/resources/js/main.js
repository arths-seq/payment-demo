$(document).ready(function(){

   

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
                titile:'nbkotak',
                popular : true
            },{
                nbname:'Axis Bank',
                value:'axis',
                titile:'nbaxis',
                popular : true
            },{
                nbname:'SBI Bank',
                value:'sbi',
                titile:'nbsbi',
                popular : true
            },{
                nbname:'Bank of Maharashtra',
                value:'bom',
                titile:'nbbom',
                popular : true
            }
        ]
    };
    
    var nbankli = Handlebars.templates['netbanking.hbs'](bankData);
    $('.tab-container').append(nbankli);


     var walletData = {
        'allWallet':[
            {
                walletname:'Amazon Pay',
                value:'amazon',
                titile:'amazon'
            },{
                walletname:'Citrus Wallet',
                value:'citrus',
                titile:'citrus'
            },{
                walletname:'Freecharge',
                value:'freecharge',
                titile:'freecharge'
            },{
                walletname:'HDFC PayZapp',
                value:'payzap',
                titile:'payzap'
            },{
                walletname:'JioMoney',
                value:'jio',
                titile:'jio'
            },{
                walletname:'Ola Money',
                value:'ola',
                titile:'ola'
            },{
                walletname:'PayU',
                value:'payu',
                titile:'payu'
            },{
                walletname:'Paytm',
                value:'paytm',
                titile:'paytm'
            },{
                walletname:'Oxigen Wallet',
                value:'oxygen',
                titile:'oxygen'
            },{
                walletname:'Quik wallet',
                value:'quick',
                titile:'quick'
            },{
                walletname:'SBI Buddy',
                value:'sbud',
                titile:'sbibuddy'
            },{
                walletname:'Money On Mobile',
                value:'money',
                titile:'money'
            },{
                walletname:'MobiKwik',
                value:'mobikwik',
                titile:'mobikwik'
            },{
                walletname:'Itz Cash',
                value:'itzcash',
                titile:'itzcash'
            },{
                walletname:'sodexo',
                value:'sodexo',
                titile:'sodexo'
            }
        ]
    };
    
    var walletkli = Handlebars.templates['wallet.hbs'](walletData);
    $('.tab-container').append(walletkli);




    var cardData = {
        isEmiTab: false,
        showSavedCard: true,
        savedCard: false,
        blockName:'blockCards',
        cnLabel:'Card Number',
        cxLabel:'Card Exp Date',
        chnLabel:'Card Holder Name',
        cvvLabel:'CSV / CVV',
        saveMob:'Mobile Number',
        saveEmail:'Enter your E-mail Id',
        savePass:'Enter your Password',
        confirmPass:'Re enter Password',
        iconCard:'iCard',
        iconCname:'iNameCard',
        iconCVV:'iCVV',
        iconMob:'iMob',
        iconEmail:'iEmail',
        iconUser:'iUser',
        iconPass:'iPass',
        heCnum:'Please enter a valid card number',
        heChold:'Please enter name on your card',
        heCVV:'Its a 3 digit code printed on the back of your card',
        savetx:'Save card now to enable express payments',
        'cardEmiBank':[
             {
                nbname:'ICICI Bank',
                value:'icici',
                titile:'nbicici',
                cardEmi : true
            },{
                nbname:'HDFC Bank',
                value:'hdfc',
                titile:'nbhdfc',
                cardEmi : true
            },{
                nbname:'Kotak Bank',
                value:'kotak',
                titile:'nbkotak',
                cardEmi:false
            },{
                nbname:'Axis Bank',
                value:'axis',
                titile:'nbaxis',
                cardEmi : true
            },{
                nbname:'SBI Bank',
                value:'sbi',
                titile:'nbsbi',
                cardEmi:false
            }

        ],
       'emiTable':[
            {
                emiTenure:'0 months',
                bankRate:'12%',
                installments:'Rs. 0',
                interestPaid:'Rs. 0'
            },
            {
                emiTenure:'3 months',
                bankRate:'12%',
                installments:'Rs. 55',
                interestPaid:'Rs. 20'
            },
            {
                emiTenure:'6 months',
                bankRate:'12%',
                installments:'Rs. 5,100',
                interestPaid:'Rs. 301'
            }
        ]
    };
    var cards = Handlebars.templates['cards.hbs'](cardData);
    $('.tab-container').append(cards);
   
    $(".form-control").on('focusout', function () {
        $(this).parents('.formDom').removeClass("focused");
        if($(this).val() != ""){
             $(this).parents('.formDom').addClass("has-content");
        }else{
             $(this).parents('.formDom').removeClass("has-content");
        }
    });

    $('.form-control').on('focus', function () {
            $(this).parents('.formDom').addClass("focused");
    });


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


