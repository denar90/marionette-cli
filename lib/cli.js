exports.run = function() {
	var program = require('commander');
	var fs = require('fs-extra');
	var path = require('path');
	var util = require('util');
	var config = require('./config.json');

	program.version(require('../package.json').version);

	program
		.command('set <type>')
		.description('Change module type')
		.option('-t --type <type>', 'Module type')
		.action(function(type) {
			if (config.moduleType != type && (config.moduleTypes.indexOf(type) > -1)) {
				var configFile = path.join(__dirname, 'config.json');
				fs.readFile(configFile, 'utf8', function (err, data) {
					if (err) {
						return console.log(err);
					}
					data = JSON.parse(data);
					data.moduleType = type;
					fs.writeFile(configFile, JSON.stringify(data, null, 4), 'utf8', function (err) {
						if (err) return console.log(err);
					});
				});
			} else {
				console.error('Wrong type, evaliable types: %j', config.moduleTypes);
				process.exit(1);
			}
		});

	program
		.command('new')
		.description('Create new project')
		.action(function() {
			var type = config.moduleType;
			switch(type) {
				case 'rjs':
					var src = path.join(__dirname, 'generators', type);
					//copying files
					for	(var i = 0; i < config.appFiles.length - 1; i++) {
						var fileSrc = path.join(src, config.appFiles[i]);
						var newFileSrc = path.join(process.cwd(), config.appFiles[i]);
						fs.copy(fileSrc, newFileSrc, function(err) {
							if (err) return console.error(err);
						});
					}
					break;
				case 'umd':
					console.log('WIP');
					process.exit(1);
				case 'cjs':
					console.log('WIP');
					process.exit(1);
				case 'b':
					console.log('WIP');
					process.exit(1);
				default:
					console.error('Wrong module type');
					process.exit(1);
			}
		});

	program
		.command('generate [name]')
		.description('Generate files for marionette')
		.option('-l --layout [name]', 'Layout')
		.option('-c --collection [name]', 'Collection')
		.option('-m --model [name]', 'Model')
		.option('-r --router [name]', 'Router')
		.option('-v --view [name]', 'Item view')
		.option('-o --object [name]', 'Object or controller')
		.option('-collection --cntr [name]', 'Collection')
		.option('-collectionView --cV [name]', 'Collection view')
		.option('-compositeView --comV [name]', 'Composite view')
		.action(function(name, cmd) {
			if (cmd.layout) console.log('  - layout');
			if (cmd.collection) console.log('  - collection');
			if (cmd.model) console.log('  - model');
			if (cmd.router) console.log('  - router');
			if (cmd.view) console.log('  - view');
			if (cmd.object) console.log('  - object');
			if (cmd.cntr) console.log('  - cntr');
			if (cmd.cV) console.log('  - cV');
			if (cmd.comV) console.log('  - comV');
			//@todo genearete files
		});

	program.parse(process.argv);
};