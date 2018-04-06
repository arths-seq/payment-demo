function renderAirLoan(paymentTabId){
	renderAirloanTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
	bindAirLoanEvents();	
}

function bindAirLoanEvents(){
    floatLabels();
    mobileNum();
	nameValidation();
	airLoanValidation();	
}

function renderAirloanTemplate(){
	var airloanData = {
		dataTabType:'aloan',
		cardsClass: 'aloan-tab',
		sumbitBtn:translate('Submit'),
		firstName:translate('First Name'),
		lastName:translate('Last Name'),
		emailID:translate('Email Id'),
		phone:translate('Phone No.'),
		adharlabel:translate('Adhar Card No'),
		panLabel:translate('PAN No'),
		voterLabel:translate('Voter Id'),
		birthlabel:translate('Date of Birth'),
		selectLoanlabel:translate('Select Loan Type'),
		selectMartlabel:translate('Select Marital Status'),
		selectGenderlabel:translate('Select Gender'),
		fnHelp: translate('Please enter your first name'),
		lnHelp:translate('Please enter your last name'),
		eidHelp:translate('Enter your e-mail Id'),
		phHelp:translate('Please enter a number'),
		adharHelp:translate('Please enter your adhar card no'),
		panHelp:translate('Please enter a PAN no'),
		voteridHelp:translate('Please enter voter id'),
		birthHelp:translate('Please enter birth date'),
		loanHelp:translate('Please select loan type'),
		MartHelp:translate('Please select marital status'),
		GenderHelp:translate('Please select gender'),
		formNote:translate('all fields are mandatory'),
		backtx:translate('back'),
				'allLoan': [
		{
						alname: 'Kissht',
						value: 'kissht',
						titile: 'kissht'
					},
					{
						alname: 'Cash Suvidha',
						value: 'suvidha',
						titile: 'suvidha'
					},
				],
				'loanType':[
					{
						titile:'businessloan',
						lname: 'Business Loan'
					},
					{
						titile:'personalloan',
						lname: 'Personal Loan'
					}
				],
				'MaritalType':[
					{
						titile:'single',
						mlname: 'Single'
					},
					{
						titile:'married',
						mlname: 'Married'
					}
				],
				'GenderType':[
					{
						titile:'male',
						gname: 'Male'
					},
					{
						titile:'female',
						gname: 'Female'
					}
				]
			};
			var airloanTemplate = Payments.templates.air_loan(airloanData);
			$('.tab-container').append(airloanTemplate);
}
function airLoanValidation() {
	$('.airloan-signup').on('click', function () {
		if(!$('.kissht-details input').val() == '' && isNameValidated == true && isEmailValidated == true && isMobileValidated == true){
            $(this).parents('.formDom').removeClass('errorvalue');
		}else{
			$("input:visible[data-rule-required!='true']").parents('.formDom').addClass('errorvalue');	
		}	
    });
}