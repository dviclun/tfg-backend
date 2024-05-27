"use strict"
import { Router } from 'express';
import { acceptFriend, createFriendRequest, deleteFriend, getAllFriends, getFriendRequests, getNonFriendsByUsername, rejectFriend } from '../controllers/friends.controller.js';

const friendsRouter = Router();

friendsRouter.post("/allFriends", getAllFriends);
friendsRouter.post("/getNonFriendsByUsername", getNonFriendsByUsername);
friendsRouter.post("/getFriendRequests", getFriendRequests);
friendsRouter.post("/createFriendRequest", createFriendRequest);
friendsRouter.delete("/deleteFriend", deleteFriend);
friendsRouter.post("/acceptFriend", acceptFriend);
friendsRouter.delete("/rejectFriend", rejectFriend);

export default friendsRouter;
