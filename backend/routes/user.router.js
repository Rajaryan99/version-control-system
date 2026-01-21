import express from 'express';
import  userController  from '../controllers/userController.js'


export const userRouter = express.Router();

userRouter.get('/allUsers', userController.getAllUsers)
userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.get('/userProfile', userController.getUserProlfile)
userRouter.put('/updateProfile', userController.updateUserProfile)
userRouter.delete('/deleteProfile', userController.deleteUserProfile)