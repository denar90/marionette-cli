define('app', ['marionette', 'backbone', 'router', 'controller'], function(Marionette, Backbone, Router, Controller) {
	"use strict";

	var app = new Marionette.Application();
	//add regions
	app.addRegions({
		mainRegion: '#app'
	});
	app.on('start', function() {
		if (Backbone.history) {
			Backbone.history.start();
		}
	});
	new Router({
		controller: new Controller()
	});
	return app;
});
