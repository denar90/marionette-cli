var config = require('./config.json');
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	setType: function(type) {
		//define if put type is present in config
		if (config.moduleTypes.indexOf(type) > -1) {
			//change type if it's not already set
			if (config.moduleType != type) {
				var configFile = path.join(__dirname, 'config.json');
				//reading file
				fs.readFile(configFile, 'utf8', function (err, data) {
					if (err) {
						return console.log(err);
					}
					data = JSON.parse(data);
					data.moduleType = type;
					//rewriting file
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
	},
	generate: function(cmd) {
		var argOption;
		var argValue;
		//define file type (layout, model, collection etc) and name from command
		for (var i = 0; i < config.generateOptions.length - 1; i++) {
			var option = config.generateOptions[i];
			if (cmd[option]) {
				argOption = option;
				argValue = cmd[option];
				break;
			} else {
				return console.log('Option for generate file was not set');
			}
		}

		//generating file
		var sourceFile = argOption + '.js';
		var fileSrc = path.join(__dirname, 'generators', config.moduleType, sourceFile);
		var fileName = argOption;
		//changing file name if it was set
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