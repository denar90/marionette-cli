require.config({
	baseUrl: 'app',
	paths : {
		requirejs: 'pathTo/requirejs/require',
		underscore: 'pathTo/underscore/underscore',
		backbone: 'pathTo/backbone/backbone',
		marionette: 'pathTo/marionette/lib/backbone.marionette',
		jquery: 'pathTo/jquery/dist/jquery'
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