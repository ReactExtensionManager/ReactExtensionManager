#!/usr/bin/env node

'use strict';

var initialize = require("./init.js");
var install = require("./install.js");
var help = require("./help.js");

(function init() {
  // Run when rem is called in the command line
  // Collect Arguements
  var args = process.argv.slice(2);
  var firstArguement = args[0];

  // Determine what to display
  switch(firstArguement) {
    case "init":
      // Initialize the REM environment
      initialize.init();
      break;
    case "install":
      // Install all react-native modules not yet installed
      install.init();
      break;
    default:
      // Default to help or if user types help
      help.init();
      break
  }

})();
