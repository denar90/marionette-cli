'use strict';

const fs = require('fs-extra');
const path = require('path');
const rigger = require('rigger');
const mnConfig = require('../config');

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
      (error, content) => {
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

exports.readFile =
  /**
   * Reads file from current folder (where process was run)
   * @param {string} fileName
   * @returns {Promise}
   */
  function(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  };

exports.writeFile =
  /**
   * Writes file from current folder (where process was run)
   * @param {string} fileName
   * @param {Object} fileData
   * @returns {Promise}
   */
  function(fileName, fileData) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, JSON.stringify(fileData, null, 4), 'utf8', (err) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(true);
      });
    });
  };

exports.applyConfig =
  /**
   * Applies config to project
   * @param {string} filePath
   */
  function(filePath) {
    return this.readFile(filePath).then(config => {
      if (!config.hasOwnProperty('mn-cli')) {
        config['mn-cli'] = mnConfig;
        return this.writeFile(filePath, config);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

exports.setConfigProperty =
  /**
   * Sets property for config file
   * @param {string} filePath
   * @param {string} property
   * @param {Object} value
   */
  function(filePath, property, value) {
    filePath = filePath || 'test_package.json';

    return this.readFile(filePath).then((config) => {
      if (config.hasOwnProperty('mn-cli')) {
        //if cli applied for current project, change config
        config['mn-cli'][property] = value;
        return this.writeFile(filePath, config).catch(err => {
          console.log(err);
        });
      } else {
        //if cli wasn't apply for current project change global cli config
        return setGlobalConfig.apply(this, [property, value]);
      }
    }).catch(err => {
      //if file couldn't be opened change global cli config
      return setGlobalConfig.apply(this, [property, value]);
    });

    /**
     * Sets property and value for global cli config
     * @param {string} property
     * @param {Object} value
     */
    function setGlobalConfig(property, value) {
      const configPath = path.resolve(__dirname, 'config.json');
      return this.readFile(configPath).then(config => {
        config[property] = value;
        return this.writeFile(configPath, config).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      });
    }
  };

exports.getCliConfig =
  /**
   * Gets cli configuration
   * @param {string} localConfigPath
   * @returns {Promise}
   */
  function(localConfigPath) {
    localConfigPath = localConfigPath || 'test_package.json';

    let cliConfig = {};
    return this.readFile(localConfigPath).then(config => {
      if (config.hasOwnProperty('mn-cli')) {
        //if cli applied for current project, get config
        cliConfig = config['mn-cli'];
        cliConfig.isLocal = true;
        return cliConfig;
      } else {
        //if cli wasn't apply for current project get global cli config
        return getGlobalCliConfig.apply(this);
      }
    }).catch(err => {
      //if file couldn't be opened get global cli config
      return getGlobalCliConfig.apply(this);
    });

    function getGlobalCliConfig() {
      const configPath = path.resolve(__dirname, '../config.json');
      //if file couldn't be opened get global cli config
      return this.readFile(configPath).then(config => {
        cliConfig = config;
        cliConfig.isLocal = true;
        return cliConfig;
      });
    }
  };

exports.generateFile =
  /**
   * Generates file
   * @param {string} fileSrc path to source file
   * @param {string} generatedFile path to newly generated file
   */
  function(fileSrc, generatedFile) {
    return this.getCliConfig().then(config => {
      fs.exists(generatedFile, (exists) => {
        if (exists) {
          return console.log(`File ${generatedFile} already exists`);
        } else {
          switch (config.moduleType) {
            case 'rjs':
            case 'cjs':
              this.rigger(fileSrc, generatedFile);
              break;
            case 'es6':
              this.fileCopy(fileSrc, generatedFile);
              break;
            default:
              return console.log('Wrong module type');
          }
        }
      });
    });
  };
