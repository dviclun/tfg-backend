"use strict"
import { Router } from 'express'
import { addVideo, deleteVideo, getArmsVideos, getLegsVideos, getMuscularGroupById, getMuscularGroups, getVideosByGroup } from '../controllers/trainings.controllers.js';

const trainingsRouter = Router();

trainingsRouter.get("/muscularGroups", getMuscularGroups);
trainingsRouter.get("/armsVideos", getArmsVideos);
trainingsRouter.get("/legsVideos", getLegsVideos);
trainingsRouter.get("/videos/:muscular_group", getVideosByGroup);
trainingsRouter.get("/muscularGroup/:group_id", getMuscularGroupById);
trainingsRouter.post("/videos", addVideo);
trainingsRouter.delete("/videos", deleteVideo);






export default trainingsRouter; //exportamos