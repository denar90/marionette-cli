import ItemView from './itemView';

export default Marionette.CompositeView.extend({
    childView: ItemView,

	initialize() {
		//do stuff
	}
});