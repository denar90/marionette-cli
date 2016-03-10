var program = require('commander');
var commands = require('./commands');
var config = require('./config.json');

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

exports.run =
	/**
	 * Runs CLI
	 * @param {Array} options Command options
	 */
	function(options) {
		if (options) {
			//hack to emulate process.argv
			options.unshift('', '');
		}
		//process short command names
		var args = options || process.argv.slice();
		var command = args[2];
		var validCommand = config.aliases[command];

		if (validCommand) {
			args[2] = validCommand;
		}
		program.parse(args);
	};