function renderAirLoan(paymentTabId){
	renderAirloanTemplate();
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindAirloanEvent();
};
function bindAirloanEvent(){
	floatLabels();
    showLoanDiv ();
}

function renderAirloanTemplate(){
	var airloanData = {
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
    var airloanTemplate = Payments.templates.airloan(airloanData);
    $('.tab-container').append(airloanTemplate);
}

function showLoanDiv (){
    $('.loan_submit').off('click').on('click', function () {
		if($('#kissht-ppc').val() === 'kissht'){
			$('.loanWrap').hide();
			$('.suvidha-loan').hide();
			$('.kissht-loan').show();
			
		}
		if($('#suvidha-ppc').val() === 'suvidha'){
			$('.loanWrap').hide();
			$('.kissht-loan').hide();
			$('.suvidha-loan').show();
			
		}else{
			$('.kissht-loan').hide();
			$('.suvidha-loan').hide();
			
		};
	
	});
	
	$('.bcklaon').on('click', function () {
		$('.kissht-loan').hide();
		$('.suvidha-loan').hide()
		$('.loanWrap').show();
	});
}