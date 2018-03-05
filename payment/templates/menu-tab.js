(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['menu-tab.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li class=\"menuli\"><a href=\"#\" data-menu-type=\""
    + alias4(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data}) : helper)))
    + "\" data-tab=\"tabs-"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "\" class=\"menu-link\">"
    + alias4(((helper = (helper = helpers.tabname || (depth0 != null ? depth0.tabname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabname","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"menu-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.menu : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n\r\n\r\n";
},"useData":true});
})();