exports.run = function() {
	var program = require('commander');
	var fs = require('fs-extra');
	var path = require('path');
	var util = require('util');
	var config = require('./config.json');

	//program.version(require('./package.json').version);

	program
		.command('setup <type>')
		.description('Chnage module type')
		.option('-t --type <type>', 'Module type')
		.action(function(type) {
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
		});


	program
		.command('new <type>')
		.description('Create new project')
		.option('-t --type <type>', 'Module type')
		.action(function(type) {
			switch(type) {
				case 'rjs':
					var src = path.join(__dirname, 'generators', type);
					//copying files
					for	(var i = 0; i < config.appFiles.length - 1; i++) {
						var fileSrc = path.join(src, config.appFiles[i]);
						var newFileSrc = path.join(process.cwd(), config.appFiles[i]);
						fs.copy(fileSrc, newFileSrc, function (err) {
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
	//@todo program.command('genarate <type>')...
	program.parse(process.argv);
};