var fs = require('fs-extra');
var path = require('path');
var process = require('process');
var helpers = require('./helpers');
var config = require('./config.json');

module.exports = {

	/**
	 * Sets module type
	 * @param {string} type
	 */
	setType: function(type) {
		//define if put type is present in config
		if (config.moduleTypes.indexOf(type) > -1) {
            config.moduleType = type;
            fs.writeFile(path.resolve(__dirname, 'config.json'), JSON.stringify(config, null, 4), 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
            });
		} else {
			return console.log('Wrong type, available types: %j', config.moduleTypes);
		}
	},

	/**
	 * Generates new app
	 * @param {string} folder
	 */
	newApp: function(folder) {
		var type = config.moduleType;
		var appPath;
		if (folder) {
			if (path.isAbsolute(folder)) {
				appPath = path.join(folder);
			} else {
				appPath = path.join(process.cwd(), folder);
			}
		} else {
			appPath = path.join(process.cwd());
		}
		var appSrc = config.apps[type];
		helpers.gitClone(appSrc, appPath);
	},

	/**
	 * Generates file
	 * @param {string} folder
	 * @param {Object} cmd
	 */
	generate: function(folder, cmd) {
		var argOption;
		var argValue;
		//define file type (layout, model, collection etc) and name from command
		for (var i = 0; i < config.generateOptions.length; i++) {
			var option = config.generateOptions[i];
			if (cmd[option]) {
				argOption = option;
				argValue = cmd[option];
				break;
			}
		}
		//generating file
		var sourceFile = argOption + '.js';
		var type = config.moduleType;
		var fileSrc = path.join(__dirname, 'generators', type, sourceFile);
		var fileName = argOption;
		//changing file name if it was set
		if (typeof argValue !== 'boolean') {
			fileName = argValue;
		}
		fileName = fileName + '.js';
		var newFileSrc;
		if (folder) {
			if (path.isAbsolute(folder)) {
				newFileSrc = path.join(folder, fileName);
			} else {
				newFileSrc = path.join(process.cwd(), folder, fileName);
			}
		} else {
			newFileSrc = path.join(process.cwd(), fileName);
		}
		fs.exists(newFileSrc, function(exists) {
			if (exists) {
				return console.log('File with name %s already exists', fileName);
			} else {
				switch(type) {
					case 'rjs':
					case 'cjs':
						helpers.rigger(fileSrc, newFileSrc);
						break;
					case 'es6':
						helpers.fileCopy(fileSrc, newFileSrc);
						break;
					default:
						return console.log('Wrong module type');
				}
			}
		});
	}
};
