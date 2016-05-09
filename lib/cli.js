'use strict';

const Commander = require('./commander_');
const settings = require('./settings');

exports.run =
	/**
	 * Runs CLI
	 * @param {Array} options Command options
	 */
	function(options) {
		let program = new Commander();
		if (options) {
			//hack to emulate process.argv
			options.unshift('', '');
		}
		//process short command names
    let args = options || process.argv.slice();
    let command = args[2];
    let validCommand = settings.aliases[command];

		if (validCommand) {
			args[2] = validCommand;
		}
		program.parse(args);
	};