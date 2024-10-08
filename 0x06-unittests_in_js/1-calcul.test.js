const assert = require('assert');
const calculateNumber =  require('./1-calcul')

describe('calculateNumber', function () {
  it('should return 6 when type is SUM and adding 1.4, 4.5', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return -4 when type is SUBTRACT and subtracting 1.4, 4.5', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return 0.2 when type is DIVIDE and dividing 1.4, 4.5', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return Error when type is DIVIDE and dividing 1.4 and 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
