import FS from 'fs'
import path from 'path'

const fs = FS.promises;





export async function intiRepo() {

    const repoPath = path.resolve(process.cwd(), '.gitsh')
    const commitPath = path.join(repoPath, 'commits');

    try {

        await fs.mkdir(repoPath, { recursive: true });
        await fs.mkdir(commitPath, { recursive: true });
        await fs.writeFile(
            path.join(repoPath, 'config.json'),
            JSON.stringify({ bucket: 's3 bucket' })
        );

        console.log('Repository initalized!')
        
    } catch (error) {
        console.log('Error initialising repository', error)
    }
}

// export default { intiRepo }
// module.exports ={intiRepo}