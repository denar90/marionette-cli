require.config({
	paths : {
		requirejs : 'pathTo/requirejs/require',
		underscore : 'pathTo/underscore/underscore',
		backbone   : 'pathTo/backbone/backbone',
		marionette : 'pathTo/marionette/lib/backbone.marionette'
	},
	shim : {
		underscore: {
			exports : '_'
		},
		backbone: {
			exports: 'Backbone',
			deps: ['jquery','underscore', 'requirejs']
		},
		marionette: {
			exports : 'Backbone.Marionette',
			deps : ['backbone']
		}
	},
	deps : ['jquery','underscore']
});

require(['app'], function(app) {
	//= ../core/main.js
});
