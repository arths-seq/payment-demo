function renderNetBnk(paymentTabId){
    var bankData = {
        dataTabType:'net-banking',
		cardsClass: 'net-banking-tab',
        'allbank': [
            {
                nbname: 'ICICI Bank',
                value: 'icici',
                titile: 'nbicici',
                popular: true
            }, {
                nbname: 'HDFC Bank',
                value: 'hdfc',
                titile: 'nbhdfc',
                popular: true
            }, {
                nbname: 'Kotak Bank',
                value: 'kotak',
                titile: 'nbkotak',
                popular: true
            }, {
                nbname: 'Axis Bank',
                value: 'axis',
                titile: 'nbaxis',
                popular: true
            }, {
                nbname: 'SBI Bank',
                value: 'sbi',
                titile: 'nbsbi',
                popular: true
            }, {
                nbname: 'Bank of Maharashtra',
                value: 'bom',
                titile: 'nbbom',
                popular: true
            }
        ]
    };

    var nbankli = Payments.templates.netbanking(bankData);
    $('.tab-container').append(nbankli);
    $('.blockMain').hide();
    $('[data-tab-type="'+paymentTabId+'"]').show();
    bindPopularBnkEvents();
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
