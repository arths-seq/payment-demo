function renderCashChannel(paymentTabId){
	var cashData = {
		cashmob: 'Mobile Number',
		cashpin: 'Pincode',
		cashlocatin: 'Deposit Locations',
		cashheCnum: 'Please enter a valid Mobile Number'
    };

    var cashTemplate = Payments.templates.cash(cashData);
	$('.tab-container').append(cashTemplate);
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCashEvents();	
}

function bindCashEvents(){
	mobileNum();
}

// mobile number validation
function mobileNum() {
		$(document).on('keyup blur', '.mobnumns', function(e) {
			var mobile = $(this);				
			var mobRegExpr = /^[6-9]{1}[0-9]{9}$/;
			if (mobile.val().length > 9 && mobRegExpr.test(mobile.val())) {
				$(this).removeClass('errorvalue');
			} else {
				$(this).addClass('errorvalue');
			}
		});
}