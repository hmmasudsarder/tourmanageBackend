import { Router } from "express";
import { userController } from "./user.controller";

const userRouter = Router();

userRouter.post('/create-user', userController.createUser)
userRouter.get('/:id', userController.getSingleUser)
userRouter.put('/:id', userController.updateUser)
userRouter.get('/', userController.getAllUser)
userRouter.delete('/:id', userController.deleteUser)

export default userRouter;