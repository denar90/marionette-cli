var rigger = require('rigger');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs');
var Git = require("nodegit");

exports.rigger =
	/**
	 * Creates new file including sources from original one
	 * @param {string} file File
	 * @param {string} targetPath New file name
	 */
	function(file, targetPath) {
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

exports.fileCopy =
	/**
	 * Copies file
	 * @param {string} file Original file name
	 * @param {string} newFileSrc New file name
	 */
	function(file, newFileSrc) {
		fs.createReadStream(file).pipe(fs.createWriteStream(newFileSrc));
	};

exports.gitClone =
	/**
	 * Clones git repo into folder
	 * @param {string} src Path to repo
	 * @param {string} folder Folder clone to
	 */
	function(src, folder) {
		Git.Clone(src, folder).catch(function(err) {
			console.log(err);
		});
	};