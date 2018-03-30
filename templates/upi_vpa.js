this.Payments.templates.upi_vpa=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,l,p,e){var t,s,r=null!=n?n:a.nullContext||{},o=l.helperMissing,i="function",u=a.escapeExpression;return'<div class="blockMain blockUpi" data="tabs-9" data-tab-type="UPI">\r\n    <div class="note text-center">\r\n        <p>'+u(typeof(s=null!=(s=l.upiNote||(null!=n?n.upiNote:n))?s:o)===i?s.call(r,{name:"upiNote",hash:{},data:e}):s)+'</p>\r\n\r\n    </div>\r\n\r\n    <div class="formDom form-group">\r\n        <div class="input-group">\r\n            <input class="form-control upi-validation" name="vpa" placeholder="" required="" pattern=".+@.+" value="">\r\n            <label>'+u(typeof(s=null!=(s=l.upiaddLabel||(null!=n?n.upiaddLabel:n))?s:o)===i?s.call(r,{name:"upiaddLabel",hash:{},data:e}):s)+'</label>\r\n            <span class="input-group-addon icon iupi"></span>\r\n        </div>\r\n        <span class="help">'+u(typeof(s=null!=(s=l.upiaddHelp||(null!=n?n.upiaddHelp:n))?s:o)===i?s.call(r,{name:"upiaddHelp",hash:{},data:e}):s)+'</span>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <input type="submit" value="'+u(typeof(s=null!=(s=l.sumbitBtnTxt||(null!=n?n.sumbitBtnTxt:n))?s:o)===i?s.call(r,{name:"sumbitBtnTxt",hash:{},data:e}):s)+'" class="btn">\r\n    </div>\r\n\r\n    <div class="div-or"><p class="or-text">'+u(typeof(s=null!=(s=l.orTxt||(null!=n?n.orTxt:n))?s:o)===i?s.call(r,{name:"orTxt",hash:{},data:e}):s)+'</p></div>\r\n\r\n    <div class="qr-link text-center">                                    \r\n        <b><a href="#" class="qr-btn" data-popup-open="popup-upi">'+u(typeof(s=null!=(s=l.genQRcode||(null!=n?n.genQRcode:n))?s:o)===i?s.call(r,{name:"genQRcode",hash:{},data:e}):s)+'</a></b>        \r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class="upi-popup popupWrap" data-popup="popup-upi">\r\n    <div class="upi-content popup-content">\r\n    <a href="javascript:void(0)" class="cls-popup">X</a>\r\n        <div class="popup-body">\r\n                <div class="qr-code-img text-center">\r\n                    <p class="label"><b>'+u(typeof(s=null!=(s=l.titleQRcode||(null!=n?n.titleQRcode:n))?s:o)===i?s.call(r,{name:"titleQRcode",hash:{},data:e}):s)+'</b></p>\r\n                    \x3c!--<img src="https://devel-payments.airpayme.com/upi/qrimage/18-03-20_c5822792544c4816eac936e0c5c425e8.png" alt="QR Code">--\x3e\r\n                    <img src="img/qr.png" alt="QR Code">\r\n                </div>\r\n                <p class="label">'+u(typeof(s=null!=(s=l.qrpupTx1||(null!=n?n.qrpupTx1:n))?s:o)===i?s.call(r,{name:"qrpupTx1",hash:{},data:e}):s)+'</p>\r\n                <div class="howto-text">\r\n                    <p><strong>Step 1:</strong> '+u(typeof(s=null!=(s=l.stepTx1||(null!=n?n.stepTx1:n))?s:o)===i?s.call(r,{name:"stepTx1",hash:{},data:e}):s)+"</p>\r\n                    <p><strong>Step 2:</strong> "+u(typeof(s=null!=(s=l.stepTx2||(null!=n?n.stepTx2:n))?s:o)===i?s.call(r,{name:"stepTx2",hash:{},data:e}):s)+'</p>\r\n                </div>\r\n                <p class="session-time text-center">'+(null!=(t=typeof(s=null!=(s=l.sessionTx||(null!=n?n.sessionTx:n))?s:o)===i?s.call(r,{name:"sessionTx",hash:{},data:e}):s)?t:"")+" </p>\r\n        </div> \x3c!-- close  popup-body--\x3e    \r\n    </div>\x3c!-- close  popup-content--\x3e\r\n</div>    \x3c!-- close  popupWrap--\x3e"},useData:!0});