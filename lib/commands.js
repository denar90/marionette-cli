var config = require('./config.json');
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	setType: function(type) {
		if (config.moduleTypes.indexOf(type) > -1) {
			if (config.moduleType != type) {
				var configFile = path.join(__dirname, 'config.json');
				fs.readFile(configFile, 'utf8', function (err, data) {
					if (err) {
						return console.log(err);
					}
					data = JSON.parse(data);
					data.moduleType = type;
					fs.writeFile(configFile, JSON.stringify(data, null, 4), 'utf8', function (err) {
						if (err) {
							return console.log(err);
						}
					});
				});
			}
		} else {
			return console.log('Wrong type, evaliable types: %j', config.moduleTypes);
		}
	},
	newApp: function() {
		var type = config.moduleType;
		switch(type) {
			case 'rjs':
				var src = path.join(__dirname, 'generators', type);
				//copying files
				for	(var i = 0; i < config.appFiles.length - 1; i++) {
					var fileSrc = path.join(src, config.appFiles[i]);
					var newFileSrc = path.join(process.cwd(), config.appFiles[i]);
					fs.copy(fileSrc, newFileSrc, function(err) {
						if (err) {
							return console.log(err);
						}
					});
				}
				break;
			case 'umd':
				return console.log('WIP');
			case 'cjs':
				return console.log('WIP');
			case 'b':
				return console.log('WIP');
			default:
				return console.log('Wrong module type');
		}
	},
	generate: function(cmd) {
		var argOption;
		var argValue;
		for (var i = 0; i < config.generateOptions.length - 1; i++) {
			var option = config.generateOptions[i];
			if (cmd[option]) {
				argOption = option;
				argValue = cmd[option];
				break;
			}
		}
		var sourceFile = argOption + '.js';
		var fileSrc = path.join(__dirname, 'generators', config.moduleType, sourceFile);

		var fileName = argOption;
		if (typeof argValue !== 'boolean') {
			fileName = argValue;
		}
		fileName = fileName + '.js';
		var newFileSrc = path.join(process.cwd(), fileName);
		//copying files
		fs.copy(fileSrc, newFileSrc, function(err) {
			if (err) {
				return console.log(err);
			}
		});
	}
};