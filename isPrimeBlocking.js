const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('server is up and running');
});
app.get('/isprime', (req, res) => {
    const jsonResponse = isPrime(parseInt(req.query.number));
    res.send(jsonResponse);
});

app.listen(3000, () => console.log('Listening on port 3000'));

// http://localhost:3000/isprime?number=2367949
// http://localhost:3000/isprime?number=936868033
// http://localhost:3000/isprime?number=29355126551
