const http = require('http');
const express = require('express');
const app = express();

const puerto = 80;

const MenusController = require('./controllers/MenuControllers');
const CategoriaController = require('./controllers/CategoriaControllers');
const ProductoController = require('./controllers/ProductoControllers');
const ProductosTipoController = require('./controllers/ProductosTipoControllers');


// end point para ver los menus
app.use(express.json());
app.get('/menus', MenusController.indexGet);

app.get('/categorias', CategoriaController.indexGet);

app.get('/productos', ProductoController.indexGet);

app.get('/productos-tipos', ProductosTipoController.indexGet);

// endpoint para ver el menu por id
app.get('/menus/:id', MenusController.getById);




app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo'); 
});

app.listen(puerto, function() {
    console.log('servidor en el puerto ' + puerto);
});
