this.Payments.templates.cash=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(t,n,a,s,r){var l,o=null!=n?n:t.nullContext||{},i=a.helperMissing,e="function",c=t.escapeExpression;return'\r\n<div class="blockMain" data="tabs-3" data-tab-type="cash">\r\n\t<div class="row">\r\n\t\t<div class="col-xs-6">\r\n\t\t\t<div class="formDom form-group">\r\n\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t<input type="tel" class="form-control mobnumns" maxlength="10" minlength="10">\r\n\t\t\t\t\t<label>'+c(typeof(l=null!=(l=a.cashmob||(null!=n?n.cashmob:n))?l:i)===e?l.call(o,{name:"cashmob",hash:{},data:r}):l)+'</label>\r\n\t\t\t\t</div>\r\n\t\t\t<span class="help">'+c(typeof(l=null!=(l=a.cashheCnum||(null!=n?n.cashheCnum:n))?l:i)===e?l.call(o,{name:"cashheCnum",hash:{},data:r}):l)+'</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<div class="col-xs-6">\r\n\t\t\t<div class="formDom form-group">\r\n\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t<input type="tel" class="form-control cash_pincode" maxlength="6" id="cash_pincode">\r\n\t\t\t\t\t<label>'+c(typeof(l=null!=(l=a.cashpin||(null!=n?n.cashpin:n))?l:i)===e?l.call(o,{name:"cashpin",hash:{},data:r}):l)+'</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<div class="formDom form-group">\r\n\t\t\x3c!--<div class="inlinePins" style="display: block;"><div class="result-pin-add"><p>No records found!</p></div></div>--\x3e\r\n\t\t\t<div class="input-group">\r\n\t\t\t\t<textarea class="form-control box-shadow-none"></textarea>\r\n\t\t\t\t<label>'+c(typeof(l=null!=(l=a.cashlocatin||(null!=n?n.cashlocatin:n))?l:i)===e?l.call(o,{name:"cashlocatin",hash:{},data:r}):l)+'</label>\r\n\t\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class="formDom form-group brdrnone">\r\n\t\t<a href="javascript:void(0);" class="cashwork">how does it work?</a>\r\n\t\t<div class="cashworkBox">\r\n\t\t\t<ul>\r\n\t\t\t\t<li><strong>Step 1:</strong> You will get an SMS with your unique "airpay id".</li>\r\n\t\t\t\t<li><strong>Step 2:</strong> Go to the closest deposit location. You can find more locations by smsing "paycash <your pincode>" to 54646.</li>\r\n\t\t\t\t<li><strong>Step 3:</strong> Give the agent your unique "airpay id" and cash.</li>\r\n\t\t\t\t<li><strong>Step 4:</strong> Take your confirmation receipt from the agent.</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="form-group">\r\n        <input type="submit" value="Submit" class="btn vmsubmitBtn disableClick">\r\n    </div>    \r\n</div>'},useData:!0});