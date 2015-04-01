/*
 * React Extensions Manager
 * help command
 */


'use strict';

var helpText = "\nWelcome to REM (React Extensions Manager)! \
          \nHere are some commands to help you get started:\
        \n\ninit: initialize a REM Podfile and install available modules\
          \ninstall: install any available modules\
          \nhelp: display this help dialog\n";

module.exports = {
  output: helpText,
  init: function() {
    console.log(helpText);
  }
};
