define('collection', ['backbone'], function(Backbone) {
	return Backbone.Collection.extend({
		model: Backbone.Model.extend()
	});
});