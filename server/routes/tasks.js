const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (req,res) => {
    Task.find()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({message: e});
        })
})

router.post('/', (req,res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    });

    task.save()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({message: e});
        })
})

router.delete('/:id', (req,res) => {
    Task.deleteOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({message: e});
        })
})

router.patch('/:id', (req,res) => {
    Task.updateOne({_id: req.params.id},
        {
            $set: {description: req.body.description}
        })
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({message: e});
        })
})

module.exports = router;