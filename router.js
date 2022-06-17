const express = require('express');
const router = express.Router();

//llama conexion de la DB
const conexion = require('./database/db');

//ruta para query todos los registros
router.get('/', (req, res)=>{           
     conexion.query('SELECT * FROM tareas',(error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('index.ejs', {data:results});                                               
        }   
    })
});

//ruta para enviar los datos en formato json
router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM tareas',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
});

//ruta formulario nuevo registro
router.get('/create', (req,res)=>{
    res.render('create');
});

//ruta editar un registro seleccionado
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM tareas WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {titulo:results[0]});            
        }        
    });
});

//ruta eliminar un registro seleccionado 
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM tareas WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

//llama los metodos del CRUD
const crud = require('./controllers/crud');
const { json } = require('express');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;