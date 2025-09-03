const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const jwt  = require('jsonwebtoken');

const protect = asyncHandler(async (req,res,next)=>{
    try{
        const token =  req.cookies.token

        if(!token){
            return res.status(401).json({message:"Not Authorized, please login"});
        }

        //veryfy Token
        const verified = jwt.verify(token,process.env.JWT_SECRET)

        //get user id from token 
        user = await User.findById(verified.id).select("-password")

        if(!user){
            res.status(401).json({message:"User Not Found"})
        }

        req.user = user
        next();
    }catch(error){
        return res.status(401).json({message:"Not Authorized, please login"});
    }
})

module.exports = protect;