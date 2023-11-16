const http = require('http');
const express = require('express');
const app = express();

const puerto = 80;

const MenusController = require('./controllers/MenuControllers');
app.use(express.json());
app.get('/menus', MenusController.indexGet);

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

app.listen(puerto, function() {
    console.log('servidor en el puerto ' + puerto);
});
