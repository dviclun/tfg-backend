"use strict"
import { Router } from 'express'
import { getUserByEmail, getUserByID, getUserByUsername, getUserForLogin, getUsers, registerUser } from '../controllers/users.controllers.js';

const usersRouter = Router();

usersRouter.post("/user", getUserForLogin);
usersRouter.get("/users", getUsers);
usersRouter.post("/userById", getUserByID);
usersRouter.get("/userByUsername/:username", getUserByUsername);
usersRouter.get("/userByEmail/:email", getUserByEmail);
usersRouter.post("/registerUser", registerUser);

export default usersRouter; //exportamos