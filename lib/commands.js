'use strict';

const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf');
const process = require('process');
const helpers = require('./helpers');
const fs_utils = require('./utils/fs_utils');
const commands = require('./utils/commands');
const config = require('./config.json');
const settings = require('./settings');
const CONSTS = require('./consts');
const localProjectFilePath = path.resolve(process.cwd(), 'package.json');

module.exports = {

  /**
   * Applies cli config to current project
   */
  apply: function() {
    fs_utils.applyConfig(localProjectFilePath);
  },

	/**
	 * Sets cnfig property
	 * @param {string} property
	 * @param {string} value
	 */
	setProperty: function(property, value) {
    fs_utils.setConfigProperty(localProjectFilePath, property, value);
	},

	/**
	 * Generates new app
	 * @param {string} folder
	 */
	newApp: function(folder) {
    fs_utils.getCliConfig().then(config => {
      const type = config.moduleType;
      const builder = config.builder;
      const appSrc = settings.apps[type][builder];
      let projectFolder = path.resolve(process.cwd(), config.projectFolder);
      //if project folder was set
      if (folder) {
        projectFolder = path.resolve(process.cwd(), config.projectFolder, folder);
      }
      //clone into tmp folder and move after into projectFolder
      helpers.gitClone(appSrc, CONSTS.TMP_PATH).then(() => {
        fs.move(CONSTS.TMP_PATH, projectFolder, (err) => {
          if (err) {
            console.log(err);
            //remove tmp folder
            rimraf(CONSTS.TMP_PATH, Function.prototype)
          }
        });
      });
    });
	},

	/**
	 * Generates file
	 * @param {string} fileName
	 * @param {string} folder
	 * @param {Object} cmd
	 */
	generate: function(fileName, folder, cmd) {
    fs_utils.getCliConfig().then(config => {
      const moduleType = config.moduleType;
      const fileType = commands.getGeneratedOption(cmd);
      fileName = fileName || fileType;
      const file = fileType + '.js';
      const fileSrc = path.join(__dirname, 'generators', moduleType, file);
      let generatedFile = path.resolve(process.cwd(), config.projectFolder, fileName);
      //if project folder was set
      if (folder) {
        generatedFile = path.resolve(process.cwd(), config.projectFolder, folder, fileName);
      }
      fs_utils.generateFile(fileSrc, generatedFile);
    });
	}
};
