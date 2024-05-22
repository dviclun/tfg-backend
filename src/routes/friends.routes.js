"use strict"
import { Router } from 'express';
import { createFriendRequest, deleteFriend, getAllFriends, getFriendRequests, getNonFriendsByUsername } from '../controllers/friends.controller.js';

const friendsRouter = Router();

friendsRouter.post("/allFriends", getAllFriends);
friendsRouter.post("/getNonFriendsByUsername", getNonFriendsByUsername);
friendsRouter.post("/getFriendRequests", getFriendRequests);
friendsRouter.post("/createFriendRequest", createFriendRequest);
friendsRouter.delete("/deleteFriend", deleteFriend);

export default friendsRouter;
