import mongoose, { Schema } from "mongoose";

interface IUser {
    name:string
    email:string
    password:string
    handle:string
}

const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
})

const User = mongoose.model<IUser>('User', userSchema)

export default User