function updateMenuData(){
    var menuArr = paymentChannelsData.MERCHANT_CHANNELS,
        counter = 0,
        finalMenuArr = [],
        currentOption,
        channelData;
    debugger
    if(!paymentChannelsData.COMMON_DATA.chmod){
        for(;counter<menuArr.length;counter++){
            currentOption = menuArr[counter];
            channelDataArr = getMenuOptDetails(currentOption);
            finalMenuArr = finalMenuArr.concat(channelDataArr)
        }
    } else {
        finalMenuArr = updateChmodChannel(finalMenuArr);
    }
    paymentChannelsData.menuOptions = finalMenuArr;

}

function updateChmodChannel(){
    var chmodVal = paymentChannelsData.COMMON_DATA.chmod,
        resultMenuArr = [];

    if(chmodVal === 'pgcc' || chmodVal === 'pgdc'){
            resultMenuArr = [];
            resultMenuArr.push(chmodVal === 'pgcc' ? getMenuOptDetails('pg')[0] : getMenuOptDetails('pg')[1])
            resultMenuArr = resultMenuArr.concat(getMenuOptDetails('express_payments'));
    } else if (chmodVal === 'nb'){
        resultMenuArr = [];
        resultMenuArr = resultMenuArr.concat(getMenuOptDetails('netbnk'))
    }

    return resultMenuArr;
}

function getMenuOptDetails(optionCode){
    var resultArr = [],
        tempVar = {};
    switch(optionCode) {
        case 'pg':
            tempVar = {
                'data': 'credit',
                'tabname': translate('Credit Card'),
                'imgicon': 'cdc'
            };
            resultArr.push(tempVar);
            tempVar = {
                'data': 'debit',
                'tabname': translate('Debit Card'),
                'imgicon': 'cdc'
            };
            resultArr.push(tempVar);
            break;
        case 'netbnk':
            tempVar = {
                'data': 'net-banking',
                'tabname': translate('Net Banking'),
                'imgicon': 'nb'
            };
            resultArr.push(tempVar);
            break;
        case 'cash':
            tempVar = {
                'data': 'cash',
                'tabname': 'Cash',
                'imgicon': 'cash'
            };
            resultArr.push(tempVar);
            break;
        case 'emi':
            tempVar = {
                'data': 'emi',
                'tabname': 'EMI',
                'imgicon': 'emi'
            };
            resultArr.push(tempVar);
            break;
        case 'rtgs':
            tempVar = {
                'data': 'rtgs',
                'tabname': 'RTGS / NEFT',
                'imgicon': 'rtnft'
            };
            resultArr.push(tempVar);
            break;
        case 'ppc':
            tempVar = {
                'data': 'wallet',
                'tabname': 'Wallet',
                'imgicon': 'wallet'
            };
            resultArr.push(tempVar);
            break;
        case 'onclik':
            tempVar = {
                'data': 'Amex-click',
                'tabname': 'Amex eZeClick',
                'imgicon': 'amex'
            };
            resultArr.push(tempVar);
            break;
        case 'express_payments':
            tempVar = {
                'data': 'Express_Payment',
                'tabname': 'Express Payments',
                'imgicon': 'exp-pay'
            };
            resultArr.push(tempVar);
            break;
        case 'upi':
            tempVar = {
                'data': 'UPI',
                'tabname': 'UPI',
                'imgicon': 'upi'
            };
            resultArr.push(tempVar);
            break;
        case 'payltr':
            tempVar = {
                'data': 'pay-later',
                'tabname': 'Pay Later',
                'imgicon': 'pay-later'
            };
            resultArr.push(tempVar);
            break;
        case 'va':
            tempVar = {
                'data': 'virtual-acc',
                'tabname': 'Virtual Account',
                'imgicon': 'virtual-acc'
            };
            resultArr.push(tempVar);
            break;
        case 'aloan':
            tempVar = {
                'data': 'aloan',
                'tabname': 'Air Loan',
                'imgicon': 'air-loan'
            };
            resultArr.push(tempVar);
            break;
        case 'btqr':
            tempVar = {
                'data': 'bharat-qr',
                'tabname': 'Bharat QR',
                'imgicon': 'qr'
            };
            resultArr.push(tempVar);
            break;
        case 'amazon':
            tempVar = {
                'data': 'amazon',
                'tab': '14',
                'tabname': 'Amazon Pay',
                'imgicon': 'amazonpay'
            };
            resultArr.push(tempVar);
        break;
    }
    return resultArr;
}

function updateAllData(){
    updateMenuData();
    render();
}