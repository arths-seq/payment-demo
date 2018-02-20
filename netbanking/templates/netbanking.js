(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['netbanking.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.popular : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<li class=\""
    + alias4(((helper = (helper = helpers.titile || (depth0 != null ? depth0.titile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titile","hash":{},"data":data}) : helper)))
    + "\">\r\n					<label>\r\n						<input type=\"radio\" name=\"nbbank_radio\" class=\"radio-box\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-nbtype=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "-nb\">\r\n						<span class=\"bankLogo lo-nb"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.nbname || (depth0 != null ? depth0.nbname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbname","hash":{},"data":data}) : helper)))
    + "</span>\r\n					</label>\r\n					\r\n				</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.nbname || (depth0 != null ? depth0.nbname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbname","hash":{},"data":data}) : helper)))
    + "</option>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<div id=\"netBanking\" class=\"blockMain \">\r\n	<h3>Popular banks :</h3>\r\n	<ul class=\"popularBanks\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allbank : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n\r\n\r\n	\r\n	<div class=\"form-group\">\r\n		<h3>All other banks</h3>\r\n		<select name=\"nbbank_select\" id=\"nbbank_select\">\r\n		<option value=\" \">Select bank</option>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allbank : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</select>\r\n	</div>\r\n	<div class=\"form-group\">\r\n		<input type=\"submit\" value=\"Submit\" data-btnid=\"nb_submit\" class=\"btn\">\r\n	</div>\r\n</div>";
},"useData":true});
})();