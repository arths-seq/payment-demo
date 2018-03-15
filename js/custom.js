$(document).ready(function () {

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

    /* Function to animate height: auto */
    function autoHeightAnimate(element, time, callback) {
        var curHeight = element.height(), // Get Default Height
            autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({
            height: autoHeight
        }, time); // Animate to Auto Height
    }

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 767;;
    }

    if (isMobile()) {
        $('body').addClass('mobile');
    } else {
        $('body').removeClass('mobile');
    }

    function displayTab() {
        $('.blockMain[data="tabs-1"]').show();
        $('.menuli:first-child').addClass('active');
    }
    if (!isMobile()) {
        displayTab();
    }

    $(window).resize(function () {
        if (isMobile()) {
            $('body').addClass('mobile');
            $('.blockMain[data="tabs-1"]').hide();
            $('.menuli:first-child').removeClass('active');
        } else {
            $('body').removeClass('mobile');
            displayTab();
        }
    });

    $('.menuli').on('click', function (event) {
        $('.menuli.active').removeClass('active');
        $(event.currentTarget).addClass('active');
        var blockDatatype = $(event.currentTarget).attr('data-tab');
        getTab(blockDatatype);
        if (isMobile()) {
            showTab();
            hideTab();
        }
    });

    function getTab(blockDatatype) {
        if (blockDatatype == "tabs-1") {
            $('.blockMain').hide();
            $('.blockMain[data="' + blockDatatype + '"]').show();
        }
        if (blockDatatype == "tabs-2") {
            $('.blockMain').hide();
            $('.blockMain[data="' + blockDatatype + '"]').show();
        }
		if (blockDatatype == "tabs-3") {
            $('.blockMain').hide();
            $('.blockMain[data="' + blockDatatype + '"]').show();
        }
        if (blockDatatype == "tabs-6") {
            $('.blockMain').hide();
            $('.blockMain[data="' + blockDatatype + '"]').show();
        }
		if (blockDatatype == "tabs-7") {
            $('.blockMain').hide();
            $('.blockMain[data="' + blockDatatype + '"]').show();
        }
    }

    var tabcont = $('.tabWrap')

    function showTab() {
        tabcont.css('height', '');
        autoHeightAnimate(tabcont, 500);
        var tabHeight = tabcont.height();
        setTimeout(function () {
            $(".tabWrap").animate({
                height: tabHeight
            }, 500);
            $('.tabWrap').addClass('showtab');
            $('.tab-menu').fadeOut(500);
        }, 500);
        $('.footer,.closetab').show();
    }


    function hideTab() {
        $('.closetab').on('click', function () {
            $('.tabWrap').stop().animate({
                height: '0'
            }, 500, function () {
                $('.tabWrap').removeClass('showtab');
                $('.footer,.closetab').hide();
                $('.tab-menu').fadeIn(500);
            });

        });
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
   // expiry Date validation
	function expiryDate() {
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
	var regxAlpha = /[a-zA-Z]+/g;
	var regxNum = /[0-9]+/g;
	
	function csvcvv(){
		$(document).on('keyup', '.cvv', function (e) {
			if($('.cardNumber').hasClass('amex') == true ){
				$('.cvv').attr('maxlength',4);
			}else {
				$('.cvv').attr('maxlength',3);
			}
		});	
	};
	
	function spclch(){
		$(document).on('keyup blur', '.cvv, .mobnumns, .cardname', function (e) {
			var yourInput = $(this).val();
			if ($(this).hasClass("cardname") && yourInput.length > 2) {
				var globalRegex = regxNum;
				$(this).removeClass('errorvalue');
			}else if($(this).hasClass("cardname")){
				$(this).addClass('errorvalue');
			}else if(!$(this).hasClass("cardname")){
				var globalRegex = regxAlpha;
			}
			var isSplChar = globalRegex.test(yourInput);
			if (isSplChar) {
				var no_spl_char = yourInput.replace(globalRegex, '');
				$(this).val(no_spl_char);
			}
			
		});
	}
	/*$('.exp_date').on("keyup", function(e) {
		var yourInput = $(this).val();
		if(yourInput.length > 5){
			$(this).removeClass('errorvalue');
		}else{
			$(this).removeClass('errorvalue');
		}
	});*/
	// all function calling here
	mobileNum();
	expiryDate();
	csvcvv();
	spclch();	
});