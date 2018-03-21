function renderCcDc(paymentTabId){
	renderCcDcTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindCcDcEvent();
}

function bindCcDcEvent(){
	cvvLengthValidation();
	expiryDateValidation();
	expiryDateLengthValidation();
	cardNumberUpdate();
	floatLabels();
}

function renderCcDcTemplate(){
	var cardData = {
        isEmiTab: false,
        showSavedCard: true,
        savedCard: false,
        blockName: 'blockCards',
        cnLabel: 'Card Number',
        cxLabel: 'Card Exp Date',
        chnLabel: 'Card Holder Name',
        cvvLabel: 'CSV / CVV',
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
        heCnum: 'Please enter a valid card number',
        heChold: 'Please enter name on your card',
        heCVV: 'Its a 3 digit code printed on the back of your card',
        savetx: 'Save card now to enable express payments',
        'cardEmiBank': [
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

        ]
    };
    var cards = Payments.templates.cards(cardData);
	$('.tab-container').append(cards);
}

// card number validation
function cardNumberUpdate() {
	$(".cardNumber").keyup(function () {		
		var ele = $(this);
		var cardtype = ele.data('cardtype');
		var e = ele.val().split(" ").join("");
		if (e == "") {

			ele.removeClass (function (index, className) {
				return (className.match (/\w*-icon\w*/) || []).join(' ');
				
			});
			//ele.addClass(cardtype+"logos");
			$(this).addClass('errorvalue');
		} else {
			e = e.match(new RegExp(".{1,4}", "g")).join(" ");
			ele.val(e);
			var r = get_card_type(e);
			var i = r.split('_');
			var ct = i[1].toLowerCase();;
			ele.removeClass (function (index, className) {
				return (className.match (/\w*-icon\w*/) || []).join(' ');
				
			});
			ele.addClass(ct);	
		}
		var cardnumber = $(this);
		if(!cardnumber.val().length > 22){
			$(this).addClass('errorvalue');
		}
	});
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
}
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
};

// csv/ cvv
function cvvLengthValidation(){
	$(document).on('keyup', '.cvv', function (e) {
		$('.cardNumber').hasClass('amex') == true ? $('.cvv').attr('maxlength',4) : $('.cvv').attr('maxlength',3);
	});	
};

// expriy date
function expiryDateLengthValidation(){
	$(document).on('keyup blur', '.exp_date, .cardname, .cardNumber', function (e) {
		var yourInput = $(this).val();
		yourInput = yourInput.length > 4 ? $(this).removeClass('errorvalue') : $(this).addClass('errorvalue');
	});
}	
