//llamamos a la conexion de la DB
const conexion = require('../database/db');

//Guardar
exports.save = (req, res)=>{
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const estado = req.body.estado;
    conexion.query('INSERT INTO tareas SET ?',{titulo:titulo, descripcion:descripcion, estado:estado}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');         
        }
        });
    };

//Actualizar
exports.update = (req, res)=>{
    const id = req.body.id;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const estado = req.body.estado;
    conexion.query('UPDATE tareas SET ? WHERE id = ?',[{titulo:titulo, descripcion:descripcion, estado:estado}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
        });
    };