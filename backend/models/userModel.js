import mongoose, { Schema } from "mongoose";

  const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
    },

    repositories: [
        {
            default: [],
            type: Schema.Types.ObjectId,
            ref: 'Repository'
        },
    ],
    followedUser: [
        {
            default: [],
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    staRepos: [
        {
            default: [],
            type: Schema.Types.ObjectId,
            ref: 'Repository'
        },
    ],

 })

 export const User = mongoose.model('User', UserSchema)

