// all function validation 

function renderCcDc(paymentTabId){
	renderCcDcTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCcDcEvent();
}

function bindCcDcEvent(){
	specialCharactersValidation();
	cvvValidation();
	expiryDateValidation();
	cardNameNumVal();
	floatLabels();
	emailValidation();
	passwordValidation();
	saveCardLogin();
	ccdcGoBack();
	emiValidation();
	mobileNum();
}

function renderCcDcTemplate(){
	var cardData = {
		dataTabType:'credit-debit',
		cardsClass: 'credit-debit-tab',
        isEmiTab: false,
		showSavedCard: true,
		existingUser: true,
		showEmiCheck: true,
        savedCard: true,
        blockName: 'blockCards',
        cnLabel: translate('Card Number'),
        cxLabel: translate('Card Exp Date'),
        chnLabel: translate('Card Holder Name'),
        cvvLabel: translate('CSV / CVV'),
        saveMob: 'Mobile Number',
        saveEmail: 'Enter your E-mail Id',
        savePass: 'Enter your Password',
        confirmPass: 'Re enter Password',
        iconCard: 'iCard',
        iconCname: 'iNameCard',
        iconCVV: 'iCVV',
        iconMob: 'iMob',
        iconEmail: 'iEmail',
        iconUser: 'iUser',
        iconPass: 'iPass',
        heCnum: translate('Please enter a valid card number'),
        heChold: translate('Please enter name on your card'),
        heCVV: translate('Its a 3 digit code printed on the back of your card'),
		savetx: translate('Save card now to enable express payments'),
		emiCheck: translate('Pay with EMI'),
		emiPlans: translate('View Plans'),
		emiPlansChange: translate('Change Plan'),
		submitBtnTxt: translate('Submit'),
        'cardEmiBank': [
			{
                nbname: 'Select Bank',
                value: 'selectbank',
                titile: 'selectbank',
                cardEmi: true
            },
            {
                nbname: 'ICICI Bank',
                value: 'icici',
                titile: 'nbicici',
                cardEmi: true
            }, {
                nbname: 'HDFC Bank',
                value: 'hdfc',
                titile: 'nbhdfc',
                cardEmi: true
            }, {
                nbname: 'Kotak Bank',
                value: 'kotak',
                titile: 'nbkotak',
                cardEmi: false
            }, {
                nbname: 'Axis Bank',
                value: 'axis',
                titile: 'nbaxis',
                cardEmi: true
            }, {
                nbname: 'SBI Bank',
                value: 'sbi',
                titile: 'nbsbi',
                cardEmi: false
            }

        ],
        'emiTable': [
            {
                emiTenure: '0 months',
                bankRate: '12%',
                installments: 'Rs. 0',
				interestPaid: 'Rs. 0',
				totalAmount: '1200',
				bankname: '12'
            },
            {
                emiTenure: '3 months',
                bankRate: '12%',
                installments: 'Rs. 55',
				interestPaid: 'Rs. 20',
				totalAmount: '10200',
				bankname: '34'
            },
            {
                emiTenure: '6 months',
                bankRate: '12%',
                installments: 'Rs. 5,100',
				interestPaid: 'Rs. 301',
				totalAmount: '20200',
				bankname: '56'
            }
		]
    };
    var cards = Payments.templates.cards(cardData);
	$('.tab-container').append(cards);
}

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
			isCardValidated = true;
		}else{
			$('.emi-Check').attr('disabled');
			$('.emi-Check').prop("disabled", true);
			$(this).parents('.formDom').addClass('errorvalue');			
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
		var txtDateValue = $('.exp_date').val();
		if(txtDateValue.length>5 || (txtDateValue.length==5 && (txtDateValue.indexOf('/') == -1))){
			txtDateValue="";
		}
		//alert("Text entered length:"+ txtDateValue.length);
		//The Character is already in the textbox
		//Get the Key value which was pressed
		var keypressed = txtDateValue.charAt(txtDateValue.length -1);
				
		//Remove last typed character from textbox
		$('.exp_date').val(txtDateValue.substring(0,(txtDateValue.length -1)));
				
		//Get the textbox value again
		txtDateValue = $('.exp_date').val();
				
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
				$('.exp_date').val(keypressed);
				//alert("Text Length 0: Put Key in Text Box");
				e.preventDefault();
				//alert("Text Length 0: Prevented Default");
				return;
			}else{
				//alert("Text Length 0: Append Zero");

				//Found in Append Zero List, move to YY section
				$('.exp_date').val("0"+ keypressed + "/");	
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
				$('.exp_date').val(txtDateValue+ keypressed + "/");	
				e.preventDefault();
				return;
		}
				
		//Append '/' in case we are in MM section and entering 3rd digit
		if(txtDateValue.length==2){
			//Current Length of data is 2, after this keypress, it will be 3
			//alert("text length is 2");
			if(parseInt(txtDateValue)>12 || parseInt(txtDateValue)==0){
				txtDateValue="";
				$('.exp_date').val(txtDateValue);
				return;
			}else{
				$('.exp_date').val(txtDateValue + "/"+ keypressed);
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
		$('.exp_date').val(txtDateValue+ keypressed);	
			e.preventDefault();
			return;									
	});

	$(document).on('keyup blur change', '.exp_date', function (e) {
		var yourInput = $(this).val();
		if(yourInput.length > 4){
			$(this).parents('.formDom').removeClass('errorvalue');
			isExpDateValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isExpDateValidated = false;
		}
	});
	$(document).on('keyup blur change', '.cardname', function (e) {
		var yourInput = $(this).val();
		if(yourInput.length > 2){
			$(this).parents('.formDom').removeClass('errorvalue');
			isCardNameValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isCardNameValidated = false;
		}
	});
};

// csv/ cvv
function cvvValidation(){
	if (isMobile()) {
		$(".cvv").attr('type','tel');	
		$(".cvv").css('-webkit-text-security','disc');
	}
	$(document).on('keyup blur change', '.cvv', function (e) {
		var yourInput = $(this).val();
		if ($('.cardNumber').hasClass('amex') && yourInput.length > 3){
			$(this).parents('.formDom').removeClass('errorvalue');
			isCvvValidated =  true;
		}else if(!$('.cardNumber').hasClass('amex') && yourInput.length > 2){
			$(this).parents('.formDom').removeClass('errorvalue');
			isCvvValidated = true;
		}else{
			$(this).parents('.formDom').addClass('errorvalue');
			isCvvValidated = false;
		}
	});	
	$(document).on('focus', '.cvv', function (e) {
		$('.cardNumber').hasClass('amex-icon') == true ? $('.cvv').attr('maxlength',4) : $('.cvv').attr('maxlength',3);
	});
};
// go back
function ccdcGoBack(){
	$(document).on('click', '.ccdc-goback', function (e) {
		$('.card-ccdc').show();
		$('.savedCard').hide();
		$('.existing-user').hide();
	});
};
// sign up 
function saveCardLogin (){
	$('.savedCard').hide();
	$('.existing-user').hide();
	$(document).on('click', '.save-card', function (e) {
		if(!$('.card-ccdc .formDom  input').val() == '' && isCardNameValidated == true && isCardValidated == true && isCvvValidated == true && isExpDateValidated == true){
			if($('.save-Card-Check').is(':checked')){
				$('.card-ccdc').hide();
				$('.savedCard').hide();
				$('.existing-user').show();
			}else{
				$('.card-ccdc').hide();
				$('.savedCard').show();
			}
			$(this).parents('.formDom').removeClass('errorvalue');	
		}else{
			$('.card-ccdc  input').parents('.formDom').addClass('errorvalue');	
		}	
	});
};

// emi validation
function emiValidation(){
		$('.view-plans').hide();
		$('.emi-change').hide();

		$(document).on('click', '.emi-Check', function (e) {
			$('.emi-Check').attr('checked', true); 
			if($('.emi-Check').is(':checked')){
				$('.view-plans').show();
				$('.emi-plans').show();
			}else{
				$('.view-plans').hide();
				$('.radioname').hide();
				$('.emi-change').hide();
				$('.emi-plans').show();			
				$('.view-plans-box').removeClass('active');
			}
		});
		$("body").click(function(e) {
			$('.view-plans-box').removeClass('active');
		});
		$(document).on('click', '.view-plans', function (e) {
			$('.view-plans-box').toggleClass('active');
		});
		
		$(document).on('click', '.view-plans-box li', function (e) {
			var radioname = $(this).text();
			$(".view-plans-box li").removeClass("active");
			$(this).addClass("active");			
			$(".radioname").text(radioname);
			$('.radioname').show();
			$('.emi-change').show();
			$('.emi-plans').hide();   
		});
}