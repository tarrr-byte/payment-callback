const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('/callback_payment', (req, res) => {
  console.log('=== Payment Callback Diterima ===');
  console.log(req.body);

  fs.appendFileSync('payment_log.txt', JSON.stringify(req.body) + '\n');

  res.status(201).json({ status: 'received' });
});

app.get('/', (req, res) => {
  res.send('Url callback active');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
