import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT;


const connectDB = async () => {
    try {

        const DB = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('DB connected successfully')

        app.listen(port, () => {
            console.log(`server is running on http://localhost:${port}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

connectDB();

