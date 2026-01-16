import FS from 'fs'
import path from 'path'

const fs = FS.promises;





export async function intiRepo() {

    const repoPath = path.resolve(process.cwd(), '.gitsh')
    const commitPath = path.join(repoPath, 'commits');

    try {
        
    } catch (error) {
        
    }
}

// export default { intiRepo }
// module.exports ={intiRepo}