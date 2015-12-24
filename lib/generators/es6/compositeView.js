import ItemView from './itemView';

export default class CompositeView extends Marionette.CompositeView {
	constructor(options) {
		this.childView = ItemView;
		super(options);
	}
}