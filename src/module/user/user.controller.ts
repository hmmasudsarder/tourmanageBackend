import { Request, Response } from "express";
import User from "./user.model";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await userService.createUser(payload)

        res.json({
            message: "Create a user successfully",
            data: result
        })
    } catch (error) {
        res.json({
            state: false,
            message: "Somthing went worring",
            error
        })
    }
}

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUsers();
        res.send({
            state: false,
            message: "User get successfully",
            result
        })
    } catch (error) {
        res.json({
            state: false,
            message: "Somthing went worring",
            error
        })
    }
}

export const userController = {
    createUser,
}