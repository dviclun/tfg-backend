"use strict"

import express from 'express';
import usersRouter from './routes/users.routes.js';
import trainingsRouter from './routes/trainings.routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { PORT } from './config.js'
import entriesRouter from './routes/entries.routes.js';
import friendsRouter from './routes/friends.routes.js';
//import './config.js'

// Obtener __dirname en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); //creado el objeto con la instacia de express

//habilitar CORS
app.use(cors());
//middleware
app.use(express.json());
//Servir archivos estaticos
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')));

app.use(usersRouter);
app.use(trainingsRouter);
app.use(entriesRouter);
app.use(friendsRouter);
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