const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');
const Task = require('../models/task');

const router = express.Router();

router.use(authMiddleware )

router.get('/', async (req, res) => {
    //populate traz os dados do user
    try{
        const project = await Project.find().populate('user');
        return res.send({project});
    }catch(err){
        return res.status(400).send({error: 'Erro ao carregar projetos'});
    }
});

router.get('/:projectId', async (req, res) => {
    //populate traz os dados do user
    try{
        const project = await Project.findById(req.params.projectId).populate('user');
        return res.send({project});
    }catch(err){
        return res.status(400).send({error: 'Erro ao carregar projeto'});
    }
});

router.post('/', async (req, res) => {
    try{
        const project = await Project.create({...req.body, user: req.userId});
        return res.send({project});
    }catch(err){
        return res.status(400).send({error: 'Erro ao criar novo projeto'});
    }
});

router.put('/:projectId', async (req, res) => {
    res.send({user: req.userId});
});
router.delete('/:projectId', async (req, res) => {
        //populate traz os dados do user
        try{
            await Project.findByIdAndRemove(req.params.projectId);
            return res.send();
        }catch(err){
            return res.status(400).send({error: 'Erro ao deletar projeto'});
        }
});



module.exports = app => app.use('/projects', router);