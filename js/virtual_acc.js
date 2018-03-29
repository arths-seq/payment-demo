function rendervirtual(paymentTabId){
	renderVirtualTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindEpayEvent();
};
function bindEpayEvent(){
	floatLabels();
}

function renderVirtualTemplate(){
	var virtualAccData = {
		sumbitBtnTxt:translate('Submit'),
		vainfoTitle:translate('VirtualAcc Info'),
		vablockPara:translate('A bank account is being assigned exclusively to you for this transaction. <br>Kindly do NOT share it with anyone or do more than one transaction to this account. <br>Please click on "Submit" to get the account details. '),
		vablockPara1:translate('The Account Details for this transaction is as below'),
		vablockPara2:translate('This account is exclusively assigned to you for this transaction, please do NOT share with anyone or do more than 1 transaction to this account.'),
		vaAccTx:translate('Account no'),
		vaIFSCtx:translate('IFSC code'),
		vaBankTx:translate('Bank'),
		vaBraTx:translate('Branch'),
		vaBaAddTx:translate('Bank Address')
	};	
    var virtualTemplate = Payments.templates.virtual_acc(virtualAccData);
    $('.tab-container').append(virtualTemplate);
}
