import ItemView from './itemView';

export default class CollectionView extends Marionette.CollectionView {
	constructor(options) {
		this.childView = ItemView;
		super(options);
	}
}