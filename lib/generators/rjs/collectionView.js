define('collectionView', ['marionette'], function(Marionette) {

	return Marionette.CollectionView.extend({
		childView: Marionette.ItemView.extend({})
	});
});