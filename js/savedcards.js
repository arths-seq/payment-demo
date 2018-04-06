function renderSavedCards(){
   $.ajax('./templates/saved_cards.js',{
        success: function(){
            renderSaveCardTemplate();
        }
    });   
}

function renderSaveCardTemplate(){
    var savedcardData = {
        'CardDetails': [
			{
                svdicon: 'visa',
                cardnumval: '4111 XXXX XXXX 1111',
                cardnameval: 'Purab Shah',
                cardexp: '12 / 22',
            },
            {
                svdicon: 'mastercard',
                cardnumval: '5211 XXXX XXXX 1111',
                cardnameval: 'Prajakta Bongane',
                cardexp: '11 / 20',
            },
            {
                svdicon: 'visa',
                cardnumval: '4145 XXXX XXXX 1111',
                cardnameval: 'Amol Kadam',
                cardexp: '12 / 24',
            },
            {
                svdicon: 'mastercard',
                cardnumval: '5222 XXXX XXXX 1111',
                cardnameval: 'Arthur Sequeira',
                cardexp: '07 / 20',
            }
            
            ]
    };  
    
    var savedcardsTemplate = Payments.templates.saved_cards(savedcardData);
    $('.save-card-container').append(savedcardsTemplate);
    bindSaveCardEvent();
}

function bindSaveCardEvent(){
    $(".regular").slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
     });
    cvvValidation();
    specialCharactersValidation();
}