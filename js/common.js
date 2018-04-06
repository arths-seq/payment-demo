var isMobileValidated = false;
isEmailValidated = false;
isPwdValidated = false;
isConPwdValidated = false;
isNameValidated = false;

isCardValidated = false;
isCvvValidated = false;
isExpDateValidated =false;
isExpDateNotValidated = false;

isPanValidated = false;
isAadharValidated = false;

isCardNameValidated = false;

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 767;;
}

function floatLabels() {
    $(".form-control").on('focusout', function () {
        
        $(this).parents('.formDom').removeClass("focused");
           if ($(this).val() != "") {
               $(this).parents('.formDom').addClass("has-content");             
        } else {
            $(this).parents('.formDom').removeClass("has-content");            
        }
    });
    $('.form-control').on('focus', function () {
        $(this).parents('.formDom').addClass("focused");
    });
};  

$(window).resize(function () {
    if (isMobile()) {
        $('body').addClass('mobile');
        $('.blockMain[data="tabs-1"]').hide();
        $('.menuli:first-child').removeClass('active');
     } else {
        $('body').removeClass('mobile');
    }
});

// mobile number validation
function mobileNum() {
    $(document).on('keyup blur change', '.mobnumns', function(e) {
        var mobile = $(this);				
        var mobRegExpr = /^[6-9]{1}[0-9]{9}$/;
        if (mobile.val().length > 9 && mobRegExpr.test(mobile.val())) {
			$(this).parents('.formDom').removeClass('errorvalue');
			isMobileValidated = true;
        } else {
			$(this).parents('.formDom').addClass('errorvalue');
			isMobileValidated = false;
        }
    });
}
// Email validation
function emailValidation(){
	$(document).on('keyup blur change', '.emailV', function (e) {			
		var sEmail = $(this).val();
		if ($.trim(sEmail).length == 0) {
			//alert('Please enter valid email address');
			$(this).parents('.formDom').addClass('errorvalue');
			isEmailValidated = false;
			return false;
		}
		if (validateEmail(sEmail)) {
			$(this).parents('.formDom').removeClass('errorvalue');
			isEmailValidated = true;
		}
		else {
			$(this).parents('.formDom').addClass('errorvalue');
			isEmailValidated = false;
			return false;
		}
	});
	function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail)) {
			return true;
		}
		else {
			return false;
		}
	}
};
// password validation 
function passwordValidation(){
	$(document).on('keyup','.newPassword', function() {
		var password = $(this).val();
		var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/g;
		if(password.length > 7 && passReg.test(password)){
			$(this).parents('.formDom').removeClass('errorvalue');
			isPwdValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isPwdValidated = false;
		}
	});
	$(document).on('focusout','.confirmPassword', function() {
		var password = $('.newPassword').val();
		var confirmPass = $('.confirmPassword').val();
		if(password === confirmPass){
			$(this).parents('.formDom').removeClass('errorvalue');
			isConPwdValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isConPwdValidated = false;
		}
	});
};
// first name last name
function nameValidation(){
	$(document).on('keyup blur change', '.first-name, .last-name', function (e) {
		var yourInput = $(this).val();
		if(globalRegex1.test(yourInput)){
			var no_spl_char = yourInput.replace(globalRegex1, ' ');
			$(this).val(no_spl_char);
			isNameValidated = false;
		}
		if(yourInput.length > 2 ) {			
			$(this).parents('.formDom').removeClass('errorvalue');
			isNameValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isNameValidated = false;
		}
	});
}

// global Regex
// allow number
var globalRegex1 = /[ÃƒÂ·!"#$%&'()*+,-.\/;\:<=>?@[\]^_`ÃƒÂ¥{|}~Ã¢â€šÂ¬Ã¢â‚¬Å¡Ã¢â‚¬Å¾Ã¢â‚¬Â¦Ã¢â‚¬Â Ã¢â‚¬Â¡Ã‹â€ Ã¢â‚¬Â°Ã…Â Ã¢â‚¬Â¹Ã…â€™Ã…Â½Ã¢â‚¬ËœÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬Â¢Ã¢â‚¬â€œÃ‹Å“Ã¢â€žÂ¢Ã…Â¡Ã¢â‚¬ÂºÃ…â€œÃ…Â¾Ã…Â¸Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚Â«Ã‚Â¬-Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿Ãƒâ€”ÃƒËœÃƒÂ·????0-9\\\/]/gi;
// allow alphabets 
var globalRegex2 = /[ÃƒÂ·!"#$%&'()*+,-.\/;\:<=>?@[\]^_`ÃƒÂ¥{|}~Ã¢â€šÂ¬Ã¢â‚¬Å¡Ã¢â‚¬Å¾Ã¢â‚¬Â¦Ã¢â‚¬Â Ã¢â‚¬Â¡Ã‹â€ Ã¢â‚¬Â°Ã…Â Ã¢â‚¬Â¹Ã…â€™Ã…Â½Ã¢â‚¬ËœÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬Â¢Ã¢â‚¬â€œÃ‹Å“Ã¢â€žÂ¢Ã…Â¡Ã¢â‚¬ÂºÃ…â€œÃ…Â¾Ã…Â¸Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚Â«Ã‚Â¬-Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿Ãƒâ€”ÃƒËœÃƒÂ·????a-zA-Z\\\/]/gi;

// Special Characters
function specialCharactersValidation(){
    $(document).on('keyup blur', '.cvv, .mobnumns, .cash_pincode, .paylater-otp, .epay-aadhar', function (e) {
        var yourInput = $(this).val(),
            globalRegex = globalRegex2;
            
        if (globalRegex.test(yourInput)) {
            var no_spl_char = yourInput.replace(globalRegex, '');
            $(this).val(no_spl_char);
        }		
    });
}
// Modal popup
function modalPopup() {
	// open popup
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		setTime();
		e.preventDefault();
	});
	// close popup
	$('.cls-popup').on('click', function () {
        clearInterval(stimer);
        $(".popupWrap").fadeOut();
        $('.timer').text(" ");
	});
}

// set timeout
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
};
function setTime(){
	var fiveMinutes = 60 * 5,
            display = $('.timer');
        setTimeout(function(){
            startTimer(fiveMinutes, display);
        }, 500);
}

// credit or debit card validation

function cardNameNumVal(){
	cardNumberUpdate();
	//card name validation
	var validationRegex = new RegExp("^[a-zA-Z0-9 ]+$");
	bindCardNameNumEvent(validationRegex,'cardname');
}

function bindCardNameNumEvent(validationRegex,className){
	$(document).on('keypress','.' + className, function(e) {
		var currentCursorPosition = this.selectionStart;
		var key = String
				.fromCharCode(!event.charCode ? event.which
						: event.charCode);
		var keycode = event.keyCode;
		var spaceCharCode = event.charCode;
		if (spaceCharCode == "32") {
			// for space
			var nameOnCard = $('.'+className).val();
			// if last character for nameOnCard is space dont
			// allow else allow.
			var lastChar = nameOnCard
					.charAt(currentCursorPosition - 1);
			if (lastChar == " ") {
				event.preventDefault();
				return false;
			}
		}
		switch (keycode) {
		case 8: // Backspace
		case 9: // Tab
		case 13: // Enter
		case 37: // Left
		case 38: // Up
		case 39: // Right
		case 40: // Down
			break;
		default:
			var key = event.key;
			if (!validationRegex.test(key)) {
				event.preventDefault();
				return false;
			}
			break;
		}
	});
}

// card number validation
function cardNumberUpdate() {
	function removeErrorDisplay(errorID, messageID) {
		$("#" + errorID).css('border', '1px solid #becfd6');
		$("#" + messageID).removeClass("display");
		$("#" + messageID).html('');
	}
	
	$(document).on('keyup blur change','.cardNumber', function(e) {	
			var ele = $(this);
			//var cardtype = ele.data('cardtype');
			var e = ele.val().split(" ").join("");
			if (e == "") {
				$('.cvv').val('');
				$('.cvv').parents('.formDom').removeClass("has-content"); 
				// emi plan if card number is null 
				$('.emi-Check').attr('checked', false); 
				$('.view-plans').hide();
				$('.radioname').hide();
				$('.emi-change').hide();		
				$('.view-plans-box').removeClass('active');
				isCvvValidated = false;
				$('.amexcvv-help').hide();

				ele.removeClass (function (index, className) {
					return (className.match (/\w*-icon\w*/) || []).join(' ');
					
				});
				ele.addClass(ct+"-icon");
			} else {
				removeErrorDisplay('c1', 'cnumspan');
				e = e.match(new RegExp(".{1,4}", "g")).join(" ");
				ele.val(e);
				var r = get_card_type(e);
				var i = r.split('_');
				var ct = i[1].toLowerCase();;
				ele.removeClass (function (index, className) {
					return (className.match (/\w*-icon\w*/) || []).join(' ');
					
				});				
				ele.addClass(ct+"-icon");
			}

		var cardnumber = $(this);
		if(cardnumber.val().length > 22){
			$(this).parents('.formDom').removeClass('errorvalue');
			//$('.emi-Check').removeAttr('disabled');
			$('.emi-Check').prop("disabled", false);
			$(this).attr('data-rule-required' , 'true');
			isCardValidated = true;
		}else{
			$('.emi-Check').attr('disabled');
			$('.emi-Check').prop("disabled", true);
			$(this).parents('.formDom').addClass('errorvalue');	
			$(this).attr('data-rule-required' , 'false');		
			isCardValidated = false;
		}
	});
	
	// card number validation
	validationRegex =  new RegExp("^[0-9]+$");
	bindCardNameNumEvent(validationRegex,'cardNumber');

	function get_card_type(number) {
		number = number.replace(/ /g, '');
		var prefix_ret = match_prefix(number);
		if (prefix_ret != false) {
			return prefix_ret;
		}
	}
	function match_prefix(card_number) {
		var card_prefix;
		card_prefix = {
			"CC_AMEX": [34, 37],
			"CC_DINERSCLUB": [300, 301, 302, 303, 304, 305, 36, 38],
			"CC_DISCOVER": [6011],
			"CC_JCB": [3, 1800, 2131],
			"CC_MASTERCARD": [51, 52, 53, 54, 55],
			"CC_VISA": [4],
			"CC_RUPAY": [5085, 5086, 5087, 5088, 5089, 6061, 6062, 6063, 6064, 6065, 6066, 6067, 6068, 6069, 607, 6080, 6081, 6082, 6083, 6084, 6085, 65215, 6522, 6523, 6524, 6525, 6526, 6527, 6528, 6530, 6531,6521],
			"CC_MAESTRO": [622018, 600206, 504435, 504775, 504645, 603845, 504809, 504993, 504774, 502165, 502260, 504433, 504434, 504437, 504681, 504753, 504817, 504834, 504848, 504884, 504973, 508125, 508126, 508159, 603123, 603741,5010, 5011, 5012, 5013, 5014, 5015, 5016, 5017, 5018, 502, 503, 504, 505, 506, 507, 508, 6012, 6013, 6014, 6015, 6016, 6017, 6018, 6019, 602, 603, 604, 605, 6060, 677, 675, 674, 673, 672, 671, 670, 6760, 6761, 6762, 6763, 6764, 6765, 6766, 6768, 6769, 581, 600, 622],
		};
		for (var index in card_prefix)
			for (var index1 in card_prefix[index]) {
				var pattern = card_prefix[index][index1];
				var a = card_number.substring(0, pattern.toString().length);
				if (a == pattern) {
					return (index);
				}
			}
		return "CC_UNKNOWN";
	};
}

// expiry Date validation
function expiryDateValidation() {
	$('.exp_date').on("keyup", function(e) {	
		var validKeysTxtDate = ['1','2','3','4','5','6','7','8','9','0'];
		var appendZeroTxtDate = ['2','3','4','5','6','7','8','9'];
		var ZeroOrOneOrTwo=['0','1','2'];
		//alert("KeyUp:"+e.which);
		if(e.which==8){
			//allow backspace
			return;
		}				
		//Get the textbox current value
		var txtDateValue = $(this).val();
		if(txtDateValue.length>5 || (txtDateValue.length==5 && (txtDateValue.indexOf('/') == -1))){
			txtDateValue="";
		}
		//alert("Text entered length:"+ txtDateValue.length);
		//The Character is already in the textbox
		//Get the Key value which was pressed
		var keypressed = txtDateValue.charAt(txtDateValue.length -1);
				
		//Remove last typed character from textbox
		$(this).val(txtDateValue.substring(0,(txtDateValue.length -1)));
				
		//Get the textbox value again
		txtDateValue = $(this).val();
				
		if($.inArray(keypressed,validKeysTxtDate) == -1){
			//Not found in Valid Keys list for this Textbox
			e.preventDefault();
			return;
		} 
		//alert("Key Pressed:"+keypressed);
		//Only Valid Keys reach this point
		//...
				
		//Append '/' in case we are in MM section and entering 2nd digit
		if(txtDateValue.length==0){
			//alert("text length is 0");

			//Current Length of data is 0, after this keypress, it will be either 1 or 2
			if($.inArray(keypressed,appendZeroTxtDate) == -1){
				//alert("Text Length 0: Dont Append Zero");
				//Not found Append Zero list for this Textbox
				$(this).val(keypressed);
				//alert("Text Length 0: Put Key in Text Box");
				e.preventDefault();
				//alert("Text Length 0: Prevented Default");
				return;
			}else{
				//alert("Text Length 0: Append Zero");

				//Found in Append Zero List, move to YY section
				$(this).val("0"+ keypressed + "/");	
				e.preventDefault();
				return;
			}						
		}
		//Append '/' in case we are in MM section and entering 2nd digit
		if(txtDateValue.length==1){
			//alert("text length is 1");
			//Current Length of data is 1, after this keypress, it will be 2
			if(txtDateValue==1){
					//Accept only 0,1 or 2
					if($.inArray(keypressed,ZeroOrOneOrTwo)== -1){
						//Key pressed was not 0,1 or 2
						e.preventDefault();
						return;
					}
			}else if(txtDateValue==0){
				if(keypressed==0){
					//Do not accept 0 here
					e.preventDefault();
					return;
				}
			}else{
				//Should not come here.
				e.preventDefault();
				return;
			}
				//alert("appending /");
				//Append the Key pressed in MM
				$(this).val(txtDateValue+ keypressed + "/");	
				e.preventDefault();
				return;
		}
				
		//Append '/' in case we are in MM section and entering 3rd digit
		if(txtDateValue.length==2){
			//Current Length of data is 2, after this keypress, it will be 3
			//alert("text length is 2");
			if(parseInt(txtDateValue)>12 || parseInt(txtDateValue)==0){
				txtDateValue="";
				$(this).val(txtDateValue);
				return;
			}else{
				$(this).val(txtDateValue + "/"+ keypressed);
					e.preventDefault();
					return;
			}
		} 
		//Append '/' in case we are in MM section and entering 3rd digit
		if(txtDateValue.length==5){ 
			e.preventDefault();
			return;
		} 
		//We are in YY Section
		$(this).val(txtDateValue+ keypressed);	
			e.preventDefault();
			return;	
	});
	function expYearVal(){
		var expdate = $('.exp_date:visible').val();
	   var cardExp = expdate.split("/");
		if(cardExp.length < 2){
			// if exp date is 2 digit
		}else{ 
			var expMonth = cardExp[0].trim();
			var expYear = cardExp[1].trim();
		 	$("#exp-month").val(expMonth);
			 $("#exp-year").val('20'+expYear);
			 
			if(expYear.length < 2 || expMonth.length < 2  || !validateExpDate(expYear, expMonth)){
				$('.exp_date:visible').parents('.formDom').addClass('errorvalue');
				$(this).attr('data-rule-required' , 'false');
				isExpDateNotValidated = false;
			}else{
				$(this).attr('data-rule-required' , 'true');
				isExpDateNotValidated = true;
			}
		}
	};
	function validateExpDate(expiryYear, expiryMonth) {
		//24454: prevent invalid month being passed to backend.
		if(expiryMonth>12 || expiryMonth<1){
			return false;
		}
 		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() +1 ;
		
 		var selDate = new Date('20'+expiryYear, expiryMonth);
 		var selYear = selDate.getFullYear();
 		var selMonth = selDate.getMonth();

		return (selYear > year || (year === selYear && selMonth >= month));
 	}
	$(document).on('keyup blur change', '.exp_date', function (e) {
		expYearVal();
		var yourInput = $(this).val();
		if(yourInput.length > 4 && isExpDateNotValidated == true){
			$(this).parents('.formDom').removeClass('errorvalue');
			$(this).attr('data-rule-required' , 'true');
			isExpDateValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			$(this).attr('data-rule-required' , 'false');
			isExpDateValidated = false;
		}
	});
	$(document).on('keyup blur change', '.cardname', function (e) {
		var yourInput = $(this).val();
		if(yourInput.length > 2){
			$(this).parents('.formDom').removeClass('errorvalue');
			$(this).attr('data-rule-required' , 'true');
			isCardNameValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			$(this).attr('data-rule-required' , 'false');
			isCardNameValidated = false;
		}
	});
};

// csv/ cvv 
function cvvValidation(){
	$('.amexcvv-help').hide();
	if (isMobile()) {
		$(".cvv").attr('type','tel');	
		$(".cvv").css('-webkit-text-security','disc');
	}
	$(document).on('keyup blur change focus', '.cvv:visible', function (e) {
		var yourInput = $(this).val();
		if ($('.cardNumber:visible').hasClass('amex-icon') && yourInput.length > 3){
			$(this).parents('.formDom').removeClass('errorvalue');
			$(this).attr('data-rule-required' , 'true');
			isCvvValidated =  true;
		}else if(!$('.cardNumber:visible').hasClass('amex-icon') && yourInput.length > 2){			
			$(this).parents('.formDom').removeClass('errorvalue');
			$(this).attr('data-rule-required' , 'true');
			isCvvValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			$(this).attr('data-rule-required' , 'false');
			isCvvValidated = false;
		}
		if ($('.cardNumber:visible').hasClass('amex-icon')){
			$('.cvv').attr('maxlength',4);
			$('.amexcvv-help').show();
		}else{
			$('.cvv').attr('maxlength',3); 
			$('.cvv-help').show();
			$('.amexcvv-help').hide();
		}
	});
};

// sign up 
function saveCardLogin (){
	$('.savedCard').hide();
	$('.existing-user').hide();
	$(document).on('click', '.save-card', function (e) {
		var subFormId = $(this).attr('data-sub-form-id');
		//var currentTab = $(event.currentTarget).find('.debit-tab').attr('data-tab-type');
		//$(this).find('.debit-tab');

		if(!$('.card-ccdc:visible .formDom  input').val() == '' && isCardNameValidated == true && isCardValidated == true && isCvvValidated == true && isExpDateValidated == true){
			if($('.save-Card-Check:visible').is(':checked')){
				$('.card-ccdc').hide();
				$('.savedCard').hide();
				$('.existing-user').show();
			}else{
				$('.card-ccdc').hide();
				$('.savedCard').show();
			}
			$(this).parents('.formDom').removeClass('errorvalue');	
		}else{
			$("input[data-rule-required!='true']").parents('.formDom').addClass('errorvalue');	
		}	
	});
};

