function renderRtgs(paymentTabId) {
    var rtgsTabTemplate = Payments.templates.rtgs_neft();
    $('.tab-container').append(rtgsTabTemplate);
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindRtgsEvent();
}

function bindRtgsEvent() {
    floatLabels();
    UTRValidation();
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