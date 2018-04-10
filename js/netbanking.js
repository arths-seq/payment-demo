function renderNetBnk(paymentTabId){
    var bankData = {
        'dataTabType':'net-banking',
		'cardsClass': 'net-banking-tab',
        'allbank': getAllBnkData()
    }

    var nbankli = Payments.templates.netbanking(bankData);
    $('.tab-container').append(nbankli);
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindPopularBnkEvents();
}

function getAllBnkData(){
    var netBankData = paymentChannelsData.DOMAIN.NETBANK.BANK,
        counter = 0,
        resultArr = [],
        currentObj;
    
    for(;counter<netBankData.length;counter++){
        currentObj = netBankData[counter];
        popularBankArr = ["AXIS","KOT","MAHNETBNK","HDF","SBINB","BDBDSBI","BDBDICI","ICICI"];
        resultArr.push({
            nbname: currentObj.BANKTITLE,
            value: currentObj.BANKCODE,
            titile: 'nb'+currentObj.BANKCODE,
            popular: popularBankArr.indexOf(currentObj.BANKCODE) >= 0 ? true : false
        });
    }
    return resultArr;
}

function bindPopularBnkEvents(){
    $('.popularBanks li').on("click", function(){  
        var bankId = $(this).attr('data-attr-bankid');
        var bankName = $(this).attr('data-attr-bankname');
        var existsVal = true;        
            $(".net-banking-options > option").each(function() {
                if ($(this).val() == bankId) {
                    existsVal = false;
                    return false;
                }
            });
            $(".popularBanks li").removeClass("active");
            $(this).addClass("active");
            if (existsVal) {
                $('.select').append('<option value="' + bankId + '">' + bankName + '</option>');
            }
            $(".bankName").val(bankName);
            $(".bankId").val(bankId); 
       
    });
    
    $('.net-banking-options').on("change", function(){   
        $(".bankName").val($(this).find("option:selected").text());
        $(".bankId").val($(this).find("option:selected").attr("value"));      
        
        $(".popularBanks li").removeClass('active');
        $('.popularBanks li[data-attr-bankid='+$(this).find("option:selected").attr("value")+']').addClass('active');
    });
}
