"use strict"
import { Router } from 'express'
import { getMuscularGroups } from '../controllers/trainings.controllers.js';

const trainingsRouter = Router();

trainingsRouter.get("/muscularGroups", getMuscularGroups);



export default trainingsRouter; //exportamos