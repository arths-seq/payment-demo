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
	var bharatQrData = {
		genqrBtnTxt:translate('Generate QR'),
		workTx1:translate('Please use mobile application to scan the QR code'),
		workTx2:translate('Validate details and confirm payment'),
		workTx3:translate('Enter PIN, if prompted by your Bank app'),
        sessionTx:translate('Session timeout in <span class="timer"></span> minutes!'),
	};
	var bharatQrTemplate = Payments.templates.bharat_qr(bharatQrData);
    $('.tab-container').append(bharatQrTemplate);
}