import FS from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid';

const fs = FS.promises;

export async function commit(message) {

    const repoPath = path.resolve(process.cwd(), '.gitsh')
    const stagePath = path.join(repoPath, 'staging')
    const commitPath = path.join(repoPath, 'commits')

    try {

        const commitID = uuidv4();
        
    } catch (error) {

        console.log('Error in commiting file : ', error)

    }
}