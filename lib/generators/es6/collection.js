import Model from './model';

export default class Collection extends Backbone.Collection {
	initialize() {
		this.model = Model;
		super(options);
	}
}