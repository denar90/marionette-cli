#Marionette CLI

Marionette CLI is the command line utility that provides RequireJS/CommonJS/ES6 app structure, file generating, build process and more.
I was inspired by [discussion](https://github.com/marionettejs/backbone.marionette/issues/1489)

##Install

Run `npm install -g marionette-cli` or add dependency in your `package.json` file and run `npm install`

##Features
* Generate app skeleton
* Generate backbone/marionette files
* Support different module types (RequireJS, CommonJS, ES6)

##Commands
### Apply
```
apply Apply configuration for current project by adding it to your 
project `package.json` file. Short - a
Usage: a
```

Example: `mt apply` <br />
Example: `mt a`

##Commands
###Set
```
set <type> [value]  Chnage value for config property. Short - s
Usage: set <type> [value] <type>
```

Example: `mt set moduleType rjs` <br />
Example: `mt s moduleType rjs`

###New
```
new [options] Create new project. Short - n
Usage: new [options]
```

Example: `mt new` <br />
Example: `mt n` <br />
Example: `mt n folderName` - will generate simple application in `folderName` folder<br />

###Generate
```
Usage: generate [options] [folder]
Generate files for marionette. Short - g
```

Options:
```
    -l --layout [name]       Layout
    -c --collection [name]   Collection
    -m --model [name]        Model
    -r --router [name]       Router
    -o --object [name]       Object or controller
    -v --itemView [name]     Item view
    --collectionView [name]  Collection view
    --compositeView [name]   Composite view
```

Example: `mt generate -l` - will create marionette layout file `layout.js` <br />
Example: `mt g -l` - the same as above

Example: `mt generate -l myName` - will create marionette layout file `myName.js` <br />
Example: `mt g -l` - the same as above

Example: `mt generate -l myName myFolder` - will create marionette layout file `myName.js` in folder `myFolder` <br />
Example: `mt g -l myName myFolder` - the same as above

> Notice: If you want to generate file in special folder, AlWAYS pass filename
e.g. `mt g -l myName myFolder`

####Generated files content

* `ES6` file content:<br/>
```javascript
export default Marionette.LayoutView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
});
```
[more](examples.md#es6)<br/>

* `CommonJS` file content:<br/>
```javascript
"use strict";
var LayoutView = Marionette.LayoutView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
});
module.exports = LayoutView;
```
[more](examples.md#commonjs)<br/>

* `RequireJS` file content:<br/>
```javascript
define(['marionette'], function (Marionette) {
	"use strict";
	var LayoutView = Marionette.LayoutView.extend({
		//stuff
		//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
	});
	return LayoutView;
});
```
[more](examples.md#requirejs)<br/>

###Using Atom as your IDE?
Get lasy and use [MarionetteJS CLI package for atom](https://atom.io/packages/atom-marionettejs-cli)

###Want to run CLI from your code?
```
var cli = require('marionette-cli/lib/cli');

cli.run(['generate', '--help']);
```
