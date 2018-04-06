function renderAmexChannel(paymentTabId){
	renderAmexTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCashEvents();	
}

function bindAmexEvents(){
}

function renderAmexTemplate(){
	var amexData = {
		dataTabType:'Amex-click',
		cardsClass: 'amex-tab',
		sumbitBtnTxt:translate('Submit'),
		amexphara:translate('One ID is all it takes. Exclusively for American Express Cardmembers')
	};
    var amexTemplate = Payments.templates.amex(amexData);
    $('.tab-container').append(amexTemplate);
}