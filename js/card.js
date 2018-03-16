function renderCcDc(paymentTabId){
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

        ],
        'emiTable': [
            {
                emiTenure: '0 months',
                bankRate: '12%',
                installments: 'Rs. 0',
                interestPaid: 'Rs. 0'
            },
            {
                emiTenure: '3 months',
                bankRate: '12%',
                installments: 'Rs. 55',
                interestPaid: 'Rs. 20'
            },
            {
                emiTenure: '6 months',
                bankRate: '12%',
                installments: 'Rs. 5,100',
                interestPaid: 'Rs. 301'
            }
        ]
    };
    var cards = Payments.templates.cards(cardData);
	$('.tab-container').append(cards);
	$('[data-tab-type="' + paymentTabId + '"]').show();
	bindCcDcEvent();
}

function bindCcDcEvent(){
	debugger;
	cvvLengthValidation();
	expiryDateValidation();
	expiryDateLengthValidation();
	cardNumberUpdate();
}

// card number validation
function cardNumberUpdate() {
    var cardNumber = $('.cardNumber');
	
    var cardIcon = $(".card-icon");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');

    cardNumber.keyup(function() {

        cardIcon.removeClass('visa');
            cardIcon.removeClass('amex');
            cardIcon.removeClass('mastercard');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumber.addClass('errorvalue');
        } else {
            cardNumber.removeClass('errorvalue');
        }
		
		if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            cardIcon.addClass('visa');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            cardIcon.addClass('amex');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            cardIcon.addClass('mastercard');
        }
    });
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
		$(document).on('keyup blur', '.exp_date, .cardname', function (e) {
			var yourInput = $(this).val();
			yourInput = yourInput.length > 4 ? $(this).removeClass('errorvalue') : $(this).addClass('errorvalue');
		});
	}	

	// $(document).ready(function () {
	// 	expiryDateValidation();
	// });
	// expiryDateLengthValidation();
	// cvvLengthValidation();