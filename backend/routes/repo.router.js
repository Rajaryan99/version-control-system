import express from 'express';
import repoController from '../controllers/repoController.js';


export const repoRouter = express.Router();

repoRouter.post('/repo/create', repoController.createRepository)
repoRouter.get('/repo/all', repoController.getAllRepositories)
repoRouter.get('/repo/:id', repoController.fetchRepositoryById)
repoRouter.get('/repo/name/:name', repoController.fetchRepositoryByName)
repoRouter.get('/repo/user/:userID', repoController.fetchRepositoryForCurrewntUser)
repoRouter.put('/repo/update/:id', repoController.updateRepositoryById)
repoRouter.patch('/repo/toggle/:id', repoController.toggleVisbilityById)
repoRouter.delete('/repo/delete/:id', repoController.deleteRepositoryById)