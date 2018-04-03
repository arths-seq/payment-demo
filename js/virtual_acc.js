function renderVirtual(paymentTabId){
	renderVirtualTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindVirtualAccEvent();
};
function bindVirtualAccEvent(){
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
		vaifscTx:translate('IFSC code'),
		vaBankTx:translate('Bank'),
		vaBranchTx:translate('Branch'),
		vaBankAddTx:translate('Bank Address'),
		vaifscCode:translate('KKBK0000958'),
		vaBankCode:translate('Kotak Mahindra Bank'),
		vaBranchCode:translate('Nariman Point'),
		vaBankAddCode:translate('5 C/II MITTAL COURT, 224, NARIMAN POINT, MUMBAI-400021'),
	};	
    var virtualTemplate = Payments.templates.virtual_acc(virtualAccData);
    $('.tab-container').append(virtualTemplate);
}

function bindVirtualAccEvent(){
	$(document).on('click','.virtual-acc-details', function(e) {
		$('.block-info').hide();
		$('.block-va-acc').show();
	});
}