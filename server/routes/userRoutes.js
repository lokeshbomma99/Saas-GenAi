import express, { Router } from 'express'
import { getPublishedCreations, getUserCreation, toggleLikeCreation } from '../controllers/userController.js'
import { auth } from '../middlewares/auth.js';

const userRouter = express.Router()

userRouter.get ('/get-user-creations',auth ,getUserCreation);
userRouter.get ('/get-published-creations',auth ,getPublishedCreations);
userRouter.post ('/toggle-like-creations',auth ,toggleLikeCreation);

export default userRouter;