const express = require("express");
const { registerUser } = require("../controllers/userConterllers");
const router = express.Router();

router.post("/register",registerUser);

module.exports = router;