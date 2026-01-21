import express from 'express'
import { userRouter } from './user.router.js';

export const mainRouter = express.Router();
 
mainRouter.use(userRouter)

mainRouter.get('/', (req, res) => {
    res.send('hellow World')
})