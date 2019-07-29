const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public'  ) );

// Express hbs
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

// Este path pertenece a la pagina home.hbs
app.get('/', (req, res) => {

res.render('home', {
  nombre: 'gustavo'

});

});

// Estd path pertenece a la pagina About.hbs
app.get('/about', (req, res) => {
res.render('about', {
});

});
 
app.listen(port, () => {
  console.log(`Escuchando peticiones el puerto: ${ port }`);
});