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
        const commitDir = path.join(commitPath, commitID)
        await fs.mkdir(commitDir, { recursive: true })
        
        const files = await fs.readdir(stagePath);
        for (const file of files) {
            await fs.copyFile(
                path.join(stagePath, file),
                path.join(commitDir, file)
            )
        }
        
        await fs.writeFile(path.join(commitDir, 'commit.json'), JSON.stringify({ message, data: new Date().toISOString() }))
        
        console.log(`Commit ${commitID} created with message : ${message}`)
    } catch (error) {

        console.log('Error in commiting file : ', error)

    }
}