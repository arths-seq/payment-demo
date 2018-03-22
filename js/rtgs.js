function renderRtgs(paymentTabId) {
    var rtgsTabTemplate = Payments.templates.rtgs_neft();
    $('.tab-container').append(rtgsTabTemplate);
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindRtgsEvent();
}


function bindRtgsEvent() {
    
}

