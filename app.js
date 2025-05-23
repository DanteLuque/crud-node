import express from 'express';
import crudRouter from './src/routes/crud.route.js';
import dotenv from "dotenv";
dotenv.config();


const PORT=process.env.PORT;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({extended: false}));
app.use(express(express.json));

app.use(crudRouter);

app.listen(PORT, ()=>{
  console.log("I'M ALIVE");
  console.log(`corriendo en el puerto ${PORT}`);
})