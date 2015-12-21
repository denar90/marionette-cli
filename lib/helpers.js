var rigger = require('rigger');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs-extra');

exports.rigger = function(file, targetPath) {
	rigger(
		file,
		{ output: path.join(process.cwd())},
		function(err, content) {
			mkdirp(path.dirname(targetPath), function(err) {
				fs.writeFile(targetPath, content, 'utf8');
			});
		}
	);
};