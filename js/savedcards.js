function renderSavedCards(){
   $.ajax('./templates/saved_cards.js',{
        success: function(){
            renderSaveCardTemplate();
        }
    });   
}

function renderSaveCardTemplate(){
    var savedcardsTemplate = Payments.templates.saved_cards();
    $('.save-card-container').append(savedcardsTemplate);
}