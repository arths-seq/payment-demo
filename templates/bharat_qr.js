this.Payments.templates.bharat_qr=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,n,r,l,s){var i,t,p=null!=n?n:a.nullContext||{},o=r.helperMissing,e="function",c=a.escapeExpression;return'<div class="blockMain" data="tabs-10" data-tab-type="bharat-qr">\r\n    <div class="bharatqr-list">\r\n        <div class="bqr-tab-logo"></div>\r\n        <div class="form-group">\r\n            <input type="button" value="'+c(typeof(t=null!=(t=r.genqrBtnTxt||(null!=n?n.genqrBtnTxt:n))?t:o)===e?t.call(p,{name:"genqrBtnTxt",hash:{},data:s}):t)+'" class="btn bharat-qr-submit" data-popup-open="popup-bharatQr">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="bqr-work">\r\n        <ul>\r\n            <li class="th">How it works</li>\r\n            <li><i class="icon iphscan"></i>'+c(typeof(t=null!=(t=r.workTx1||(null!=n?n.workTx1:n))?t:o)===e?t.call(p,{name:"workTx1",hash:{},data:s}):t)+' </li>\r\n            <li><i class="icon iconfirm"></i>'+c(typeof(t=null!=(t=r.workTx2||(null!=n?n.workTx2:n))?t:o)===e?t.call(p,{name:"workTx2",hash:{},data:s}):t)+' </li>\r\n            <li><i class="icon iphpin"></i>'+c(typeof(t=null!=(t=r.workTx3||(null!=n?n.workTx3:n))?t:o)===e?t.call(p,{name:"workTx3",hash:{},data:s}):t)+' </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <div class="popupWrap xs-popup" data-popup="popup-bharatQr">\r\n        <div class="popup-content">\r\n            \x3c!-- <span><a href="#" class="cls-popup cls-bhpopup">X</a></span> --\x3e\r\n            <div class="bharat-qr">\r\n                <div class="bqr-logo"></div>\r\n                <div class="bqr-img" id="bharatqr_img">\x3c!--<img src="" alt="BHARAT QR Code">--\x3e</div>\r\n                <div class="bqr-supp"></div>\r\n                <p class="session-time text-center">'+(null!=(i=typeof(t=null!=(t=r.sessionTx||(null!=n?n.sessionTx:n))?t:o)===e?t.call(p,{name:"sessionTx",hash:{},data:s}):t)?i:"")+" </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},useData:!0});