import conexion from '../database/db.js';

export const save = (req, res)=>{
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  conexion.query(`INSERT INTO VEHICULOS SET ?`,
    {tipo, marca, color},
    (err,result)=>{
      if(err) throw err;
      console.log("grabado correctamente")
      res.redirect('/');
    }
  );
}

export const hardDelete = (req, res)=>{
  const id = req.params.id;
  conexion.query(`DELETE FROM VEHICULOS WHERE ID =?`,
    [id],
    (err,result)=>{
      if(err) throw err;
      console.log("Registro eliminado: ",id)
      res.redirect('/');
    }
  );
}

export const update = (req, res)=>{
  const id = req.params.id;
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  conexion.query(`UPDATE VEHICULOS SET ? WHERE ID = ?`,
    [{TIPO: tipo, MARCA: marca, COLOR: color}, id],
    (err,result)=>{
      if(err) throw err;
      console.log("grabado correctamente")
      res.redirect('/');
    }
  );
}