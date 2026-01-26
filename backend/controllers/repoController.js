import mongoose from 'mongoose'
import Repository from '../models/repoModel.js'
import issue from '../models/issueModel.js'
import user from '../models/userModel.js'


const createRepository = async (req, res) => {
    const { owner, name, issues, content, description, visibility } = req.body; 
    
    try {

        if (!name) {
            return res.status(404).json({Error: "Repository name is required!!"})
        }
        
    } catch (error) {
        console.error('Error during repository creation :', error.message)
        res.status(500).send('Server error')
    }
}

const getAllRepositories = async (req, res) => {
    res.send('All Repository fetched!')
}

const fetchRepositoryById = async (req, res) => {
    res.send(' Repository detailed fetched!')
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
