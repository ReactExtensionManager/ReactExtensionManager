
jest.dontMock('../src/help');

describe('rem help tests', function() {
 it('ensures help output is the same as help.output()', function() {
   var help = require('../src/help');
   expect(help.init()).toBe(console.log(help.output));
 });

});
