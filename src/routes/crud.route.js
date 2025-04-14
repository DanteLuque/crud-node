import express from 'express';
import conexion from '../database/db.js';
import { save } from '../controllers/crud.controller.js';

const crudRouter = express.Router();

crudRouter.get('/', (req, res) => {
  conexion.query("SELECT * FROM VEHICULOS", (error, result) => {
    if (error) throw error;
    res.render('index', { vehiculos : result});
  })
})

crudRouter.get('/create',(req,res)=>{
  res.render('create');
})

crudRouter.post('/save', save)


export default crudRouter;