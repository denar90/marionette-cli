export default class Object extends Marionette.Object {
	constructor(options) {
		super(options);
	}
	home() {
		console.log('home route');
	}
}