const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const conexion = require('./database/db');

app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(port, function() {
    console.log(`Servidor ejecutando en el puerto ${port}`);
});