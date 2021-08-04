const express = require('express');
const { fork } = require('child_process');

const app = express();

app.get('/', (req, res) => {
    res.send('server is up and running');
});
app.get('/isprime', (req, res) => {
    const childProcess = fork('./isPrime.js');
    childProcess.send({ number: parseInt(req.query.number) });
    childProcess.on('message', (message) => res.send(message));
});

app.listen(3000, () => console.log('Listening on port 3000'));

// http://localhost:3000/isprime?number=29355126551
