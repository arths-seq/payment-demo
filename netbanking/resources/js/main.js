$(document).ready(function(){

    var bankData = {
        'allbank':[
            {
                nbname:'ICICI Bank',
                titile:'nbicici',
                value:'icici',
                popular : true
            },{
                nbname:'HDFC Bank',
                titile:'nbhdfc',
                value:'hdfc',
                popular : true
            },{
                nbname:'Kotak Bank',
                value:'kotak',
                titile:'nbkotak' ,
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

   var options = {
    'users':[
        {
            'name':'BMW',
            'jobTitle':'I am a car',
            'class':'fcar'
        },{
            'name':'Merc',
            'jobTitle':'I am a car too'
        }
    ]
    };
    var productDom = Handlebars.templates['products.hbs'](options);
    //$('body').append(productDom);

   
});


