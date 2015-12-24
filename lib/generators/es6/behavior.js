export default class Behavior extends Marionette.Behavior {
	constructor() {
		// You can set default options
		// just like you can in your Backbone Models.
		// They will be overridden if you pass in an option with the same key.
		this.defaults: {
			"message": "You are destroying!"
		};

		// Behaviors have events that are bound to the views DOM.
		this.events: {
			"click @ui.destroy": "warnBeforeDestroy"
		};
		super(options);
	}

	warnBeforeDestroy() {
		alert(this.options.message);
		// Every Behavior has a hook into the
		// view that it is attached to.
		this.view.destroy();
	}
}