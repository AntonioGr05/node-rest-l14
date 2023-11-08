const http = require('http');

const puerto = 80;

const servidor = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

servidor.listen(puerto, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
});
