define('router',['backbone.marionette'], function(Marionette) {
	
	return Marionette.AppRouter.extend({
		appRoutes: {
			'': 'home'
		}
	});
});