const express =require('express');
const Task = require('../model/task');
const router = express.Router();

router.post('/',async(req,res)=>{
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task); 
});

router.get('/',async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
})

router.put('/:id',async(req,res)=>{
    const task = await Task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.json(task);
})


router.delete('/:id',async(req,res)=>{
    const task = await Task.findByIdAndDelete({_id:req.params.id});
    res.status(204).end()
})

module.exports =router;