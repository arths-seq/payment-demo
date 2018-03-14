
var languageJson;
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
            jsonFileName = 'mr.json';
            break;
    }

    languageJson = JSON.parse(localStorage.getItem(currentLang+'-payment'));
    if(!languageJson){
        $.ajax('./language/'+jsonFileName,{
            success: $.proxy(function(currentLang,data){
                languageJson = JSON.parse(data);
                localStorage.setItem(currentLang+'-payment',data);
                //render(); --- to be called from here
            },this,currentLang)
        });
    } else {
        //render(); --- to be called from here
    }
}

function translate(translationText){
    return  languageJson[translationText] || translationText;     
}

$(document).ready(function(){
    console.log('Hi we are in!!!');
    loadTranslateJson();
});

// ---- Ref Only -----

// function getCCDCTemplate (){
//     return Payments.templates.cards({
//         'CreditCardText': translate('Credit Card')  
//     })
// } 

// function renderCCDC(){
//     var ccdcHtml = getCCDCTemplate();
//     $('.payments-container').append(ccdcHtml);
//     bindCCDCEvents();
// }

// function bindCCDCEvents(){
//     $('.cred').keyup(function(){

//     });
//    bindXyzEvent();
// }

// function bindXyzEvent(){
//     $('.cred').on('click',function(){

//     });

// }