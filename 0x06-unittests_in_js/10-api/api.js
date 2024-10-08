const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (!isNaN(req.params.id)) {
    res.send(`Payment methods for cart ${req.params.id}`);
  } else {
    res.status(404).send('Not a number');
  }
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login',  (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }
  
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;