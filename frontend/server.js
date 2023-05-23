'use strict';

const express = require('express');

const port = 80;
const host = '0.0.0.0';

const app = express();

app.use('/resources', express.static(__dirname + '/resources'));
app.use('/', express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
});