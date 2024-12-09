const mongoose=require('mongoose');
//creating the databse for task List
const db=require('../models/connection');
const taskSchema=mongoose.Schema({
    "title":{
        type:String,
        required:true
    },
    "description":{
        type:String
    },
    "status":{
        type:String,
        required:true   
    },
    "dueDate":{
        type:String,
    },
    "priority":{
        type:String,
        required:true
    },
    "dueDate":{
        type:Date
    },
    "createdAt":{
        type:Date,
        default:new Date()
    },
    "updatedAt":{
        type:Date,
        default:new Date()
    }
},{versionKey:false})

module.exports=mongoose.model("taskModel",taskSchema,"taskList");
console.log(`The task collection is ready to uses`);

