function renderPaylater(paymentTabId){
	renderEpayTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindEpayEvent();
};
function bindEpayEvent(){
	floatLabels();
}

function renderEpayTemplate(){
	var paylaterData = {
		sumbitBtn:'Submit',
		firstName:'First Name',
		lastName:'Last Name',
		emailID:'Email Id',
		phone:'Phone No.',
		adharlabel:'Adhar Card No',
		panLabel:'PAN No',
		birthlabel:'Date of Birth',
		otpLabel:'Enter your OTP code',
		terms:'terms & conditions.',
		termsLine:'I agree to the',
		fnHelp: 'Please enter your first name',
		lnHelp:'Please enter your last name',
		eidHelp:'Enter your e-mail Id',
		phHelp:'Please enter a number',
		adharHelp:'Please enter your adhar card no',
		otpHelp:'Please enter your OTP code',
		formNote:'all fields are mandatory',
		epayNote:'Shop today. Pay 14 days later. 0% interest!',
		epayInfo:'what is Pay Later?',
		signUp:'Sign Up',
		verification:'Verification',
		otptx:'OTP',
		panHelp:'Please enter a PAN no',
		birthHelp:'Please enter birth date',
		canceltx:'cancel',
		resendtx:'resend OTP',
	};	
    var paylaterTemplate = Payments.templates.paylater(paylaterData);
    $('.tab-container').append(paylaterTemplate);
}