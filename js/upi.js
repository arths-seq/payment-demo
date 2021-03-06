function renderUpi(paymentTabId) {
    renderupiTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindUpiEvent();
}
function bindUpiEvent(){
    floatLabels();
    modalPopup();
    startTimer();
    upiValidation();
    floatLabels();
}

function renderupiTemplate(){    
    var upiData = {
        dataTabType:'UPI',
		cardsClass: 'upi-tab',
        sumbitBtnTxt:translate('Submit'),
        upiNote:translate('Pay using VPA or Scan QR code and pay'),
        upiaddLabel:translate('Enter UPI address'),
        upiaddHelp:translate('Please enter vpa'),
        genQRcode:translate('Generate QR code'),
        orTxt:translate('OR'),
        titleQRcode:translate('Scan the QR Code'),
        qrpupTx1:translate('To complete your online payment please follow the steps'),
        sessionTx:translate('Session timeout in <span class="timer"></span> minutes!'),
        stepTx1:translate('Login into your PSP application'),
        stepTx2:translate('Authorise your payment')
    };  
    var upiTemplate = Payments.templates.upi_vpa(upiData);
    $('.tab-container').append(upiTemplate);
}

/*var stimer = null;

function startTimer(duration, display) {
    var timer = duration,
        minutes = 0,
        seconds = 0;
    stimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $(display).text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}*/


// UPI validation
function upiValidation(){
    $(document).ready(function(e) {
        $(document).on('focusout', '.upi-validation', function (e) { 
            var upiValidation = $('.upi-validation').val();
            var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\[0-9]{1,3}\[0-9]{1,3}\.)|(([\w-])+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if ($.trim(upiValidation).length == 0) {
                $(this).parents('.formDom').addClass('errorvalue');
                return false;
            }
            if (filter.test(upiValidation)) {
                $(this).parents('.formDom').removeClass('errorvalue');
            }
            else {
                $(this).parents('.formDom').addClass('errorvalue');
                return false;
            }
        });
    });
};