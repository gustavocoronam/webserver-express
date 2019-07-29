

// Se declara una constante con la librería http,
// que ya viene por default con el package.json
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    


    let salida = {
        nombre: 'Gustavo',
        edad: 22,
        url: req.url
    }

    res.write(JSON.stringify(salida));
        // res.write('Hola Mundo!');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');