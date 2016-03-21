#Marionette CLI

Marionette CLI is the command line utility that provides RequireJS/CommonJS/ES6 app structure.

##Install

Run `npm install -g marionette-cli` or add dependency in your `package.json` file and run `npm install`

##Features
* Generate app skeleton
* Generate backbone/marionette files
* Support different module types (RequireJS, CommonJS, ES6)

##Commands
###Set
```
set [options] <type>  Change module type. Short - s
Usage: set [options] <type>
```

Example: `mt set rjs` <br />
Example: `mt s rjs`

###New
```
new [options] Create new project. Short - n
Usage: new [options]
```

Example: `mt new` <br />
Example: `mt n` <br />
Example: `mt n folderName` - will genarate app in `folderName` folder<br />

Command copying best practices (most stared examples of applications) from github.

####Generated files content

* `ES6` file content:<br/>
```javascript
export default Marionette.LayoutView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
});
```
[more](examples.md#ES6)<br/>

* `CommonJS` file content:<br/>
```javascript
"use strict";
var LayoutView = Marionette.LayoutView.extend({
	//stuff
	//Doc - http://marionettejs.com/docs/v2.4.4/marionette.layoutview.html
});
module.exports = LayoutView;
```
[more](examples.md#CommonJS)<br/>

* `RequireJS` file content:<br/>
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
[more](examples.md#RequireJS)<br/>

####Projects:
* [RequireJS](https://github.com/davidsulc/structuring-backbone-with-requirejs-and-marionette) example from David Sulc
* [CommonJS](https://github.com/samccone/marionette-browserify) example from Sam Saccone
* [ES6](https://github.com/thejameskyle/marionette-wires) example from James Kyle

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


###Want to run CLI from your code?
```
var cli = require('marionette-cli/lib/cli');

cli.run(['generate', '--help']);
```