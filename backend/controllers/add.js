import FS from 'fs'
import path from 'path'

const fs = FS.promises




export async function addRepo(filePath) {
    const repoPath = path.resolve(process.cwd(), '.gitsh')
    const stagingPath = path.join(repoPath, 'staging');

    try {

        await fs.mkdir(stagingPath, { recursive: true })
        const fileName = path.basename(filePath);
        await fs.copyFile(filePath, path.join(stagingPath, fileName))
        console.log(`File ${fileName} added to staging area!`)
        
    } catch (error) {
        console.log('Error in adding file : ', error)
    }
}