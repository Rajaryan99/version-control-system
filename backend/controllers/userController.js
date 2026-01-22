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

 const signup = async (req, res) => {
     const { username, email, password } = req.body;

     try {
         
         await connectClient();
         const db = client.db("githubclone");
         const userCollection = db.collection('users')

         const user = await userCollection.findOne({ email })
         
         if (email) {
             return res.status(400).json({message: 'user already exist'})
         }

        
        
     } catch (error) {
        res.status(500).json({error: 'Signup failed'})
     }

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