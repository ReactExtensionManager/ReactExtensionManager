'use strict';

var assert = require('assertthat'),
    proxyquire = require('proxyquire');

suite('isIojs', function () {
  suiteSetup(function () {
    proxyquire.noPreserveCache();
  });

  test('is a function.', function (done) {
    var isIojs = require('../lib/isIojs');
    assert.that(isIojs).is.ofType('boolean');
    done();
  });

  test('returns true if runtime is io.js.', function (done) {
    var isIojs = proxyquire('../lib/isIojs', {
      /*eslint-disable camelcase*/
      child_process: {
        execSync: function () {
          return 'foo iojs.org bar';
        }
      }
      /*eslint-enable camelcase*/
    });
    assert.that(isIojs).is.true();
    done();
  });

  test('returns false if runtime is not io.js.', function (done) {
    var isIojs = proxyquire('../lib/isIojs', {
      /*eslint-disable camelcase*/
      child_process: {
        execSync: function () {
          return 'foo bar';
        }
      }
      /*eslint-enable camelcase*/
    });
    assert.that(isIojs).is.false();
    done();
  });
});
