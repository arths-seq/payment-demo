(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cards.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div id=\"cards\" class=\"blockMain \">\r\n	<form class=\"row\">                              \r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" >\r\n                    <label>"
    + alias4(((helper = (helper = helpers.cnLabel || (depth0 != null ? depth0.cnLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cnLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                 <input type=\"password\" name=\"password\" class=\"form-control\">\r\n                 <label>"
    + alias4(((helper = (helper = helpers.cxLabel || (depth0 != null ? depth0.cxLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cxLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" >\r\n                <label>"
    + alias4(((helper = (helper = helpers.chnLabel || (depth0 != null ? depth0.chnLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chnLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                 <input type=\"text\" class=\"form-control\">\r\n                 <label>"
    + alias4(((helper = (helper = helpers.cvvLabel || (depth0 != null ? depth0.cvvLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cvvLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n				<input type=\"submit\" value=\"Submit\" data-btnid=\"nb_submit\" class=\"btn\">\r\n			</div>\r\n    </form>\r\n\r\n    <!--<form class=\"form-horizontal\">\r\n        <div class=\"row form-group\">\r\n            <label class=\"col-sm-4\">"
    + alias4(((helper = (helper = helpers.cnLabel || (depth0 != null ? depth0.cnLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cnLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n            <input type=\"text\" class=\"col-sm-8 form-control\" >\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <label class=\"col-sm-4\">"
    + alias4(((helper = (helper = helpers.chnLabel || (depth0 != null ? depth0.chnLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chnLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n            <input type=\"text\" class=\"col-sm-8 form-control\" >\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <label class=\"col-sm-4\">"
    + alias4(((helper = (helper = helpers.cxLabel || (depth0 != null ? depth0.cxLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cxLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n            <input type=\"text\" class=\"col-sm-3 form-control\" >\r\n            <input type=\"text\" class=\"col-sm-3 form-control\" >\r\n        </div>\r\n        <div class=\"row form-group\">\r\n            <label class=\"col-sm-4\">"
    + alias4(((helper = (helper = helpers.cvvLabel || (depth0 != null ? depth0.cvvLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cvvLabel","hash":{},"data":data}) : helper)))
    + "</label>\r\n            <input type=\"text\" class=\"col-sm-3 form-control\" >\r\n        </div>\r\n    </form>-->\r\n</div>";
},"useData":true});
})();