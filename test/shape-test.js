const shapes = require('../src/shapes/square.js');
const test = require('../lib/testing.js');

const testSquare = function() {
  test.assertListsEqual("****\n****\n****\n****\n", shapes.square(4), 'should give square of given length');
}

testSquare();
