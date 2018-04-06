function renderRtgs(paymentTabId) {
    renderrtgsTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindRtgsEvent();
}

function bindRtgsEvent() {
    floatLabels();
    UTRValidation();
}


function renderrtgsTemplate(){
	var rtgsData = {
		dataTabType:'rtgs',
		cardsClass: 'rtgs-tab',
    };
    var rtgsTabTemplate = Payments.templates.rtgs_neft(rtgsData);
    $('.tab-container').append(rtgsTabTemplate);
}


function UTRValidation(){
    $(document).on('keyup blur','.utr-validation', function(e) {	
        if($('.utr-validation').val().length < 16){
            $(this).parents('.formDom').addClass('errorvalue');
        }else{
            $(this).parents('.formDom').removeClass('errorvalue');
        }
    });
}