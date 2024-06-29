import { IUser } from "./user.interface"
import User from "./user.model"

const createUser = async(payload: IUser)=> {
    const result = await User.create(payload)
}

export const userService = {
    createUser
}