#Files examples


##ES6

- Backbone.Model

```javascript
export default Backbone.Model.extend({
	//stuff
	//Doc - http://backbonejs.org/#Model
});
```

- Backbone.Collection

```javascript
import Model from './model';

export default Backbone.Collection.extend({
	model: Model,

	initialize() {
		//do stuff
	}
});
```

- Backbone.Marionette.Router

```javascript
export default Marionette.AppRouter.extend({
	appRoutes: {
		'': 'home'
	}
});
```

- Backbone.Marionette.Object

```javascript
export default Marionette.Object.extend({
	home() {
		console.log('home route');
	}
});
```

- Backbone.Marionette.ItemView

```javascript
export default Marionette.ItemView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.itemview.html
});
```

- Backbone.Marionette.CollectionView

```javascript
import ItemView from './itemView';

export default Marionette.CollectionView.extend({
	childVie: ItemView,

	initialize() {
		//do stuff
	}
});
```

- Backbone.Marionette.CompositeView

```javascript
import ItemView from './itemView';

export default Marionette.CompositeView.extend({
	childVie: ItemView,

	initialize() {
		//do stuff
	}
});
```

- Backbone.Marionette.LayoutView

```javascript
export default Marionette.LayoutView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
});
```

- Backbone.Marionette.Behavior

```javascript
export default Marionette.Behavior.extend({
	// You can set default options
	// just like you can in your Backbone Models.
	// They will be overridden if you pass in an option with the same key.
	defaults: {
		"message": "You are destroying!"
	},
	
	// Behaviors have events that are bound to the views DOM.
	events: {
		"click @ui.destroy": "warnBeforeDestroy"
	},
	
	warnBeforeDestroy() {
		alert(this.options.message);
		// Every Behavior has a hook into the
		// view that it is attached to.
		this.view.destroy();
	}
});
```

##CommonJS

- Backbone.Model

```javascript
"use strict";
var Model = Backbone.Model.extend({
	//stuff
	//Doc - http://backbonejs.org/#Model
});
module.exports = Model;
```

- Backbone.Collection

```javascript
"use strict";
var Collection = Backbone.Collection.extend({
	model: Backbone.Model.extend()
});
module.exports = Collection;
```

- Backbone.Marionette.Router

```javascript
"use strict";
var Router = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'home'
	}
});
module.exports = Router;
```

- Backbone.Marionette.Object

```javascript
"use strict";
var Object = Marionette.Object.extend({
	initialize: function(options) {
		console.log('initialize')
	},
	home: function() {
		console.log('home route');
	}
});
module.exports = Object;
```

- Backbone.Marionette.ItemView

```javascript
"use strict";
var ItemView = Marionette.ItemView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.itemview.html
});
module.exports = ItemView;
```

- Backbone.Marionette.CollectionView

```javascript
"use strict";
var CollectionView = Marionette.CollectionView.extend({
	childView: Marionette.ItemView.extend({})
});
module.exports = CollectionView;
```

- Backbone.Marionette.CompositeView

```javascript
"use strict";
var CompositeView = Marionette.CompositeView.extend({
	childView: Marionette.ItemView.extend({})
});
module.exports = CompositeView;
```

- Backbone.Marionette.LayoutView

```javascript
"use strict";
var LayoutView = Marionette.LayoutView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
});
module.exports = LayoutView;
```

- Backbone.Marionette.Behavior

```javascript
"use strict";
var Behavior = Marionette.Behavior.extend({
	// You can set default options
	// just like you can in your Backbone Models.
	// They will be overridden if you pass in an option with the same key.
	defaults: {
		"message": "You are destroying!"
	},

	// Behaviors have events that are bound to the views DOM.
	events: {
		"click @ui.destroy": "warnBeforeDestroy"
	},

	warnBeforeDestroy: function() {
		alert(this.options.message);
		// Every Behavior has a hook into the
		// view that it is attached to.
		this.view.destroy();
	}
});
module.exports = Behavior;
```

##RequireJS

- Backbone.Model

```javascript
define('model', ['backbone'], function(Backbone) {
	"use strict";
    var Model = Backbone.Model.extend({
    	//stuff
    	//Doc - http://backbonejs.org/#Model
    });

	return Model;
});
```

- Backbone.Collection

```javascript
define('collection', ['backbone'], function(Backbone) {
	"use strict";
    var Collection = Backbone.Collection.extend({
    	model: Backbone.Model.extend()
    });

	return Collection;
});
```

- Backbone.Marionette.Router

```javascript
define('router',['backbone.marionette'], function(Marionette) {
	"use strict";
    var Router = Marionette.AppRouter.extend({
    	appRoutes: {
    		'': 'home'
    	}
    });

	return AppRouter;
});
```

- Backbone.Marionette.Object

```javascript
define('object', ['marionette'], function(Marionette) {
	"use strict";
    var Object = Marionette.Object.extend({
    	initialize: function(options) {
    		console.log('initialize')
    	},
    	home: function() {
    		console.log('home route');
    	}
    });

	return Object;
});
```

- Backbone.Marionette.ItemView

```javascript
define('itemView', ['marionette'], function(Marionette) {
	"use strict";
    var ItemView = Marionette.ItemView.extend({
    	//stuff
    	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.itemview.html
    });

	return ItemView;
});
```

- Backbone.Marionette.CollectionView

```javascript
define('collectionView', ['marionette'], function(Marionette) {
	"use strict";
    var CollectionView = Marionette.CollectionView.extend({
    	childView: Marionette.ItemView.extend({})
    });

	return CollectionView;
});
```

- Backbone.Marionette.CompositeView

```javascript
define('collectionView', ['marionette'], function(Marionette) {
	"use strict";
    var CompositeView = Marionette.CompositeView.extend({
    	childView: Marionette.ItemView.extend({})
    });

	return CompositeView;
});
```

- Backbone.Marionette.LayoutView

```javascript
define('layout', ['marionette'], function (Marionette) {
	"use strict";
    var LayoutView = Marionette.LayoutView.extend({
    	//stuff
    	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
    });

	return LayoutView;
});
```

- Backbone.Marionette.Behavior

```javascript
define('behavior', ['marionette'], function (Marionette) {
	"use strict";
    var Behavior = Marionette.Behavior.extend({
    	// You can set default options
    	// just like you can in your Backbone Models.
    	// They will be overridden if you pass in an option with the same key.
    	defaults: {
    		"message": "You are destroying!"
    	},
    
    	// Behaviors have events that are bound to the views DOM.
    	events: {
    		"click @ui.destroy": "warnBeforeDestroy"
    	},
    
    	warnBeforeDestroy: function() {
    		alert(this.options.message);
    		// Every Behavior has a hook into the
    		// view that it is attached to.
    		this.view.destroy();
    	}
    });

	return Behavior;
});
```

