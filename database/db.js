//llamamos a MySQL para la conexion
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'atareados'  
});

conexion.connect((error)=>{
    if (error) {
      console.error('Error de conexión: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

  module.exports = conexion;