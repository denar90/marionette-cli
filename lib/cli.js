var Commander = require('./commander_');
var config = require('./config.json');

exports.run =
	/**
	 * Runs CLI
	 * @param {Array} options Command options
	 */
	function(options) {
		var program = new Commander();
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