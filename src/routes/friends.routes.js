"use strict"
import { Router } from 'express';
import { getAllFriends, getNonFriendsByUsername } from '../controllers/friends.controller.js';

const friendsRouter = Router();

friendsRouter.post("/allFriends", getAllFriends);
friendsRouter.post("/getNonFriendsByUsername", getNonFriendsByUsername);

export default friendsRouter;
