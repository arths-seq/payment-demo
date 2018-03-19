$(document).on("click",".popularBanks li", function(){  
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
$(document).on("change",".net-banking-options", function(){   
    $(".bankName").val($(this).find("option:selected").text());
    $(".bankId").val($(this).find("option:selected").attr("value"));      
    
    $(".popularBanks li").removeClass('active');
    $('.popularBanks li[data-attr-bankid='+$(this).find("option:selected").attr("value")+']').addClass('active');
});