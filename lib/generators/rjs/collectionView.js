define('collectionView', ['marionette'], function(Marionette) {
	"use strict";

	return Marionette.CollectionView.extend({
		childView: Marionette.ItemView.extend({})
	});
});