function renderUpi(paymentTabId) {
    renderupiTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindUpiEvent();
}
function bindUpiEvent(){
    floatLabels();
    openPopupQR();
    closePopupQR();
    startTimer();
}


function renderupiTemplate(){
    var upiData = {
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

var stimer = null;

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
}

function openPopupQR() {
    $('.qr-btn').on('click', function () {
        $(".upi-popup").fadeIn();
        var fiveMinutes = 60 * 5,
            display = $('.timer');
        setTimeout(function(){
            startTimer(fiveMinutes, display);
        }, 500);
    });
}

function closePopupQR() {
    $('.cls-popup').on('click', function () {
        clearInterval(stimer);
        $(".upi-popup").fadeOut();
        $('.timer').text(" ");
    });
}