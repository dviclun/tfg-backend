"use strict"
import { Router } from 'express'
import { getProfileImage, getUserByEmail, getUserByID, getUserByUsername, getUserForLogin, getUsers, getUsersForRanking, registerUser, updateBiography, updateUserPoints, updateUserRole, uploadUserImage, verifyCaptcha } from '../controllers/users.controllers.js';
import multer from 'multer';
import fs from 'fs';
import { registerUserValidator, updateBiographyValidator, updateUserPointsValidator } from '../validators/users.validators.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname) // Nombre original del archivo
      }
})

const upload = multer({ storage: storage });

const usersRouter = Router();

usersRouter.post("/user", getUserForLogin);
usersRouter.get("/users", getUsers);
usersRouter.get("/usersRanking", getUsersForRanking);
usersRouter.post("/userById", getUserByID);
usersRouter.get("/userByUsername/:username", getUserByUsername);
usersRouter.get("/userByEmail/:email", getUserByEmail);
usersRouter.post("/registerUser", registerUserValidator, registerUser);
usersRouter.put("/updatePoints", updateUserPointsValidator, updateUserPoints);
usersRouter.post('/verifyCaptcha', verifyCaptcha);
usersRouter.put("/updateBio", updateBiographyValidator,updateBiography);
usersRouter.post("/uploadUserImage", uploadUserImage);
usersRouter.post("/getUserProfileImage", getProfileImage);
usersRouter.post("/updateUserRole", updateUserRole);

export default usersRouter; //exportamos