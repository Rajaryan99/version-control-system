import FS from 'fs'
import path from 'path'

const fs = FS.promises




export async function addRepo(filePath) {
    const repoPath = path.resolve(process.cwd(), '.gitsh')
    const stagingPath = path.join(repoPath, 'staging');

    try {

        await fs.mkdir(stagingPath, { recursive: true })
        const fileName = path.basename(filePath);

        
        
    } catch (error) {
        console.log('Error in adding file : ', error)
    }
}