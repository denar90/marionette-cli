#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
try {
	const localCli = path.join(path.resolve('.'), 'lib', 'cli');
	require(localCli).run();
} catch (e) {
	const globalCli = path.join(path.dirname(fs.realpathSync(__filename)), '..', 'lib', 'cli');
	require(globalCli).run();
}