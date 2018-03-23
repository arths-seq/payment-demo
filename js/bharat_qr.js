function renderBharatqrChannel(paymentTabId){
	renderBharatqrTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindBharatqrEvents();	
}

function bindBharatqrEvents(){
    $('.bharat-qr-popup').hide();
    $('.bharat-qr-submit').on('click',generateBharatqrPopup);
}

function generateBharatqrPopup(){
    $('.bharat-qr-popup').show();
}

function renderBharatqrTemplate(){
	var bharatQr = Payments.templates.bharat_qr();
    $('.tab-container').append(bharatQr);
}