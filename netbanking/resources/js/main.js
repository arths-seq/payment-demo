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
    $('.tab-container').html(nbankli);

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
    $('.tab-container').html(cards);
   

   
});


