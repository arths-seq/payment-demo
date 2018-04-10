function renderBharatqrChannel(paymentTabId){
	renderBharatqrTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindBharatqrEvents();	
}

function bindBharatqrEvents(){
    modalPopup();
    startTimer();
}

function renderBharatqrTemplate(){
	var bharatQrData = {
		dataTabType:'bharat-qr',
		cardsClass: 'bharat-qr-tab',
		genqrBtnTxt:translate('Generate QR'),
		workTx1:translate('Please use mobile application to scan the QR code'),
		workTx2:translate('Validate details and confirm payment'),
		workTx3:translate('Enter PIN, if prompted by your Bank app'),
        sessionTx:translate('Session timeout in <span class="timer"></span> minutes!'),
	};
	var bharatQrTemplate = Payments.templates.bharat_qr(bharatQrData);
    $('.tab-container').append(bharatQrTemplate);
}