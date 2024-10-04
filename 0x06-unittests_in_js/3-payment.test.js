const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
 it('sendPaymentReauestToApi using the calculateNumber function from Utils', function() {
   const calculateNumberSpy = sinon.spy(Utils);

   sendPaymentRequestToApi(100, 20);
   expect(calculateNumberSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
   expect(calculateNumberSpy.calculateNumber.calledOnce).to.be.true
   calculateNumberSpy.calculateNumber.restore

 });
});