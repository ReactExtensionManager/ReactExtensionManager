var fs = require('fs');

describe('rem initialize tests', function() {
  it('will try and fail to initialize an empty directory', function() {
    jest.dontMock('../src/init');
    var init = require('../src/init');
    expect(function() {
      init.init();
    }).toThrow(new Error("Podfile does not exist. Try doing 'pod init' before running this command."));

    fs.unlinkSync('./REM-Podfile');
  });
});
