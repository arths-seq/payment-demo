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
	
	specialCharactersValidation();
	