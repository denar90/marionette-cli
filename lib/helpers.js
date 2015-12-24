var rigger = require('rigger');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs-extra');
var clone = require("nodegit").Clone.clone;

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

exports.fileCopy = function(file, newFileSrc) {
	fs.copy(file, newFileSrc);
};

exports.gitClone = function(src, folder) {
	clone(src, folder, null);
};