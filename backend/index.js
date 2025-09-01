const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Routes
app.get("/",(req,res)=>{
    res.send("Homw Page")
})


const PORT = process.env.PORT || 5000;

//connect to mongodb server
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server Running on port ${PORT}`)
        })
    })
    .catch((err)=>console.error(err));
