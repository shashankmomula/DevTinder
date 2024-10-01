const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:18
    },
    gender:{
        type:String,
        required:true,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Age is not valid");
                
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg",
    },
    skills:{
        type:[String],
    },
    about:{
        type:String,
        default:"This is default about information of user"
    }

   
},{
    timestamps:true,
});

module.exports = mongoose.model("User",userSchema);