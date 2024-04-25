"use strict"
import { Router } from 'express'
import { getArmsVideos, getLegsVideos, getMuscularGroups, getVideosByGroup } from '../controllers/trainings.controllers.js';

const trainingsRouter = Router();

trainingsRouter.get("/muscularGroups", getMuscularGroups);
trainingsRouter.get("/armsVideos", getArmsVideos);
trainingsRouter.get("/legsVideos", getLegsVideos);
trainingsRouter.get("/videos/:muscular_group", getVideosByGroup);





export default trainingsRouter; //exportamos