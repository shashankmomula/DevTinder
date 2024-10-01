const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());

//TO ADD NEW USER INTO DATABASE
app.post("/signup",async (req,res)=>{
    console.log(req.body);
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User added suceessfully");
    }
    catch(err){
        res.status(400).send("Error while saving the user"+err.message);
    }
});

// TO GET A SINGLE DOCUMENT BASED ON emailId
app.get("/user",async (req,res)=>{

    const userEmail = req.body.emailId;


    try{
        const users = await User.find({emailId:userEmail});

        if(users.length === 0){
            res.status(404).send("User not found");
        }else{
            res.send(users);
        }
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }
});

// TO GET ALL THE DOCUMENTS FROM DATABASE
app.get("/feed",async (req,res)=>{

    try{
        const users = await User.find({});

        res.send(users);
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }
});

// TO GET USER DOCUMENT BY _ID WHICH IS === FindOne({_id: id})
app.get("/userById",async(req,res)=>{
    try{
        const user = await User.findById("66f8e92c3711f9a37cfee6ba");
        res.send(user);
    }
    catch(err){
        res.status(400).send("User with Id not found");
    }
});

// FIND USER BY ID AND DELETE
app.get("/userDelete",async(req,res)=>{

    const userId = req.body.userid;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted successfully");
    }
    catch(err){
        res.status(400).send("User with Id not found");
    }
});

// FIND USER BY ID AND UPDATE 
app.patch("/userUpdate",async (req,res)=>{

    const userId = req.body.id;
    const data = req.body;

    try{
        const user = await User.findByIdAndUpdate(userId,data,{returnDocument:'before'});
        res.send(user);
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }
});

//CONNECT TO DATABASE FIRST THEN LISTEN ON PORT (GOOD PRACTICE)
connectDB()
.then(()=>{
    console.log("Database sucessfully established");
    app.listen(4444,()=>{
        console.log("Server is successfullly listening on port 4444");  
    });
    
})
.catch((err)=>{
    console.log("Database failed to connect");
})


// 72KM5TSS

