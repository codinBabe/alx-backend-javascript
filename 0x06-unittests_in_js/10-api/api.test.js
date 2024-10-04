const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id with valid id returns correct response', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id with invalid id returns correct response', (done) => {
    request.get(`${API_URL}/cart/thisisnotanumber`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.be.equal('Not a number');
      done();
    });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.eql({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });

  it('POST /login returns correct response', (done) => {
    request.post(`${API_URL}/login`, {json: { userName: 'Betty' }}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });

});