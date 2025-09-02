const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

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

  //Create new user
  const user = await User.create({
    name,
    email,
    password
  });

  if(user){
    const {_id,name,email,photo,phone,bio} = user;
    res.status(201).json({
        _id,name,email,photo,phone,bio
    })
  }else{
      return res.status(400).json({ message: "Invalid User data :(" });
  }

  res.json({ message: "Register User", data: { name, email } });
});


module.exports = {
    registerUser,
};