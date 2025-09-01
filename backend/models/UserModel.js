const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"plese add a name"]
    },
    email:{
        type:String,
        required:[true,"plese add a email"],
        unique:true,
        trim:true,
        match:[
            /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
            "plese enter valid email"
        ]
    },
    password:{
        type:String,
        required:[true,"plese add a password"],
        minlength:[6,"Passwoard must be up to 6 characters"],
        maxLength:[23,"Passwoard must not be more than 23 characters"]
    },
    photo:{
        type:String,
        required:[true,"plese add a photo"],
        default:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    phone:{
        type:String,
        default:"+94"
    },
    bio:{
        type:String,
        maxLength:[250,"Bio must not be more than 250 characters"]
    }
},{
    timestamps:true,
});

const User = mongoose.model("User",userSchema);
module.exports = User;