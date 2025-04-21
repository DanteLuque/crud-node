import express from 'express';
import conexion from '../database/db.js';
import {
  save,
  update,
  hardDelete
} from '../controllers/crud.controller.js';

const crudRouter = express.Router();

crudRouter.get('/', (req, res) => {
  conexion.query("SELECT * FROM VEHICULOS", (error, result) => {
    if (error) throw error;
    res.render('index', { vehiculos: result });
  })
})

crudRouter.get('/create', (req, res) => { res.render('create'); })
crudRouter.post('/create', save)

crudRouter.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  conexion.query("SELECT * FROM VEHICULOS WHERE ID = ?", 
    [id],
    (err, results)=>{
      if(err) throw(err);
      res.render('edit', { vehiculo: results[0] });
    }
  )
})
crudRouter.post('/edit:id', update);

crudRouter.get('/delete/:id', hardDelete);


export default crudRouter;