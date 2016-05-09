'use strict';

const commands = require('./commands');
const program = require('commander');

class Commander {

  constructor() {
    program.version(require('../package.json').version);

    //set module type
    program
      .command('apply')
      .description('Apply mn-cli to current folder project. Short - a')
      .action(commands.apply);

    //set module type
    program
      .command('set <type> [value]')
      .description('Set config property. Short - s')
      .option('-t --type <type> [value]')
      .action(commands.setProperty);

    //generate new app skeleton
    program
      .command('new [folder]')
      .description('Create new project. Short - n')
      .action(commands.newApp);

    //generate backbone/marionette file
    program
      .command('generate [name] [folder]')
      .description('Generate files for marionette. Short - g')
      .option('-l --layout [name] [folder]', 'Layout')
      .option('-c --collection [name]', 'Collection')
      .option('-m --model [name]', 'Model')
      .option('-r --router [name]', 'Router')
      .option('-o --object [name]', 'Object or controller')
      .option('-v --itemView [name]', 'Item view')
      .option('-b --behavior [name]', 'Behavior')
      .option('--collectionView [name]', 'Collection view')
      .option('--compositeView [name]', 'Composite view')
      .action(commands.generate);
  }

  /**
	 * Parses args
	 * @param {string} args
	 */
	parse(args) {
		program.parse(args);
		//remove program listeners
		program.removeAllListeners();
	}
}

module.exports = Commander;