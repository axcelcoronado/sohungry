import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import mongoose from 'mongoose';

const app = express();

//Coneccion a al base de datos
mongoose.Promise = global.Promise;
const urlDb = 'mongodb://localhost:27017/sohungry';
mongoose.connect(urlDb, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(mongoose => {
    console.log("Conectando a la base de datos");
}).catch(e => {
    console.log('error', e);
});


//middle ware on express
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})