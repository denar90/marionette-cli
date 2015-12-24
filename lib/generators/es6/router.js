export default class AppRouter extends Marionette.AppRouter {
	constructor(options) {
		this.appRoutes = {
			'': 'home'
		};
		super(options);
	}
}