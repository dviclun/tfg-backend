"use strict"

import express from 'express';
import usersRouter from './routes/users.routes.js';
import trainingsRouter from './routes/trainings.routes.js';
import cors from 'cors';

import { PORT } from './config.js'
//import './config.js'

const app = express(); //creado el objeto con la instacia de express

//habilitar CORS
app.use(cors());
//middleware
app.use(express.json());

app.use(usersRouter);
app.use(trainingsRouter);
//servidor a la escucha por el puerto 3000

//middlewarre, controlar si se pasa una ruta en la url
app.use((req, res) => {
    res.status(404).json({
        message: "endpoint no encontrado"
    })
})
app.listen(PORT, () => {
    console.log('escuchando solicitud');
})