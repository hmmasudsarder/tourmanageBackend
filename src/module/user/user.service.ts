import User from "./user.model"

const createUser = async(payload: string)=> {
    const result = await User.create(payload)
}

export const userService = {
    createUser
}