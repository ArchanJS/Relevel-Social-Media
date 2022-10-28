const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const db=require('../models');
const sendEmail=require('../utils/sendEmail');
const User=db.users;

// Get user's details
exports.getDetails=async(req,res)=>{
    try {
        res.status(200).send(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error!"});
    }
}

//Profile updation
exports.updateProfile=async(req,res)=>{
    try {
        await User.update(req.body,{where:{id:req.user.id}});
        res.status(200).json({message:"User updated!"});
    } catch (error) {
        console.log(error);
        req.staus(500).json({error:"Internal server error!"});
    }
} 

// Profile deletion
exports.deleteProfile=async(req,res)=>{
    try {
        await User.destroy({where:{id:req.user.id}});
        res.status(200).json({message:"User deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error!"});
    }
}