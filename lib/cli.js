exports.run = function() {
	var program = require('commander');
	var fs = require('fs-extra');
	var path = require('path');
	var util = require('util');
	var config = require('./config.json');
	var commands = require('./commands');

	program.version(require('../package.json').version);

	program
		.command('set <type>')
		.description('Change module type. Short - s')
		.option('-t --type <type>', 'Module type')
		.action(commands.setType);

	program
		.command('new')
		.description('Create new project. Short - n')
		.action(commands.newApp);

	program
		.command('generate')
		.description('Generate files for marionette. Short - g')
		.option('-l --layout [name]', 'Layout')
		.option('-c --collection [name]', 'Collection')
		.option('-m --model [name]', 'Model')
		.option('-r --router [name]', 'Router')
		.option('-o --object [name]', 'Object or controller')
		.option('-v --itemView [name]', 'Item view')
		.option('--collectionView [name]', 'Collection view')
		.option('--compositeView [name]', 'Composite view')
		.action(commands.generate);

	var args = process.argv.slice();
	var command = args[2];
	var validCommand = config.aliases[command];

	if (validCommand) {
		args[2] = validCommand;
	}
	program.parse(args);
	//@todo validate if no option was passed
};