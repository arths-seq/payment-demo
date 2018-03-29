function renderUpi(paymentTabId) {
    var upi = Payments.templates.upi_vpa();
    $('.tab-container').append(upi);
    $('.blockMain').hide();
    $('[data-tab-type="' + paymentTabId + '"]').show();
    bindUpiEvent();
}


function bindUpiEvent() {
    startTimer();
    openPopup();
    closePopup();
    floatLabels();
    upiValidation();
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

function openPopup() {
    $('.qr-btn').on('click', function () {
        $(".upi-popup").fadeIn();
        var fiveMinutes = 60 * 5,
            display = $('.timer');
        setTimeout(function(){
            startTimer(fiveMinutes, display);
        }, 500);
    });
}

function closePopup() {
    $('.cls-popup').on('click', function () {
        clearInterval(stimer);
        $(".upi-popup").fadeOut();
        $('.timer').text(" ");
    });
};

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