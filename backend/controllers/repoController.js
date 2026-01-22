const createRepository = (req, res) => {
    res.send('Repository created!')
}

const getAllRepositories = (req, res) => {
    res.send('All Repository fetched!')
}

const fetchRepositoryById = (req, res) => {
    res.send(' Repository detailed fetched!')
}

const fetchRepositoryByName = (req, res) => {
    res.send(' Repository detailed by name fetched!')
}

const fetchRepositoryForCurrewntUser = (req, res) => {
    res.send(' Repository for logedin yser Fetched!')
}

const updateRepositoryById = (req, res) => {
    res.send(' Repository updated!')
}

const  toggleVisbilityById = (req, res) => {
    res.send(' Repository visibiity')
}


const deleteRepositoryById = (req, res) => {
    res.send(' Repository deleted!')
}

export default {
    createRepository,
    getAllRepositories,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoryForCurrewntUser,
    updateRepositoryById,
    toggleVisbilityById,
    deleteRepositoryById
}
