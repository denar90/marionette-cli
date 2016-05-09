'use strict';

const fs = require('fs-extra');
const path = require('path');
const settings = require('../settings');

exports.getGeneratedOption =
  function(cmd) {
    for (var i = 0; i < settings.generateOptions.length; i++) {
      var option = settings.generateOptions[i];
      if (cmd[option]) {
        return option;
      }
    }
  };