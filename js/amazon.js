function renderAmazonChannel(paymentTabId) {
    renderAmazonTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindAmazonEvents();
}

function bindAmazonEvents() {}

function renderAmazonTemplate() {
    var amazonData = {
        sumbitBtnTxt: translate('Submit'),
        amazonphara: translate('The trusted & convinient way to pay')
    };
    var amazonTemplate = Payments.templates.amazonpay(amazonData);
    $('.tab-container').append(amazonTemplate);
}