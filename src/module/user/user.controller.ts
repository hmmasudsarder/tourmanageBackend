import { Request, Response } from "express";
import User from "./user.model";

const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await User.create(payload)
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

export const userController = {
    createUser,
}