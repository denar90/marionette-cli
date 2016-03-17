#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
try {
	//var localCli = path.join(path.resolve('.'), 'node_modules', 'marionette-cli', 'lib', 'cli');
	var localCli = path.join(path.resolve('.'), 'lib', 'cli');
	require(localCli).run();
} catch (e) {
	var globalCli = path.join(path.dirname(fs.realpathSync(__filename)), '..', 'lib', 'cli');
	require(globalCli).run();
}