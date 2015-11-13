define('collectionView', ['marionette'], function(Marionette) {
	"use strict";

	return Marionette.CompositeView.extend({
		childView: Marionette.ItemView.extend({})
	});
});