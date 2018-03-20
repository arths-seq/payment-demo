function renderEmiChannel(paymentTabId){
    renderEmiTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindEmiEvent();
}

function renderEmiTemplate(){

}

function bindEmiEvent(){
    
}