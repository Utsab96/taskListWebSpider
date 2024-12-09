//importing the express
const express=require('express');
const checkAuth=require('../middleware/checkAuth')
//requiring the taskmode
const taskModel=require('../models/task.model')
//creating router for task
const taskRouter=express.Router();


//creating get end point for getting all the task
taskRouter.get("/all",checkAuth,(req,res)=>{
    taskModel.find()
    .then((taskInfo)=>{
        if(!taskInfo){
            res.status(404).json({
                message:'failed to get task'
            })
        }else{
            res.status(200).json({
                message:'here is all the task',
                data:taskInfo
            })
        }
    }).catch((error)=>{
        res.status(500).json(error)
    })
})

//creating end point for getting any task by its id;

taskRouter.get("/find/:tid"(req,res)=>{
    const taskId=req.params.tid
    taskModel.findById(taskId)
    .then((taskInfo)=>{
        if(!taskInfo){
            res.status(404).json({
                message:'task not found',
            })
        }else{
            res.status(200).json({
                mesage:'Task found',
                data:taskInfo
            })
        }
    })
})
//creating get end point for pending task

taskRouter.get("/findPending/"(req,res)=>{
    taskModel.findOne({status: 'pending'})
    .then((taskInfo)=>{
        if(taskInfo){
            res.status(404).json({
                message:'task found',
                data:taskInfo
            })
        }else{
            res.status(200).json({
                mesage:'Task not found'
            })
        }
    })
})
//creating api for complted task

taskRouter.get("/findCompleted/",(req,res)=>{
    taskModel.findOne({status: 'completed'})
    .then((taskInfo)=>{
        if(taskInfo){
            res.status(404).json({
                message:'task found',
                data:taskInfo
            })
        }else{
            res.status(200).json({
                mesage:'Task not found'
            })
        }
    })
})
//creating end point for high priority task

taskRouter.get("/findHigh/",(req,res)=>{
    taskModel.findOne({priority: 'high'})
    .then((taskInfo)=>{
        if(taskInfo){
            res.status(404).json({
                message:'task found',
                data:taskInfo
            })
        }else{
            res.status(200).json({
                mesage:'Task not found'
            })
        }
    })
})

//creating end point for low priority task

taskRouter.get("/findLow/",(req,res)=>{
    taskModel.findOne({priority: 'low'})
    .then((taskInfo)=>{
        if(taskInfo){
            res.status(404).json({
                message:'task found',
                data:taskInfo
            })
        }else{
            res.status(200).json({
                mesage:'Task not found'
            })
        }
    })
})

//creating the task post router for adding the task

taskRouter.post("/add",(req,res)=>{
    taskModel.create({
        "title":req.body.title,
        "description":req.body.description,
        "status":req.body.status,
        "priority":req.body.priority
    }).then((taskInfo)=>{
        if(!taskInfo){
            res.status(404).json({
                mesage:'task added failed',
            })
        }else{
            res.status(200).json({
                message:'task added',
                data:taskInfo
            })
        }
    }).catch((error)=>{
        req.status(500).json(error)
    })
})

//creating end point for updating task

taskRouter.put("/update/:tid",(req,res)=>{
    const taskId=req.params.tid;
    taskModel.findByIdAndUpdate(taskId,{
        "title":req.body.title,
        "description":req.body.description,
        "status":req.body.status,
        "priority":req.body.priority
    }).then((taskinfo)=>{
        if(!taskinfo){
            res.status(404).json({
                message:'task update failed'
            })
        }else{
            res.status(200).json({
                message:'task updated',
                data:taskinfo
            })
        }
    })

})

//creating end point for the delete task

taskRouter.delete("/delete/:tid",(req,res)=>{
    const taskId=req.params.tid;
    taskModel.findByIdAndDelete(taskId)
    .then((taskInfo)=>{
        if(!taskInfo){
            res.status(404).json({
                message:'task delete failed',
            })
        }else{
            res.status(204).json({
                message:'task deleted succesfully',
                data:taskInfo
            })
        }
    }).catch((error)=>{
        res.status(500).json(error)
    })
})
module.exports=taskRouter;
console.log(`The task router is ready to use`);
