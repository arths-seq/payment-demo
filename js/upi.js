function renderUpi(paymentTabId) {
    var upi = Payments.templates.upi_vpa();
    $('.tab-container').append(upi);
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindUpiEvent();
}


function bindUpiEvent() {
    startTimer();
    openPopupQR();
    closePopupQR();
    floatLabels();
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
    $('.qr-link').on('click', function () {
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