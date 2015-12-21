"use strict";
var app = new Marionette.Application();

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