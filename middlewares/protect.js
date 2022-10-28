const jwt=require('jsonwebtoken');
const db=require('../models');
const User=db.users;

// auth user
exports.auth=async(req,res,next)=>{
    try {
        const token=req.headers["x-access-token"];
        if(!token) res.status(400).json({error:"Token is absent!"});
        else{
            let obj=jwt.verify(token,process.env.SECRET);
            let user=await User.findByPk(obj.id);
            req.user=user;
            next();
        }
    } catch (error) {
        console.log(error);
        req.staus(500).json({error:"Internal server error!"});
    }
}