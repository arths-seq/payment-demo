(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['wallets.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li>\r\n            <label for=\""
    + alias4(((helper = (helper = helpers.labelfor || (depth0 != null ? depth0.labelfor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelfor","hash":{},"data":data}) : helper)))
    + "\">\r\n            <input type=\"radio\" name=\"walletname\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" class=\"radio-box "
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" data-wallet-type=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\r\n            <span class=\""
    + alias4(((helper = (helper = helpers.spanclass || (depth0 != null ? depth0.spanclass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"spanclass","hash":{},"data":data}) : helper)))
    + "\"></span>\r\n        </label>\r\n        </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"blockMain blockWallet\" data=\"tabs-6\">\r\n    <ul class=\"wallet-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.wallet : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "     </ul>\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" value=\"Submit\" data-btnid=\"nb_submit\" class=\"btn\">\r\n    </div> \r\n</div>";
},"useData":true});
})();