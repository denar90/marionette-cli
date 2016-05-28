var rigger = require('rigger');
var fs = require('fs');
var simpleGit = require('simple-git')();

exports.rigger =
	/**
	 * Creates new file including sources from original one
	 * @param {string} file File
	 * @param {string} targetPath New file name
	 */
	function(file, targetPath) {
		rigger(
			file,
			{ output: targetPath},
			function(error, content) {
				if (error) {
					console.log(error);
					return;
				}
				fs.writeFile(targetPath, content, 'utf8');
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
		simpleGit.clone(src, folder);
	};