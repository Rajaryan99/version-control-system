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
    console.error('Error during creating  issue   :', error.message)
    res.status(500).send('Server error')
}
   

}

const updateIssueById = async (req, res) => {

    const { id } = req.params;
    const { title, description, status } = req.body;

    try {

        const issue = await Issue.findById(id);
        if (!issue) {
            return res.status(404).json({message: "issue not Found"})
        }

        issue.title = title;
        issue.description = description;
        issue.status = status;

       const updatedIssue =  await issue.save();

        res.status(200).json({message: "Issue updated"}, updatedIssue)

        
    } catch (error) {
        console.error('Error during updating  issue   :', error.message)
        res.status(500).send('Server error')
    }
}

const deleteIssueById = async (req, res) => {
    const { id } = req.params;

    try {

        const issue = await Issue.findByIdAndDelete(id);
        if (!issue) {
            return res.status(404).json({ message: "issue not Found" })

        }

        res.status(200).json({message: "Issue deleted"})
        
    } catch (error) {
        console.error('Error during deleting  issue   :', error.message)
        res.status(500).send('Server error')
    }
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
