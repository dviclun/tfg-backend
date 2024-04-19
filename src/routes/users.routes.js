"use strict"
import { Router } from 'express'
import { getUserByEmail, getUserByID, getUserByUsername, getUserForLogin, getUsers, registerUser } from '../controllers/users.controllers.js';

const router = Router();

router.post("/user", getUserForLogin);
router.get("/users", getUsers);
router.post("/userById", getUserByID);
router.get("/userByUsername/:username", getUserByUsername);
router.get("/userByEmail/:email", getUserByEmail);
router.post("/registerUser", registerUser);

export default router; //exportamos