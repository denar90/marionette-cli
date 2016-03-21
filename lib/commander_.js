var commands = require('./commands');
var program = require('commander');
var Commander = function() {
	program.version(require('../package.json').version);

	//set module type
	program
		.command('set <type>')
		.description('Change module type. Short - s')
		.option('-t --type <type>', 'Module type')
		.action(commands.setType);

	//generate new app skeleton
	program
		.command('new [folder]')
		.description('Create new project. Short - n')
		.action(commands.newApp);

	//generate backbone/marionette file
	program
		.command('generate [folder]')
		.description('Generate files for marionette. Short - g')
		.option('-l --layout [name]', 'Layout')
		.option('-c --collection [name]', 'Collection')
		.option('-m --model [name]', 'Model')
		.option('-r --router [name]', 'Router')
		.option('-o --object [name]', 'Object or controller')
		.option('-v --itemView [name]', 'Item view')
		.option('-b --behavior [name]', 'Behavior')
		.option('--collectionView [name]', 'Collection view')
		.option('--compositeView [name]', 'Composite view')
		.action(commands.generate);

	/**
	 * Parses args
	 * @param {string} args
	 */
	function parse(args) {
		program.parse(args);
		//remove program listeners
		program.removeAllListeners();
	}

	/**
	 * Exports
	 * @lends Commander
	 */
	return {
		parse: parse
	};
};

module.exports = Commander;