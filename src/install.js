
/*
 * React Extensions Manager
 * install command
 */

'use strict';

var initialize = require("./init.js");
var project = require("./install/project.js");
var fs = require('fs');
var sys = require('sys');
var cp = require('child_process');
var exec = cp.exec;

// Define Podfile markers for REM
var podFileGeneratedText = "# @generated by React Extension Manager\n# Reference the local pods that live in node_modules";

module.exports = {
  init: function() {
    // Check for initialization
    var isRemInstalled = initialize.isInstalled;
    if (isRemInstalled){
      // REM has installed environment
      var podfile;
      try {
        podfile = fs.readFileSync("./REM-Podfile", 'utf8');
      } catch(err) {
        if (err.code === 'ENOENT') {
          initialize.init();
          podfile = fs.readFileSync("./REM-Podfile", 'utf8')
        } else {
          throw err;
        }
      }

      // Traverse each node module
      console.log("Installing available React Native modules...\nSearching for available modules...\n");

      var files;
      try {
        files = fs.readdirSync("./node_modules/");
      } catch(err) {
        throw err;
      }

      files.forEach(function(file) {
        // Check to see if this is a directory
        if (file.charAt(0) != ".") {
          var isDirectory;
          try {
            isDirectory = fs.lstatSync("./node_modules/" + file).isDirectory()
          } catch(err) {
            throw err;
          }

          if (isDirectory) {
            // File is directory try to read package.json
            var filePath = "./node_modules/" + file;
            var reactProject = new project.Project(filePath);

            // check to see if this is a React Native Module
            if (reactProject.isReactNativeProject) {
              // File is a React Native Module
              console.log("React Native Module Found: " + file);

              // Try to install Pod
              reactProject.install();

              // Check to see if
            }
          }
        }
      });

      // Run pod install on all new dependencies
      console.log("Installing dependencies...");
      exec("pod install", function(error, stdout, stderr) {
        console.log(stdout);
      });
    } else {
      initialize.init();
    }
  }
};