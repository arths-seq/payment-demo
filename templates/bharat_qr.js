this.Payments.templates.bharat_qr=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(a,l,n,s,r){var i,t,p=null!=l?l:a.nullContext||{},e=n.helperMissing,o="function",c=a.escapeExpression;return'<div class="blockMain '+c(typeof(t=null!=(t=n.cardsClass||(null!=l?l.cardsClass:l))?t:e)===o?t.call(p,{name:"cardsClass",hash:{},data:r}):t)+'" data-tab-type="'+c(typeof(t=null!=(t=n.dataTabType||(null!=l?l.dataTabType:l))?t:e)===o?t.call(p,{name:"dataTabType",hash:{},data:r}):t)+'">\r\n    <div class="bharatqr-list">\r\n        <div class="bqr-tab-logo"></div>\r\n        <div class="form-group">\r\n            <input type="button" value="'+c(typeof(t=null!=(t=n.genqrBtnTxt||(null!=l?l.genqrBtnTxt:l))?t:e)===o?t.call(p,{name:"genqrBtnTxt",hash:{},data:r}):t)+'" class="btn bharat-qr-submit" data-popup-open="popup-bharatQr">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="bqr-work">\r\n        <ul>\r\n            <li class="th">How it works</li>\r\n            <li><i class="icon iphscan"></i>'+c(typeof(t=null!=(t=n.workTx1||(null!=l?l.workTx1:l))?t:e)===o?t.call(p,{name:"workTx1",hash:{},data:r}):t)+' </li>\r\n            <li><i class="icon iconfirm"></i>'+c(typeof(t=null!=(t=n.workTx2||(null!=l?l.workTx2:l))?t:e)===o?t.call(p,{name:"workTx2",hash:{},data:r}):t)+' </li>\r\n            <li><i class="icon iphpin"></i>'+c(typeof(t=null!=(t=n.workTx3||(null!=l?l.workTx3:l))?t:e)===o?t.call(p,{name:"workTx3",hash:{},data:r}):t)+' </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <div class="popupWrap xs-popup" data-popup="popup-bharatQr">\r\n        <div class="popup-content">\r\n            \x3c!-- <span><a href="#" class="cls-popup cls-bhpopup">X</a></span> --\x3e\r\n            <div class="bharat-qr">\r\n                <div class="bqr-logo"></div>\r\n                <div class="bqr-img" id="bharatqr_img">\x3c!--<img src="" alt="BHARAT QR Code">--\x3e</div>\r\n                <div class="bqr-supp"></div>\r\n                <p class="session-time text-center">'+(null!=(i=typeof(t=null!=(t=n.sessionTx||(null!=l?l.sessionTx:l))?t:e)===o?t.call(p,{name:"sessionTx",hash:{},data:r}):t)?i:"")+" </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},useData:!0});