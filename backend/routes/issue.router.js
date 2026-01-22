import express from 'express'
import issueController from '../controllers/issueController.js';


export const issueRouter = express.Router();

issueRouter.post('/issue/create', issueController.createIssue)
issueRouter.put('/issue/:id', issueController.updateIssueById)
issueRouter.delete('/issue/:id', issueController.deleteIssueById)
issueRouter.get('/issue/all', issueController.getAllIssue)
issueRouter.get('/issue/:id', issueController.getIssueById)