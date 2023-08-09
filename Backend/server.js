const express = require('express')
const app = express()

const hostname = '172.16.58.86';

const PORT = 3000; // You can choose any available port
app.listen(PORT,hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

app.get('/', (req, res) => {
    res.send('Hello, this is your Node.js server!');
});

const Upload = require('./Routers/Upload');
const Retreive = require('./Routers/Upload');


app.use('/', Upload);
app.use('/', Retreive);


