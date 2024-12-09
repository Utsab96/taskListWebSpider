const express=require('express')
const userRouter=express.Router();
const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken');

const env=require('dotenv').config()
const bcryptjs=require('bcryptjs');

function hashPassword(password){
    const salt=bcryptjs.genSaltSync(10);
    const hash=bcryptjs.hashSync(password,salt);
    return hash;
}
userRouter.post("/signup",(req,res)=>{
    userModel.create({
        "name":req.body.name,
        "email":req.body.email,
        "phone":req.body.phone,
        "password":hashPassword(req.body.password)
    }).then((userInfo)=>{
        if(!userInfo){
            res.status(404).json({
                messsge:'sign up failed',
            })
        }else{
            res.status(200).json({
                message:'Sign up success',
                data:userInfo
            })
        }
    })
})
userRouter.post("/signin",(req,res)=>{
    const email=req.body.email;
    userModel.find({'email':email})
    .then((userInfo)=>{
        if(!userInfo){
            res.status(404).json({
                messsge:'user not found'
            })
        }else{
            let checkPass=bcryptjs.compareSync(req.body.password,userInfo[0].password)
            if(!checkPass){
                res.status(404).json({
                    message:'Sign in failed'
                })
            }else{
                let token=jwt.sign({"User_name":userInfo.name},process.env.PRIVATE_KEY,{expiresIn:'1h'})
                res.status(200).json({
                    message:"sign in success",
                    data:userInfo,token
                })
            }
        }
    })
})

module.exports=userRouter;
console.log(`The user router is ready to use`);
