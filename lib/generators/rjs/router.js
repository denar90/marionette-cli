define('router',['backbone.marionette'], function(Marionette) {
	"use strict";

	return Marionette.AppRouter.extend({
		appRoutes: {
			'': 'home'
		}
	});
});