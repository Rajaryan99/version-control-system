import mongoose from 'mongoose'
import { Repository } from '../models/repoModel.js'
import { Issue } from '../models/issueModel.js'
import { User } from '../models/userModel.js'


const createRepository = async (req, res) => {
    const { owner, name, issues, content, description, visibility } = req.body; 
    
    try {

        if (!name) {
            return res.status(404).json({Error: "Repository name is required!!"})
        }

        if (!mongoose.Types.ObjectId.isValid(owner)) {
            return res.status(404).json({ Error: "Invalid user ID" })

        }

        const newRepository = new Repository({
            name,
            description,
            visibility,
            content,
            owner,
            issues
        });

        const result = await newRepository.save();
        res.status(201).json({message:"Repository Created", repositoryID: result._id})
        
    } catch (error) {
        console.error('Error during repository creation :', error.message)
        res.status(500).send('Server error')
    }
}

const getAllRepositories = async (req, res) => {

    try {

        const repo = await Repository.find({}).populate("owner").populate("issues");

        res.json(repo);
        
    } catch (error) {
        console.error('Error during  fetching repository  :', error.message)
        res.status(500).send('Server error')
    }
}

const fetchRepositoryById = async (req, res) => {

    const repoID = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(repoID)) {
        return res.status(400).json({ message: 'Invalid repository ID' });
    }

    try {

        const repo = await Repository.findById({ _id: repoID }).populate("owner").populate('issues');
        if (!repo) {
            return res.status(404).json({ message: 'Repository not found' });
        }
        
        res.json(repo);
    } catch (error) {
        console.error('Error during  fetching repository by ID  :', error.message)
        res.status(500).send('Server error')
    }
}

const fetchRepositoryByName = async (req, res) => {
    res.send(' Repository detailed by name fetched!')
}

const fetchRepositoryForCurrewntUser = async (req, res) => {
    res.send(' Repository for logedin yser Fetched!')
}

const updateRepositoryById = async (req, res) => {
    res.send(' Repository updated!')
}

const  toggleVisbilityById = async (req, res) => {
    res.send(' Repository visibiity')
}


const deleteRepositoryById = async (req, res) => {
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
