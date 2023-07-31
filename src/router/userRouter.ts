import {Router} from "express";
import userController from "../controller/UserController";

export const userRouter = Router();
userRouter.get('/account',userController.showAll)
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
