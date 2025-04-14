import express from 'express';
import conexion from '../database/db.js';

const crudRouter = express.Router();

crudRouter.get('/hello', (req, res) => {
  conexion.query("SELECT * FROM VEHICULOS", (error, result) => {
    if (error) throw error;
    //res.send(result);
    //res.render('edit', {dev: 'Dante', skill: 'javascript', friends: ['Juan', 'emerson', ' Bonifacio']})
    res.render('index', { vehiculos : result});
  })
})

export default crudRouter;