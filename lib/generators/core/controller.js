"use strict";
var Controller = Marionette.Object.extend({
	initialize: function(options) {
		console.log('initialize')
	},
	home: function() {
		console.log('home route');
	}
});