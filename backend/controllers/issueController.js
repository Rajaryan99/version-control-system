
const createIssue = (req, res) => {
    res.send('Issue Created')
}

const updateIssueById = (req, res) => {
    res.send('Issue update')
}

const deleteIssueById = (req, res) => {
    res.send('Issue deleted')
}

const getAllIssue = (req, res) => {
    res.send('all issue fetched')
}

const getIssueById = (req, res) => {
    res.send('get issue details')
}

export default {
    createIssue,
    updateIssueById,
    deleteIssueById,
    getAllIssue,
    getIssueById
}
