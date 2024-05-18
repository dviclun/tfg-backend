"use strict"
import { Router } from 'express'
import { getUserByEmail, getUserByID, getUserByUsername, getUserForLogin, getUsers, getUsersForRanking, registerUser, updateBiography, updateUserPoints, verifyCaptcha } from '../controllers/users.controllers.js';

const usersRouter = Router();

usersRouter.post("/user", getUserForLogin);
usersRouter.get("/users", getUsers);
usersRouter.get("/usersRanking", getUsersForRanking);
usersRouter.post("/userById", getUserByID);
usersRouter.get("/userByUsername/:username", getUserByUsername);
usersRouter.get("/userByEmail/:email", getUserByEmail);
usersRouter.post("/registerUser", registerUser);
usersRouter.put("/updatePoints", updateUserPoints);
usersRouter.post('/verifyCaptcha', verifyCaptcha);
usersRouter.put("/updateBio", updateBiography);

export default usersRouter; //exportamos