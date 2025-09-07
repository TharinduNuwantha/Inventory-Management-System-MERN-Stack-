const express = require("express");
const { registerUser, loginUser, logout, getUser, loginStatus, updateUser, changePasswoard } = require("../controllers/userConterllers");
const protect = require("../MiddleWare/authMiddleWare");
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logout);
router.get("/getuser",protect,getUser);
router.get("/loggedin",loginStatus);
router.patch("/updateuser",protect,updateUser);
router.patch("/changepasswoard",protect,changePasswoard
    
);

module.exports = router;    