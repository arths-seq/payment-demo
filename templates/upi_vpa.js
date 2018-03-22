this.Payments.templates.upi_vpa=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,e,a,s,t){return'<div class="blockMain blockUpi" data="tabs-9" data-tab-type="UPI">\n    <div class="note text-center">\n        <p>Pay using VPA or Scan QR code and pay.</p>\n    </div>\n    <div class="formDom form-group">\n        <div class="input-group">\n            <input autocomplete="upi-vpa" class="form-control" name="vpa" placeholder="" required="" pattern=".+@.+" value="">\n            <label>Enter UPI address</label>\n            <span class="input-group-addon icon iupi"></span>\n        </div>\n        \x3c!-- <span class="help"></span>--\x3e\n    </div>\n    <div class="form-group">\n        <input type="submit" value="Submit" class="btn">\n    </div>\n    <div class="div-or"><p class="or-text">OR</p></div>\n    <div class="qr-link text-center">                                    \n        <b><a href="#" class="qr-btn">Generate QR code</a></b>\n        \x3c!--<div class="form-group">\n            <input type="button" value="Generate QR" class="btn qr-btn">\n        </div>--\x3e\n    </div>\n    <div class="upi-popup popupWrap" id="upi-qr-scan">\n        <div class="upi-content popup-content">\n            <span><a href="#" class="cls-popup qrimgbtnclose" id="qrimgbtnclose">X</a></span>\n            <div class="vpa-pop-content">\n                <div class="qr-code-img text-center">\n                    <p class="label"><b>Scan the QR Code</b></p>\n                    <img src="https://devel-payments.airpayme.com/upi/qrimage/18-03-20_c5822792544c4816eac936e0c5c425e8.png" alt="QR Code">\n                </div>\n                <p class="label">To complete your online payment please follow the steps</p>\n                <div class="howto-text">\n                    <p><strong>Step 1:</strong> Login into your PSP application.</p>\n                    <p><strong>Step 2:</strong> Authorise your payment</p>\n                </div>\n                <p class="session-time text-center">Session timeout in <span class="timer"></span> minutes!</p>\n            </div>\n        </div>\n    </div>\n</div>'},useData:!0});