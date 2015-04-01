/*
 *
 */

'use strict';

var fs = require('fs');

var Project = function (path) {
  // Add path to project
  this.path = path;
}

Project.prototype.getPackage = function() {
  // Get Package.json from project
  // Parse as JSON

  // path is directory try to read package.json
  var filePackage = this.path + "/package.json";
  var packageText;
  try {
    packageText = fs.readFileSync(filePackage, 'utf8');
  } catch (err) {
    throw err;
  }

  // Try to parse file as json
  // Return parsed json file
  try {
    var packageJSON = JSON.parse(packageText);
    return packageJSON;
  } catch(err) {
    // Error parsing to JSON
    // Return null

    console.error(err);
    return null;
  }
}

Project.prototype.isReactNativeProject = function() {
  // Checks to confirm package is react native
  var jsonPackage = this.getPackage();
  if (jsonPackage["react-native-module"] != null) {
    return true;
  }
  return false;
}

Project.prototype.install = function() {
  // Adds project to REM-Podfile
  // Install using CocoaPods
  var jsonPackage = this.getPackage();

  var podfilePath = null;
  var reactModuleProperties = jsonPackage["react-native-module"];

  if (reactModuleProperties != null) {
    podfilePath = reactModuleProperties["podfile"];
  }
  if (podfilePath != null) {
    var podfile;
    try {
      podfile = fs.readFileSync("./REM-Podfile", "utf8");
    } catch(err) {
      throw err;
    }

    if (podfile.indexOf(jsonPackage["name"]) != -1) {
      console.log(jsonPackage["name"] + " is already included as a dependency.\n");
    } else {
      var newDependency = "pod '" + jsonPackage["name"] + "', :path => 'node_modules/" + jsonPackage["name"] + "/'\n";
      try {
        fs.appendFileSync('./REM-Podfile', newDependency);
      } catch(err) {
        throw err;
      }
      console.log("Added dependency: " + jsonPackage["name"]);
      return true;
    }
  } else {
    console.log("Alert: Pod dependency not found");
    return false;
  }
}

module.exports = {
  Project: Project
}
