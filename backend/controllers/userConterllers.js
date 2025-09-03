const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs")
const jwt  = require('jsonwebtoken');
const { now } = require("mongoose");



const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all require fields :(" });
  }
  if(password.length < 6){
    return res.status(400).json({ message: "Passwoard must be up to 6 characters :(" });
  }

  //check if user email already exists 
  const userExists = await User.findOne({email})

  if(userExists){
    return res.status(400).json({ message: "Email has already been registered :(" });
  }


 //Encrypt passwoard
 const salt = await bcrypt.genSalt(10)
 const hashedPasswoard = await bcrypt.hash(password,salt);

  //Create new user
  const user = await User.create({
    name,
    email,
    password:hashedPasswoard
  });

    //Generate Token
  const token = generateToken(user._id);

  //Send HTPP-only cookie
  res.cookie("token",token,{
    path:"/",
    httpOnly:true,
    expires:new Date(Date.now()+ 1000*86400), //1 day
    sameSite:"none",
    secure:true
  })

  if(user){
    const {_id,name,email,photo,phone,bio} = user;
    res.status(201).json({
        _id,name,email,photo,phone,bio,token
    })
  }else{
      return res.status(400).json({ message: "Invalid User data :(" });
  }

  res.json({ message: "Register User", data: { name, email } });
});


//Login User

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;

    //validate Request
    if(!email || !password){
         return res.status(400).json({ message: "Please Add email and passwoard :(" });
    }
    //cheack if user exists
    const user = await User.findOne({email});
    
    if(!user){
         return res.status(400).json({ message: "User not found :( ,please signup :)" });
    }

    //cheack if passwoard correct
    const  passwoardIsCorrect = await bcrypt.compare(password,user.password);

        //Generate Token
        const token = generateToken(user._id);

        //Send HTPP-only cookie
        res.cookie("token",token,{
            path:"/",
            httpOnly:true,
            expires:new Date(Date.now()+ 1000*86400), //1 day
            sameSite:"none",
            secure:true
        })


    if(email && passwoardIsCorrect){
        const {_id,name,email,photo,phone,bio} = user;
            res.status(200).json({
            _id,name,email,photo,phone,bio,token
        })
    }else{
        return res.status(400).json({ message: "Invalid email or passwoard :(" });
    }
});

//Logout user
const logout = asyncHandler(async (req,res)=>{
        res.cookie("token","",{
            path:"/",
            httpOnly:true,
            expires:new Date(0), 
            sameSite:"none",
            secure:true
        })
        return res.status(200).json({message:"Successfully Logout :{"});
});

// get User

const getUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id);
        if(user){
            const {_id,name,email,photo,phone,bio} = user;
            res.status(200).json({
                _id,name,email,photo,phone,bio
            })
        }else{
            return res.status(400).json({ message: "User not found :(" });
        }
});

//Get loggin Status
const loginStatus  = asyncHandler(async (req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.json(false);        
    }
    //veryfy Token
     const verified = jwt.verify(token,process.env.JWT_SECRET)
     if(!verified){
        return res.json(false)
     }
     return res.json(true);
});

//update user
const updateUser = asyncHandler(async (req,res)=> {
    res.send("Usare updated");
});

module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    loginStatus,
    updateUser
};