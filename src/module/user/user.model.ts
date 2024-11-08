import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        minlength: 3,
        maxlength: 50,
    },
    age: { type: Number, required: [true, 'Please enter your age'] },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            },
            message: '{VALUE} is not a valid email',
        },
        immutable: true,
    },
    photo: String,
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: '{VALUE} is not valid, please provide a valid role',
        },
        default: 'user',
        required: true,
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        required: true,
        default: 'active',
    },
});

const User = model("User", userSchema)
export default User