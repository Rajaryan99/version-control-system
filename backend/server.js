import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers' //hideBin() removes the default Node.js entries (node path and script path) from process.argv, so yargs only receives the actual user-typed command-line arguments.
import { intiRepo } from './controllers/init.js'

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

yargs(hideBin(process.argv))
    .command('init', 'Initialise a new repository', {}, intiRepo)
    .demandCommand(1, "You nees at least one command")
    .help().argv;

