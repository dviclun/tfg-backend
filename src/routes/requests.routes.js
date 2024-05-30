"use strict"
import { Router } from 'express';
import { getRequestResponse, getRequestsByUserId, sendRequest } from '../controllers/requests.controller.js';

const requestsRouter = Router();

requestsRouter.post("/sendRequest", sendRequest);
requestsRouter.post("/getRequestsByUserId", getRequestsByUserId);
requestsRouter.post("/getRequestResponse", getRequestResponse);

export default requestsRouter;