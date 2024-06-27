import { Router } from "express";
import { userController } from "./user.controller";

const userRouter = Router();

userRouter.post('/create-user', userController.createUser)
userRouter.get('/', userController.getAllUser)

export default userRouter;