//importing express and cors for creating server
const express=require('express');
const cors=require('cors');
//importing dotenv for environment setup
const env=require('dotenv').config();
//requiring the database connection
const db=require('./models/connection');
//importing the task router
const taskRouter = require('./routes/tasks.routes');
//creating post and host for the server
const port=process.env.PORT;
const host=process.env.HOST;

//creating instance for express
const app=express();

//creating middleware to send data from front end from computer or a mobile application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//creating a landing page
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to the task server</h1>`);
    
})
//adding taskRouter
app.use("/api/task",taskRouter);
//listening the server
app.listen(port,host,()=>{
    console.log(`Ther server is listening at http://${host}:${port}/`);
})