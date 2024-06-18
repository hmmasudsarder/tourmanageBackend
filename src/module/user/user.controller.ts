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
            state: true,
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

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const result = await userService.getSingleUser(userId);
        res.send({
            state: true,
            message: "User getting successfully",
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

const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const body = req.body;
        const result = await userService.updateUser(userId, body)
        res.send({
            state: true,
            message: "User Updated successfully",
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
    getAllUser,
    getSingleUser,
    updateUser
}