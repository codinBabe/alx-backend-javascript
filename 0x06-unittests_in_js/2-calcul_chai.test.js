const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('should return 4', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
        it('should return 5', () => {
            expect(calculateNumber('SUM', 2, 3)).to.equal(5);
        });
    })
    describe('type == "SUBTRACT"', () => {
        it('should return -2', () => {
            expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        });
        it('should return -1', () => {
            expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
        });
    })
    describe('type == "DIVIDE"', () => {
        it('should return 0.5', () => {
            expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
        });
        it('should return 0.6666666666666666', () => {
            expect(calculateNumber('DIVIDE', 2, 3)).to.equal(0.6666666666666666);
        });
        it('should return "Error"', () => {
            expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
        });
    })
});