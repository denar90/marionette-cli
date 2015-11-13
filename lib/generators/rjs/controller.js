define('controller', ['marionette'], function(Marionette) {
	"use strict";

	return Marionette.Object.extend({
		initialize: function(options) {
			console.log('initialize')
		},
		home: function() {
			console.log('home route');
		}
	});
});