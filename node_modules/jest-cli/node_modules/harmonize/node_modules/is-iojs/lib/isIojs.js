'use strict';

var cp = require('child_process');

module.exports = (function () {
  if (!cp.execSync) {
    return false;
  }
  /**
   * @TODO: Make some reliable test for v1.0.0 and v1.0.1 versions
   */
  if (~[ 'v1.0.0', 'v1.0.1' ].indexOf(process.version)) {
    return true;
  }
  return /iojs\.org/.test(cp.execSync('"' + process.execPath + '" -h', { encoding: 'ascii' }));
})();
