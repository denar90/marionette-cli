import ItemView from './itemView';

export default Marionette.CollectionView.extend({
	childView: ItemView,

	initialize() {
		//do stuff
	}
});