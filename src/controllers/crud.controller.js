import conexion from '../database/db.js';

export const save = (req, res)=>{
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  //console.log(tipo, marca, color);

  conexion.query(`INSERT INTO VEHICULOS SET ?`,
    {tipo, marca, color},
    (err,result)=>{
      if(err) throw err;
      console.log("grabado correctamente")
      //res.redirect('/');
    }
  );
}

