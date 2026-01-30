import mongoose from 'mongoose'
import { Repository } from '../models/repoModel.js'
import { Issue } from '../models/issueModel.js'
import { User } from '../models/userModel.js'



const createIssue = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;
    try {
    
        const issue = new Issue({
            title,
            description,
            repository: id,
        })

        await issue.save();

        res.status(201).json({ message: "IssueCreated" })
    
} catch (error) {
    console.error('Error creating  issue   :', error.message)
    res.status(500).send('Server error')
}
   

}

const updateIssueById = async (req, res) => {
    res.send('Issue update')
}

const deleteIssueById = async (req, res) => {
    res.send('Issue deleted')
}

const getAllIssue = async (req, res) => {
    res.send('all issue fetched')
}

const getIssueById = async (req, res) => {
    res.send('get issue details')
}

export default {
    createIssue,
    updateIssueById,
    deleteIssueById,
    getAllIssue,
    getIssueById
}
