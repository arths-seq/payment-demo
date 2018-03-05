(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['wallet.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\""
    + alias4(((helper = (helper = helpers.titile || (depth0 != null ? depth0.titile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titile","hash":{},"data":data}) : helper)))
    + "\">\r\n				<label for=\""
    + alias4(((helper = (helper = helpers.titile || (depth0 != null ? depth0.titile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titile","hash":{},"data":data}) : helper)))
    + "-ppc\">\r\n					<input type=\"radio\" name=\"wallet_radio\" class=\"radio-box\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-wallettype=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "Wallet\" id=\""
    + alias4(((helper = (helper = helpers.titile || (depth0 != null ? depth0.titile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titile","hash":{},"data":data}) : helper)))
    + "-ppc\">\r\n					<span class=\"walletLogo logo-"
    + alias4(((helper = (helper = helpers.titile || (depth0 != null ? depth0.titile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titile","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.walletname || (depth0 != null ? depth0.walletname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"walletname","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</label>\r\n				\r\n			</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<div class=\"blockMain blockWallet\" data=\"tabs-6\">\r\n	<ul class=\"blocklist walletlist\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.allWallet : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n	\r\n	\r\n	<div class=\"form-group\">\r\n		<input type=\"submit\" value=\"Submit\" data-btnid=\"nb_submit\" class=\"btn\">\r\n	</div>\r\n</div>";
},"useData":true});
})();