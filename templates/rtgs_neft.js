this.Payments.templates.rtgs_neft=Handlebars.template({1:function(l,t,a,e,n){var i,u=null!=t?t:l.nullContext||{},s=a.helperMissing,o="function",c=l.escapeExpression;return'\t\t\t<li class="'+c(typeof(i=null!=(i=a.titile||(null!=t?t.titile:t))?i:s)===o?i.call(u,{name:"titile",hash:{},data:n}):i)+'">\n\t\t\t\t<label for="'+c(typeof(i=null!=(i=a.titile||(null!=t?t.titile:t))?i:s)===o?i.call(u,{name:"titile",hash:{},data:n}):i)+'-ppc">\n\t\t\t\t\t<input type="radio" name="wallet_radio" class="radio-box" value="'+c(typeof(i=null!=(i=a.value||(null!=t?t.value:t))?i:s)===o?i.call(u,{name:"value",hash:{},data:n}):i)+'" data-wallettype="'+c(typeof(i=null!=(i=a.value||(null!=t?t.value:t))?i:s)===o?i.call(u,{name:"value",hash:{},data:n}):i)+'Wallet" id="'+c(typeof(i=null!=(i=a.titile||(null!=t?t.titile:t))?i:s)===o?i.call(u,{name:"titile",hash:{},data:n}):i)+'-ppc">\n\t\t\t\t\t<span class="walletLogo logo-'+c(typeof(i=null!=(i=a.titile||(null!=t?t.titile:t))?i:s)===o?i.call(u,{name:"titile",hash:{},data:n}):i)+'">'+c(typeof(i=null!=(i=a.walletname||(null!=t?t.walletname:t))?i:s)===o?i.call(u,{name:"walletname",hash:{},data:n}):i)+"</span>\n\t\t\t\t</label>\n\t\t\t\t\n\t\t\t</li>\n"},compiler:[7,">= 4.0.0"],main:function(l,t,a,e,n){var i;return'\n<div class="blockMain blockWallet" data="tabs-6">\n\t<ul class="blocklist walletlist">\n'+(null!=(i=a.each.call(null!=t?t:l.nullContext||{},null!=t?t.allWallet:t,{name:"each",hash:{},fn:l.program(1,n,0),inverse:l.noop,data:n}))?i:"")+'\t</ul>\n\t\n\t\n\t<div class="form-group">\n\t\t<input type="submit" value="Submit" data-btnid="nb_submit" class="btn">\n\t</div>\n</div>'},useData:!0});