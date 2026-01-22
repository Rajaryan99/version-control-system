import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { MongoClient } from 'mongodb'
import 'dotenv/config'


const uri = process.env.MONGODB_URL

let client;

async function connectClient() {
    if (!client) {
        client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        await client.connect()
    }
}

 const signup = (req, res) => {
    res.send('Signing in')
}

  const login = (req, res) => {
    res.send('Login in')
}

const getAllUsers = (req, res) => {
    res.res('All user fetched')
}


 const getUserProlfile = (req, res) => {
    res.send('Profile Fetched')
}

 const updateUserProfile = (req, res) => {
    res.send('Profile Updated')
}

 const deleteUserProfile = (req, res) => {
    res.send('Profile deleted')
}

 export default {
    getAllUsers,
    signup,
    login,
    getUserProlfile,
    updateUserProfile,
    deleteUserProfile
};