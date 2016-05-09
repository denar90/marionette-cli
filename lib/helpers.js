'use strict';

const Git = require('nodegit');

exports.gitClone =
	/**
	 * Clones git repo into folder
	 * @param {string} src Path to repo
	 * @param {string} folder Folder clone to
	 */
	function(src, folder) {
		return Git.Clone(src, folder).catch((err) => {
      console.log(err);
		});
	};