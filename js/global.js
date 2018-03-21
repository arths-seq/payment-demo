	// global Regex
	// allow number
	var globalRegex1 = /[ÃƒÂ·!"#$%&'()*+,-.\/;\:<=>?@[\]^_`ÃƒÂ¥{|}~Ã¢â€šÂ¬Ã¢â‚¬Å¡Ã¢â‚¬Å¾Ã¢â‚¬Â¦Ã¢â‚¬Â Ã¢â‚¬Â¡Ã‹â€ Ã¢â‚¬Â°Ã…Â Ã¢â‚¬Â¹Ã…â€™Ã…Â½Ã¢â‚¬ËœÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬Â¢Ã¢â‚¬â€œÃ‹Å“Ã¢â€žÂ¢Ã…Â¡Ã¢â‚¬ÂºÃ…â€œÃ…Â¾Ã…Â¸Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚Â«Ã‚Â¬-Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿Ãƒâ€”ÃƒËœÃƒÂ·????0-9\\\/]/gi;
	// allow alphabets 
	var globalRegex2 = /[ÃƒÂ·!"#$%&'()*+,-.\/;\:<=>?@[\]^_`ÃƒÂ¥{|}~Ã¢â€šÂ¬Ã¢â‚¬Å¡Ã¢â‚¬Å¾Ã¢â‚¬Â¦Ã¢â‚¬Â Ã¢â‚¬Â¡Ã‹â€ Ã¢â‚¬Â°Ã…Â Ã¢â‚¬Â¹Ã…â€™Ã…Â½Ã¢â‚¬ËœÃ¢â‚¬â„¢Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬Â¢Ã¢â‚¬â€œÃ‹Å“Ã¢â€žÂ¢Ã…Â¡Ã¢â‚¬ÂºÃ…â€œÃ…Â¾Ã…Â¸Ã‚Â¡Ã‚Â¢Ã‚Â£Ã‚Â¤Ã‚Â¥Ã‚Â¦Ã‚Â§Ã‚Â¨Ã‚Â©Ã‚Â«Ã‚Â¬-Ã‚Â®Ã‚Â¯Ã‚Â°Ã‚Â±Ã‚Â´Ã‚ÂµÃ‚Â¶Ã‚ÂºÃ‚Â»Ã‚Â¼Ã‚Â½Ã‚Â¾Ã‚Â¿Ãƒâ€”ÃƒËœÃƒÂ·????a-zA-Z\\\/]/gi;

	// Special Characters
	function specialCharactersValidation(){
		$(document).on('keyup blur', '.cvv, .mobnumns, .cardname', function (e) {
			var yourInput = $(this).val(),
				globalRegex = $(this).hasClass("cardname") ? globalRegex1 : globalRegex2;
				
			if (globalRegex.test(yourInput)) {
				var no_spl_char = yourInput.replace(globalRegex, '');
				$(this).val(no_spl_char);
			}		
		});
	}
	$(document).on('focusout','.confirmPassword', function() {
			
			var password = $('.newPassword').val();
			var confirmPass = $('.confirmPassword').val();
			//var formId = $(this).attr('data-form-id');
			//var subFormId = $(this).attr('data-sub-form-id');
			//var url = $(this).attr('data-url-ref');
			//var divClass = $(this).attr('data-replacable-div');
			var passReg = /^((?=.*\d)(?=.*[a-z]).{8,30})+$/;
			var passReg1 = /(.)\1\1\1/;	
			
					   
			   if(password.length < 7){
					  $(this).addClass('errorvalue');
					  console.log('password.length');
					 
				 }				 
				 if(confirmPass.length < 7){
					 $(this).addClass('errorvalue');
					 console.log('confirmPass.length');
				 }									  
				
				 if(password.length > 7 && !passReg1.test(password)){
					  $(this).removeClass('errorvalue');
					  console.log('password.length > 7');
				 }
				 
				 var confirmPassFlag = false;
				 if(confirmPass.length > 7 && !passReg1.test(confirmPass)){
					 $(this).addClass('errorvalue');
					 confirmPassFlag = true;
					 console.log('confirmPass.length > 7 true');
					
				}
				 
				if(password.length > 7 && confirmPass.length > 7 && !confirmPassFlag && password != confirmPass){
					
					$(this).addClass('errorvalue');
					console.log('password.length > 7 ');
					
				}	 
			
		});
		function emailValidation(){

			$(document).ready(function(e) {
				
				$('.emailV').on('focusout', function() {
					
					var sEmail = $('.emailV').val();
					if ($.trim(sEmail).length == 0) {
						alert('Please enter valid email address');
						$(this).addClass('errorvalue');
						return false;
					}
					if (validateEmail(sEmail)) {
						$(this).removeClass('errorvalue');
					}
					else {
						$(this).addClass('errorvalue');
						return false;
					}
				});
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
		}
	specialCharactersValidation();
	emailValidation();
	