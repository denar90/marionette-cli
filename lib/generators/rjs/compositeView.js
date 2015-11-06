define('collectionView', ['marionette'], function(Marionette) {
		
	return Marionette.CompositeView.extend({
		childView: Marionette.ItemView.extend({})
	});
});