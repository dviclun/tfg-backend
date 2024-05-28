"use strict"
import { Router } from 'express';
import { addMessage, getMessages } from '../controllers/chat.controller.js';

const chatRouter = Router();

chatRouter.post("/addMessage", addMessage);
chatRouter.post("/getMessages", getMessages);

export default chatRouter;