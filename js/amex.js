function renderAmexChannel(paymentTabId){
	renderAmexTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCashEvents();	
}

function bindAmexEvents(){
}

function renderAmexTemplate(){
    var amexTab = Payments.templates.amex();
    $('.tab-container').append(amexTab);
}