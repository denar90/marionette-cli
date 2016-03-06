import ItemView from './itemView';

export default Marionette.CompositeView.extend({
	childVie: ItemView,

	initialize() {
		//do stuff
	}
});