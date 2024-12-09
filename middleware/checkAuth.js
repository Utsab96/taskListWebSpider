const jwt=require('jsonwebtoken');

const env=require('dotenv').config()

function checkAuth(req,res,next){
    jwt.verify(req.headers.token, process.env.PRIVATE_KEY,(error,decoded)=>{
        if(error){
            res.status(500).json(error)
        }else{
            next()
        }
    })
}
module.exports=checkAuth;
console.log(`check auth is ready to use`);
