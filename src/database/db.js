import mysql from 'mysql';
import dotenv from "dotenv";
dotenv.config();

const conexion = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
});

conexion.connect((err)=>{
  if(err){
    console.error(`Error de conexión: ${err}`);
    return;
  }

  console.log("Conexión exitosa");
})

export default conexion;