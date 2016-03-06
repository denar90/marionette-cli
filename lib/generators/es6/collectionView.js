import ItemView from './itemView';

export default Marionette.CollectionView.extend({
	childVie: ItemView,

	initialize() {
		//do stuff
	}
});