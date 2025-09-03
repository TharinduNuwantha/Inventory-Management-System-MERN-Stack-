const express = require("express");
const { registerUser, loginUser, logout, getUser, loginStatus } = require("../controllers/userConterllers");
const protect = require("../MiddleWare/authMiddleWare");
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logout);
router.get("/getuser",protect,getUser);
router.get("/loggedin",loginStatus);

module.exports = router;    