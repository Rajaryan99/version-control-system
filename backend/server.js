import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers' //hideBin() removes the default Node.js entries (node path and script path) from process.argv, so yargs only receives the actual user-typed command-line arguments.
import { intiRepo } from './controllers/init.js'
import { addRepo } from './controllers/add.js'
import { commit } from './controllers/commit.js'
import { pushRepo } from './controllers/push.js'
import { pullRepo } from './controllers/pull.js'
import { revertRepo } from './controllers/revert.js'

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
    .command("st", "Starting the server", {}, startServer)
    .command('init', 'Initialise a new repository', {}, intiRepo)
    .command('add <file>', "add file to the repository", (yargs) => {
        yargs.positional('file', {
            describe: "Fileto add to the staging area",
            type: "string"
        });
    },
        (argv) => {
            addRepo(argv.file);
        }
    )
    .command('commit <message>', "files are ready to push", (yargs) => {
        yargs.positional('message', {
            describe: 'add a message for commit',
            type: 'string'
        })
    },
        (argv) => {
            commit(argv.message);
        }
    )
    .command('push', 'push commit to S3', {}, pushRepo)
    .command('pull', "Pull commit from S3", {}, pullRepo)
    .command('revert <commitID>', "revert to specific commit ", (yargs) => {
        yargs.positional('commitID', {
            describe: 'commit ID to revert to',
            type: "string"
        })
    },
        (argv) => {
            revertRepo(argv.commitID);
        }
    )
    .demandCommand(1, "You nees at least one command")
    .help().argv;

function startServer() {
        console.log('server logic callled')
    }
