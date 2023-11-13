const http = require('http');
const express = require('express');
const app = express();

const puerto = 80;

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

app.listen(puerto, function() {
    console.log('servidor en el puerto ' + puerto);
});
